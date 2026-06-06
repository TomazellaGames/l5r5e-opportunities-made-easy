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

export class OpportunitiesReference extends SidebarTab {

  static tabName = "l5r5eopps";

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id:       "l5r5e-opportunities-reference",
      classes:  ["sidebar-tab", MODULE_ID],
      template: `modules/${MODULE_ID}/templates/opportunities-reference.hbs`,
      title:    "Opportunities Reference",
      icon:     "fas fa-scroll",
      scrollY:  [".opp-ref-list"],
    });
  }

  async getData() {
    const entries = [];

    const push = (opp, ring, situation, situationLabel) => {
      entries.push({
        ...opp,
        ring,
        situation,
        ringLabel: RING_LABELS[ring] ?? ring,
        situationLabel,
      });
    };

    // Generic (ring-agnostic)
    for (const opp of OPPORTUNITIES.generic) {
      push(opp, "any", "generic", "General");
    }

    // Skill group × ring
    const skillLabels = {
      artisan: "Artisan",
      scholar: "Scholar",
      social:  "Social",
      trade:   "Trade",
      martial: "Martial",
    };
    for (const [group, rings] of Object.entries(OPPORTUNITIES.skillGroups)) {
      const label = skillLabels[group] ?? group;
      for (const [ring, opps] of Object.entries(rings)) {
        for (const opp of opps) push(opp, ring, group, label);
      }
    }

    // Invocations
    for (const [ring, opps] of Object.entries(OPPORTUNITIES.invocations)) {
      for (const opp of opps) push(opp, ring, "invocations", "Invocations");
    }

    // Shadowlands special circumstances
    for (const [ring, opps] of Object.entries(OPPORTUNITIES.shadowlands)) {
      for (const opp of opps) push(opp, ring, "shadowlands", "Shadowlands");
    }

    for (const [ring, opps] of Object.entries(OPPORTUNITIES.whileTainted)) {
      for (const opp of opps) push(opp, ring, "whileTainted", "While Tainted");
    }

    for (const [ring, opps] of Object.entries(OPPORTUNITIES.againstTainted)) {
      for (const opp of opps) push(opp, ring, "againstTainted", "vs Tainted");
    }

    for (const [ring, opps] of Object.entries(OPPORTUNITIES.initiativeCheck)) {
      for (const opp of opps) push(opp, ring, "initiative", "Initiative");
    }

    return { entries };
  }

  activateListeners(html) {
    super.activateListeners(html);
    const root = html instanceof jQuery ? html[0] : html;

    let activeRing      = "";
    let activeSituation = "";

    const applyFilters = () => {
      root.querySelectorAll(".opp-ref-entry").forEach(entry => {
        const ringOk = !activeRing || entry.dataset.ring === activeRing || entry.dataset.ring === "any";
        const sitOk  = !activeSituation || entry.dataset.situation === activeSituation;
        entry.classList.toggle("opp-ref-hidden", !(ringOk && sitOk));
      });
    };

    root.querySelectorAll(".opp-ref-filter[data-filter-type='ring']").forEach(btn => {
      btn.addEventListener("click", () => {
        activeRing = btn.dataset.filterValue;
        root.querySelectorAll(".opp-ref-filter[data-filter-type='ring']")
            .forEach(b => b.classList.toggle("active", b === btn));
        applyFilters();
      });
    });

    root.querySelectorAll(".opp-ref-filter[data-filter-type='situation']").forEach(btn => {
      btn.addEventListener("click", () => {
        activeSituation = btn.dataset.filterValue;
        root.querySelectorAll(".opp-ref-filter[data-filter-type='situation']")
            .forEach(b => b.classList.toggle("active", b === btn));
        applyFilters();
      });
    });
  }
}
