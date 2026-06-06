// scripts/opportunities-reference.js
import { OPPORTUNITIES } from "./data/opportunities.js";

const MODULE_ID = "l5r5e-opportunities-made-easy";

const RING_LABELS = {
  any:   "Any",
  air:   "Air",
  earth: "Earth",
  fire:  "Fire",
  water: "Water",
  void:  "Void",
};

// ── Flat entry list ───────────────────────────────────────────────────────────

export function buildReferenceEntries() {
  const entries = [];

  const push = (opp, ring, situation, situationLabel) =>
    entries.push({ ...opp, ring, situation, ringLabel: RING_LABELS[ring] ?? ring, situationLabel });

  for (const opp of OPPORTUNITIES.generic)
    push(opp, "any", "generic", "General");

  const skillLabels = { artisan: "Artisan", scholar: "Scholar", social: "Social", trade: "Trade", martial: "Martial" };
  for (const [group, rings] of Object.entries(OPPORTUNITIES.skillGroups)) {
    const label = skillLabels[group] ?? group;
    for (const [ring, opps] of Object.entries(rings))
      for (const opp of opps) push(opp, ring, group, label);
  }

  for (const [ring, opps] of Object.entries(OPPORTUNITIES.invocations))
    for (const opp of opps) push(opp, ring, "invocations", "Invocations");
  for (const [ring, opps] of Object.entries(OPPORTUNITIES.shadowlands))
    for (const opp of opps) push(opp, ring, "shadowlands", "Shadowlands");
  for (const [ring, opps] of Object.entries(OPPORTUNITIES.whileTainted))
    for (const opp of opps) push(opp, ring, "whileTainted", "While Tainted");
  for (const [ring, opps] of Object.entries(OPPORTUNITIES.againstTainted))
    for (const opp of opps) push(opp, ring, "againstTainted", "vs Tainted");
  for (const [ring, opps] of Object.entries(OPPORTUNITIES.initiativeCheck))
    for (const opp of opps) push(opp, ring, "initiative", "Initiative");

  return entries;
}

// ── Filter listeners ──────────────────────────────────────────────────────────

export function activateReferenceListeners(root) {
  let activeRing      = "";
  let activeSituation = "";

  const applyFilters = () =>
    root.querySelectorAll(".opp-ref-entry").forEach(entry => {
      const ringOk = !activeRing || entry.dataset.ring === activeRing || entry.dataset.ring === "any";
      const sitOk  = !activeSituation || entry.dataset.situation === activeSituation;
      entry.classList.toggle("opp-ref-hidden", !(ringOk && sitOk));
    });

  root.querySelectorAll(".opp-ref-filter[data-filter-type='ring']").forEach(btn =>
    btn.addEventListener("click", () => {
      activeRing = btn.dataset.filterValue;
      root.querySelectorAll(".opp-ref-filter[data-filter-type='ring']")
          .forEach(b => b.classList.toggle("active", b === btn));
      applyFilters();
    })
  );

  root.querySelectorAll(".opp-ref-filter[data-filter-type='situation']").forEach(btn =>
    btn.addEventListener("click", () => {
      activeSituation = btn.dataset.filterValue;
      root.querySelectorAll(".opp-ref-filter[data-filter-type='situation']")
          .forEach(b => b.classList.toggle("active", b === btn));
      applyFilters();
    })
  );
}

// ── Sidebar Tab — Foundry v14 ApplicationV2 ───────────────────────────────────
// Uses HandlebarsApplicationMixin(AbstractSidebarTab) exactly as Dice So Nice does.
// Registered via CONFIG.ui AND foundry.applications.sidebar.Sidebar.TABS (see main.js).

const { HandlebarsApplicationMixin } = foundry.applications.api;
const { AbstractSidebarTab }         = foundry.applications.sidebar;

export class OpportunitiesReference extends HandlebarsApplicationMixin(AbstractSidebarTab) {

  static tabName = "l5r5eopps";

  static DEFAULT_OPTIONS = {
    id:      "l5r5e-opportunities-reference",
    classes: ["l5r5e-opportunities-made-easy"],
    window:  {
      title: "Opportunities Reference",
      icon:  "fa-solid fa-scroll",
    },
  };

  static PARTS = {
    content: {
      template: `modules/${MODULE_ID}/templates/opportunities-reference.hbs`,
    },
  };

  async _prepareContext(_options) {
    return { entries: buildReferenceEntries() };
  }

  _onRender(context, options) {
    super._onRender(context, options);
    activateReferenceListeners(this.element);
  }
}
