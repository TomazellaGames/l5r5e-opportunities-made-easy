// scripts/opportunities-app.js
import { OPPORTUNITIES } from "./data/opportunities.js";

const MODULE_ID = "l5r5e-opportunities-made-easy";

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

const INVOCATION_LABELS = {
  air:   "Kaze (Air) Invocations",
  earth: "Tsuchi (Earth) Invocations",
  fire:  "Hitsu (Fire) Invocations",
  water: "Mizu (Water) Invocations",
  void:  "Void Inversions",
};

export class OpportunitiesApp extends Application {

  // messageId → OpportunitiesApp; used to toggle open/close on repeated clicks
  static #instances = new Map();

  /** Open the popup for this message, or close it if already open. */
  static open(message) {
    const existing = OpportunitiesApp.#instances.get(message.id);
    if (existing) {
      existing.close();
      return;
    }
    new OpportunitiesApp(message).render(true);
  }

  #message;
  #roll;

  constructor(message) {
    super();
    this.#message = message;
    this.#roll    = message.rolls?.[0] ?? null;
    OpportunitiesApp.#instances.set(message.id, this);
  }

  get id() {
    return `${MODULE_ID}-${this.#message.id}`;
  }

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes:   ["l5r5e", MODULE_ID],
      template:  `modules/${MODULE_ID}/templates/opportunities-window.hbs`,
      title:     "Opportunities",
      width:     500,
      height:    "auto",
      resizable: true,
    });
  }

  async getData() {
    const l5r5e     = this.#roll?.l5r5e ?? {};
    const ring      = l5r5e.stance    || null;
    const item      = l5r5e.item      || null;
    const isTech    = item?.type === "technique";
    const techType  = isTech ? (item.system?.type ?? null) : null;
    const skillCatId = l5r5e.skillCatId || null;

    const isInvocation = INVOCATION_TECH_TYPES.has(techType);

    let opps = [];
    let sectionTitle = null;

    if (isInvocation && ring) {
      opps = OPPORTUNITIES.invocations[ring] ?? [];
      sectionTitle = INVOCATION_LABELS[ring] ?? `${RING_LABELS[ring] ?? ring} Invocations`;
    } else if (skillCatId && ring) {
      opps = OPPORTUNITIES.skillGroups[skillCatId]?.[ring] ?? [];
      const groupLabel = SKILL_GROUP_LABELS[skillCatId] ?? skillCatId;
      const ringLabel  = RING_LABELS[ring] ?? ring;
      sectionTitle = `${groupLabel} — ${ringLabel}`;
    }

    return {
      oppCount:     l5r5e.summary?.opportunity ?? 0,
      ring,
      skillCatId,
      isInvocation,
      sectionTitle,
      generic:      OPPORTUNITIES.generic,
      opps,
    };
  }

  async _onClose(options) {
    await super._onClose(options);
    OpportunitiesApp.#instances.delete(this.#message.id);
  }
}
