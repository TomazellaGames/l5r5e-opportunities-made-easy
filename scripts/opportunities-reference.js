// scripts/opportunities-reference.js
import { OPPORTUNITIES } from "./data/opportunities.js";

const MODULE_ID = "l5r5e-opportunities-made-easy";

const { HandlebarsApplicationMixin, ApplicationV2 } = foundry.applications.api;

const RING_LABELS = {
  any:   "Any",
  air:   "Air",
  earth: "Earth",
  fire:  "Fire",
  water: "Water",
  void:  "Void",
};

// ── Flat entry list ───────────────────────────────────────────────────────────

function buildEntries() {
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

  for (const [ring, opps] of Object.entries(OPPORTUNITIES.downtime))
    for (const opp of opps) push(opp, ring, "downtime", "Downtime");

  for (const [ring, opps] of Object.entries(OPPORTUNITIES.war.mobilizingArmy))
    for (const opp of opps) push(opp, ring, "war", "War");
  for (const [ring, opps] of Object.entries(OPPORTUNITIES.war.massBattles))
    for (const opp of opps) push(opp, ring, "war", "War");
  for (const [ring, opps] of Object.entries(OPPORTUNITIES.war.contestedTerritory))
    for (const opp of opps) push(opp, ring, "war", "War");

  for (const [ring, opps] of Object.entries(OPPORTUNITIES.negotiation))
    for (const opp of opps) push(opp, ring, "negotiation", "Negotiation");
  for (const [ring, opps] of Object.entries(OPPORTUNITIES.romance))
    for (const opp of opps) push(opp, ring, "romance", "Romance");
  for (const [ring, opps] of Object.entries(OPPORTUNITIES.espionage))
    for (const opp of opps) push(opp, ring, "espionage", "Espionage");

  return entries;
}

// ── Filter listeners ──────────────────────────────────────────────────────────

function activateFilters(root) {
  let activeRing      = "";
  let activeSituation = "";

  const apply = () =>
    root.querySelectorAll(".opp-ref-entry").forEach(el => {
      const ringOk = !activeRing || el.dataset.ring === activeRing || el.dataset.ring === "any";
      const sitOk  = !activeSituation || el.dataset.situation === activeSituation;
      el.classList.toggle("opp-ref-hidden", !(ringOk && sitOk));
    });

  root.querySelectorAll(".opp-ref-filter[data-filter-type='ring']").forEach(btn =>
    btn.addEventListener("click", () => {
      activeRing = btn.dataset.filterValue;
      root.querySelectorAll(".opp-ref-filter[data-filter-type='ring']")
          .forEach(b => b.classList.toggle("active", b === btn));
      apply();
    })
  );

  root.querySelectorAll(".opp-ref-filter[data-filter-type='situation']").forEach(btn =>
    btn.addEventListener("click", () => {
      activeSituation = btn.dataset.filterValue;
      root.querySelectorAll(".opp-ref-filter[data-filter-type='situation']")
          .forEach(b => b.classList.toggle("active", b === btn));
      apply();
    })
  );
}

// ── Floating reference window (ApplicationV2) ─────────────────────────────────

export class OpportunitiesReferenceWindow extends HandlebarsApplicationMixin(ApplicationV2) {

  static #instance = null;

  /** Open if closed, close if open. */
  static toggle() {
    if (OpportunitiesReferenceWindow.#instance?.rendered) {
      OpportunitiesReferenceWindow.#instance.close();
    } else {
      (OpportunitiesReferenceWindow.#instance ??= new OpportunitiesReferenceWindow()).render();
    }
  }

  static DEFAULT_OPTIONS = {
    id:      "l5r5e-opportunities-reference",
    classes: ["l5r5e-opportunities-made-easy"],
    window: {
      title:     "Opportunities Reference",
      icon:      "fa-solid fa-scroll",
      resizable: true,
    },
    position: {
      width:  520,
      height: 620,
    },
  };

  static PARTS = {
    content: {
      template: `modules/${MODULE_ID}/templates/opportunities-reference.hbs`,
    },
  };

  async _prepareContext(_options) {
    return { entries: buildEntries() };
  }

  _onRender(_context, _options) {
    super._onRender(_context, _options);
    activateFilters(this.element);
  }

  async _onClose(_options) {
    await super._onClose(_options);
    OpportunitiesReferenceWindow.#instance = null;
  }
}
