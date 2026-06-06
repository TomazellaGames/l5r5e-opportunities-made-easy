// scripts/main.js
import { OpportunitiesApp } from "./opportunities-app.js";

const MODULE_ID = "l5r5e-opportunities-made-easy";

// ── Initialise ────────────────────────────────────────────────────────────────
Hooks.once("init", () => {
  // Block helper: repeat content N times (used to render opportunity cost dots)
  Handlebars.registerHelper("times", function (n, options) {
    let out = "";
    for (let i = 0; i < n; i++) out += options.fn(this);
    return out;
  });

  loadTemplates([
    `modules/${MODULE_ID}/templates/opportunities-window.hbs`,
    `modules/${MODULE_ID}/templates/opportunities-reference.hbs`,
  ]);
});

// ── Sidebar tab ───────────────────────────────────────────────────────────────
// We physically inject a tab button + panel via renderSidebar rather than
// relying on CONFIG.ui / SidebarTab, both of which changed in Foundry v14.
// The guard at the top prevents re-injection on repeated sidebar renders.

Hooks.on("renderSidebar", async (_sidebar, html) => {
  const root  = html instanceof jQuery ? html[0] : html;
  const aside = root.id === "sidebar"
    ? root
    : (root.closest?.("#sidebar") ?? document.getElementById("sidebar"));
  if (!aside) return;

  const tabNav = aside.querySelector("nav.tabs") ?? aside.querySelector(".tabs");
  if (!tabNav) return;

  // Guard: only inject once per sidebar lifetime
  if (aside.querySelector('[data-tab="l5r5eopps"]')) return;

  // ── 1. Tab nav button (injected synchronously) ──
  const tabBtn = document.createElement("a");
  tabBtn.className = "item";
  tabBtn.dataset.tab = "l5r5eopps";
  tabBtn.title = "Opportunities Reference";
  tabBtn.setAttribute("data-tooltip", "Opportunities Reference");
  tabBtn.innerHTML = `<i class="fas fa-scroll"></i>`;
  tabNav.appendChild(tabBtn);

  // ── 2. Panel shell (injected synchronously so the section exists before async) ──
  const panel = document.createElement("section");
  panel.id = "l5r5e-opportunities-reference";
  panel.className = `tab sidebar-tab ${MODULE_ID}`;
  panel.dataset.tab = "l5r5eopps";
  panel.innerHTML = `<p style="padding:1rem;font-style:italic;">Loading…</p>`;

  const lastSection =
    aside.querySelector(".sidebar-tab:last-of-type") ??
    aside.querySelector(".tab:last-of-type") ??
    tabNav;
  lastSection.insertAdjacentElement("afterend", panel);

  // ── 3. Tab switching (sync, so clicking the button works immediately) ──
  tabBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (tabBtn.classList.contains("active")) return;

    aside.querySelectorAll(".tabs .item.active").forEach(el => el.classList.remove("active"));
    aside.querySelectorAll(".sidebar-tab.active, .tab.active").forEach(el => el.classList.remove("active"));

    tabBtn.classList.add("active");
    panel.classList.add("active");

    if (aside.classList.contains("collapsed") && typeof ui?.sidebar?.expand === "function") {
      ui.sidebar.expand();
    }
  });

  // Deactivate our panel when any other sidebar tab is clicked
  aside.querySelectorAll(".tabs .item").forEach(item => {
    if (item === tabBtn) return;
    item.addEventListener("click", () => {
      tabBtn.classList.remove("active");
      panel.classList.remove("active");
    });
  });

  // ── 4. Fill panel content (async, non-blocking) ──
  try {
    const { buildReferenceEntries, activateReferenceListeners } =
      await import("./opportunities-reference.js");

    const templateHtml = await renderTemplate(
      `modules/${MODULE_ID}/templates/opportunities-reference.hbs`,
      { entries: buildReferenceEntries() },
    );

    panel.innerHTML = templateHtml;
    activateReferenceListeners(panel);
  } catch (err) {
    console.error("L5R5e Opportunities | Reference panel render failed:", err);
    panel.innerHTML =
      `<p style="padding:1rem;color:tomato;">Opportunities Reference failed to load — see console.</p>`;
  }
});

// ── Guard: only inject the button on genuine L5R dice rolls ───────────────────
function isL5RRoll(message) {
  const roll = message?.rolls?.[0];
  return !!roll?.l5r5e?.dicesTypes?.l5r;
}

// ── Build the Opportunities button ────────────────────────────────────────────
function makeButton(message) {
  const btn = document.createElement("button");
  btn.type      = "button";
  btn.className = `${MODULE_ID}-btn`;
  btn.title     = "Opportunities";
  btn.innerHTML = `<i class="i_opportunity"></i> Opportunities`;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    OpportunitiesApp.open(message);
  });
  return btn;
}

// ── Chat message card ─────────────────────────────────────────────────────────
Hooks.on("renderChatMessageHTML", (message, html, _data) => {
  if (!isL5RRoll(message)) return;
  const root   = html instanceof HTMLElement ? html : html[0];
  const rnkBtn = root.querySelector("button.chat-dice-rnk");
  if (!rnkBtn) return;
  rnkBtn.insertAdjacentElement("afterend", makeButton(message));
});

// ── Roll & Keep dialog ────────────────────────────────────────────────────────
Hooks.on("renderRollnKeepDialog", (app, html, _data) => {
  const message = app.message;
  if (!message || !isL5RRoll(message)) return;

  const root = html instanceof jQuery ? html[0] : html;

  if (root.querySelector(`.${MODULE_ID}-btn`)) return;

  const anchor = root.querySelector("#finalize") ?? root.querySelector(".rnk-ct");
  if (!anchor) return;
  anchor.insertAdjacentElement(
    anchor.id === "finalize" ? "afterend" : "beforeend",
    makeButton(message),
  );
});
