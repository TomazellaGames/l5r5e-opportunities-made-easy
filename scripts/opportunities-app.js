// scripts/opportunities-app.js
import { OPPORTUNITIES } from "./data/opportunities.js";

const MODULE_ID = "l5r5e-opportunities-made-easy";

const { HandlebarsApplicationMixin, ApplicationV2 } = foundry.applications.api;

const INVOCATION_TECH_TYPES = new Set(["invocation", "inversion"]);

const RING_LABELS = {
  air:   "Air",
  earth: "Earth",
  fire:  "Fire",
  water: "Water",
  void:  "Void",
};

const SKILL_GROUP_LABELS = {
  artisan: "Artisan",
  scholar: "Scholar",
  social:  "Social",
  trade:   "Trade",
  martial: "Martial",
};

const INVOCATION_RING_LABELS = {
  air:   "Kaze (Air) Invocations",
  earth: "Tsuchi (Earth) Invocations",
  fire:  "Hitsu (Fire) Invocations",
  water: "Mizu (Water) Invocations",
  void:  "Void Inversions",
};

export class OpportunitiesApp extends HandlebarsApplicationMixin(ApplicationV2) {

  static #instances = new Map();

  static open(message) {
    const existing = OpportunitiesApp.#instances.get(message.id);
    if (existing) {
      existing.close();
      return;
    }
    new OpportunitiesApp(message).render();
  }

  #message;
  #roll;

  constructor(message) {
    // Pass unique id per chat message so multiple windows can coexist
    super({ id: `${MODULE_ID}-${message.id}` });
    this.#message = message;
    this.#roll    = message.rolls?.[0] ?? null;
    OpportunitiesApp.#instances.set(message.id, this);
  }

  static DEFAULT_OPTIONS = {
    classes: ["l5r5e", MODULE_ID],
    window: {
      title:     "Opportunities",
      resizable: true,
    },
    position: {
      width: 520,
    },
  };

  static PARTS = {
    content: {
      template: `modules/${MODULE_ID}/templates/opportunities-window.hbs`,
    },
  };

  async _prepareContext(_options) {
    const l5r5e      = this.#roll?.l5r5e ?? {};
    const ring       = l5r5e.stance     || null;
    const item       = l5r5e.item       || null;
    const isTech     = item?.type === "technique";
    const techType   = isTech ? (item.system?.type ?? null) : null;
    const skillCatId = l5r5e.skillCatId || null;

    const isInvocation = INVOCATION_TECH_TYPES.has(techType);
    const ringLabel    = ring ? (RING_LABELS[ring] ?? ring) : null;

    let activeOpps  = [];
    let activeTitle = null;

    if (isInvocation && ring) {
      activeOpps  = OPPORTUNITIES.invocations[ring] ?? [];
      activeTitle = INVOCATION_RING_LABELS[ring] ?? `${ringLabel} Invocations`;
    } else if (skillCatId && ring) {
      activeOpps  = OPPORTUNITIES.skillGroups[skillCatId]?.[ring] ?? [];
      activeTitle = `${SKILL_GROUP_LABELS[skillCatId] ?? skillCatId} — ${ringLabel}`;
    }

    const skillGroupTabs = Object.entries(SKILL_GROUP_LABELS).map(([id, label]) => ({
      id,
      label,
      sectionTitle: ring ? `${label} — ${ringLabel}` : label,
      opps:         ring ? (OPPORTUNITIES.skillGroups[id]?.[ring] ?? []) : [],
      isCurrent:    id === skillCatId && !isInvocation,
    }));

    const invocationTab = {
      id:           "invocations",
      label:        "Invocations",
      sectionTitle: ring ? (INVOCATION_RING_LABELS[ring] ?? `${ringLabel} Invocations`) : "Invocations",
      opps:         ring ? (OPPORTUNITIES.invocations[ring] ?? []) : [],
      isCurrent:    isInvocation,
    };

    const shadowlandsTab = {
      shadowlandsTitle:  ringLabel ? `In the Shadowlands — ${ringLabel}`     : "In the Shadowlands",
      whileTaintedTitle: ringLabel ? `While Tainted — ${ringLabel}`           : "While Tainted",
      againstTitle:      ringLabel ? `Against Tainted Threats — ${ringLabel}` : "Against Tainted Threats",
      initiativeTitle:   ringLabel ? `Initiative Check — ${ringLabel}`        : "Initiative Check",
      shadowlands:     ring ? (OPPORTUNITIES.shadowlands[ring]     ?? []) : [],
      whileTainted:    ring ? (OPPORTUNITIES.whileTainted[ring]    ?? []) : [],
      againstTainted:  ring ? (OPPORTUNITIES.againstTainted[ring]  ?? []) : [],
      initiativeCheck: ring ? (OPPORTUNITIES.initiativeCheck[ring] ?? []) : [],
    };

    return {
      oppCount: l5r5e.summary?.opportunity ?? 0,
      ring,
      generic:  OPPORTUNITIES.generic,
      activeTitle,
      activeOpps,
      skillGroupTabs,
      invocationTab,
      shadowlandsTab,
    };
  }

  _onRender(_context, _options) {
    super._onRender?.(_context, _options);
    this.element.querySelectorAll(".opp-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const id = tab.dataset.tab;
        this.element.querySelectorAll(".opp-tab")
          .forEach(t => t.classList.toggle("active", t.dataset.tab === id));
        this.element.querySelectorAll(".opp-panel")
          .forEach(p => p.classList.toggle("active", p.dataset.tab === id));
      });
    });
  }

  async _onClose(_options) {
    await super._onClose?.(_options);
    OpportunitiesApp.#instances.delete(this.#message.id);
  }
}
