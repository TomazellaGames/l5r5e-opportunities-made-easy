// scripts/main.js
import { OpportunitiesApp }            from "./opportunities-app.js";
import { OpportunitiesReferenceWindow } from "./opportunities-reference.js";

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

// ── Sidebar button ────────────────────────────────────────────────────────────
// Inject a nav button into the sidebar that opens/closes the reference window.
// We do this via renderSidebar rather than CONFIG.ui/Sidebar.TABS to avoid
// ApplicationV2 panel rendering issues.
Hooks.on("renderSidebar", (_app, element) => {
  const sidebar = element instanceof HTMLElement
    ? element
    : document.getElementById("sidebar");
  if (!sidebar) return;

  // Run only once (sidebar re-renders rarely, but guard anyway)
  if (sidebar.querySelector(".l5r5e-opp-ref-btn")) return;

  const tabNav = sidebar.querySelector("nav.tabs");
  if (!tabNav) return;

  const btn = document.createElement("a");
  btn.className = "item l5r5e-opp-ref-btn";
  btn.setAttribute("data-tooltip", "Opportunities Reference");
  btn.setAttribute("aria-label", "Opportunities Reference");
  btn.innerHTML = `<i class="fa-solid fa-scroll"></i>`;

  // Place just before the settings gear so our button sits near the end
  const settingsBtn = tabNav.querySelector("[data-tab='settings']");
  if (settingsBtn) settingsBtn.insertAdjacentElement("beforebegin", btn);
  else tabNav.appendChild(btn);

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    OpportunitiesReferenceWindow.toggle();
  });
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
// In Foundry v14 renderChatMessageHTML passes a raw HTMLElement, not jQuery.
Hooks.on("renderChatMessageHTML", (message, html, _data) => {
  if (!isL5RRoll(message)) return;
  const root   = html instanceof HTMLElement ? html : html[0];
  const rnkBtn = root.querySelector("button.chat-dice-rnk");
  if (!rnkBtn) return;
  rnkBtn.insertAdjacentElement("afterend", makeButton(message));
});

// ── Roll & Keep dialog ────────────────────────────────────────────────────────
// Foundry auto-fires renderRollnKeepDialog for RollnKeepDialog (FormApplication).
// The html argument is jQuery; the dialog re-renders on every die drag, so we
// guard against double-injection with a querySelector check.
Hooks.on("renderRollnKeepDialog", (app, html, _data) => {
  const message = app.message;
  if (!message || !isL5RRoll(message)) return;

  const root = html instanceof jQuery ? html[0] : html;

  // Prevent duplicate buttons on re-renders caused by dice dragging
  if (root.querySelector(`.${MODULE_ID}-btn`)) return;

  // Prefer inserting after the #finalize button; fall back to the .rnk-ct section
  const anchor = root.querySelector("#finalize") ?? root.querySelector(".rnk-ct");
  if (!anchor) return;
  anchor.insertAdjacentElement(
    anchor.id === "finalize" ? "afterend" : "beforeend",
    makeButton(message),
  );
});
