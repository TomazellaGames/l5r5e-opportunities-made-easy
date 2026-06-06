// scripts/main.js
import { OpportunitiesApp }       from "./opportunities-app.js";
import { OpportunitiesReference } from "./opportunities-reference.js";

const MODULE_ID = "l5r5e-opportunities-made-easy";

Hooks.once("init", () => {
  // Block helper: repeat content N times (used to render opportunity cost dots)
  Handlebars.registerHelper("times", function (n, options) {
    let out = "";
    for (let i = 0; i < n; i++) out += options.fn(this);
    return out;
  });

  // Register sidebar tab
  CONFIG.ui.l5r5eopps = OpportunitiesReference;

  loadTemplates([
    `modules/${MODULE_ID}/templates/opportunities-window.hbs`,
    `modules/${MODULE_ID}/templates/opportunities-reference.hbs`,
  ]);
});

/** Guard: only inject the button on genuine L5R dice rolls */
function isL5RRoll(message) {
  const roll = message?.rolls?.[0];
  return !!roll?.l5r5e?.dicesTypes?.l5r;
}

/** Build the Opportunities button as a plain DOM element (works in both hook contexts) */
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
