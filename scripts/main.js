// scripts/main.js
import { OpportunitiesApp }            from "./opportunities-app.js";
import { OpportunitiesReferenceWindow } from "./opportunities-reference.js";

const MODULE_ID = "l5r5e-opportunities-made-easy";

// ── Initialise ────────────────────────────────────────────────────────────────
Hooks.once("init", () => {
  Handlebars.registerHelper("times", function (n, options) {
    let out = "";
    for (let i = 0; i < n; i++) out += options.fn(this);
    return out;
  });

  // ── Sidebar tab registration ──
  // A stub class whose only job is to render the "Open Opportunities Reference"
  // button inside the sidebar panel.  Clicking the button opens the floating
  // reference window (OpportunitiesReferenceWindow).
  const { HandlebarsApplicationMixin } = foundry.applications.api;
  const { AbstractSidebarTab }         = foundry.applications.sidebar;

  class L5r5eOppsTab extends HandlebarsApplicationMixin(AbstractSidebarTab) {
    static tabName        = "l5r5eopps";
    static DEFAULT_OPTIONS = { id: "l5r5e-opportunities-tab" };
    static PARTS          = {
      content: {
        template: `modules/${MODULE_ID}/templates/opportunities-tab.hbs`,
        root: true,
      },
    };
    async _prepareContext() { return {}; }
    _onRender(_context, _options) {
      super._onRender(_context, _options);
      this.element.querySelector(".opp-ref-open-btn")
        ?.addEventListener("click", () => OpportunitiesReferenceWindow.toggle());
    }
  }

  CONFIG.ui.l5r5eopps = L5r5eOppsTab;

  const Sidebar = foundry.applications.sidebar.Sidebar;
  if (Sidebar?.TABS) {
    const settingsEntry = Sidebar.TABS.settings;
    if (settingsEntry) delete Sidebar.TABS.settings;
    Sidebar.TABS.l5r5eopps = { icon: "fa-solid fa-scroll", tooltip: "Opportunities Reference" };
    if (settingsEntry) Sidebar.TABS.settings = settingsEntry;
  }

  loadTemplates([
    `modules/${MODULE_ID}/templates/opportunities-window.hbs`,
    `modules/${MODULE_ID}/templates/opportunities-reference.hbs`,
    `modules/${MODULE_ID}/templates/opportunities-tab.hbs`,
  ]);
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
