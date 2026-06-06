// scripts/opportunities-app.js
import { OPPORTUNITIES } from "./data/opportunities.js";

const MODULE_ID = "l5r5e-opportunities-made-easy";

// Skills that indicate a conflict/martial context
const MARTIAL_SKILLS = new Set(["melee", "ranged", "unarmed", "fitness", "tactics"]);

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

  // Give each instance a unique DOM id so multiple popups can coexist
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
    const l5r5e   = this.#roll?.l5r5e ?? {};
    const ring    = l5r5e.stance || null;
    const item    = l5r5e.item   || null;
    const isTech  = item?.type === "technique";
    const techType = isTech ? (item.system?.type ?? null) : null;

    const isConflict = !!l5r5e.target
      || MARTIAL_SKILLS.has(l5r5e.skillId)
      || l5r5e.skillCatId === "martial";

    return {
      oppCount:  l5r5e.summary?.opportunity ?? 0,
      ring,
      isTech,
      techType,
      isConflict,
      generic:   OPPORTUNITIES.generic,
      ringOpps:  ring ? (OPPORTUNITIES.rings[ring] ?? []) : [],
      conflict:  isConflict ? OPPORTUNITIES.conflict : [],
      techOpps:  (isTech && techType) ? (OPPORTUNITIES.techniques[techType] ?? []) : [],
    };
  }

  async _onClose(options) {
    await super._onClose(options);
    OpportunitiesApp.#instances.delete(this.#message.id);
  }
}
