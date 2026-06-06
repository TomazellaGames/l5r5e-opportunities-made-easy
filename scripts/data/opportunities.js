// scripts/data/opportunities.js
// Opportunity data compiled from the L5R5e Core Rulebook.
// Verify exact text against your physical book and adjust as needed.

export const OPPORTUNITIES = Object.freeze({

  // Available on ANY check regardless of ring or technique
  generic: [
    {
      id: "gen_spot",
      cost: 1,
      name: "Spot a Hidden Detail",
      description: "Notice one thing about the scene the GM was not planning to reveal.",
    },
    {
      id: "gen_create",
      cost: 2,
      name: "Create an Opening",
      description: "Choose one character present; their next check gains one bonus die.",
    },
    {
      id: "gen_recover",
      cost: 3,
      name: "Recover",
      description: "Remove 3 strife from yourself.",
    },
  ],

  rings: {
    air: [
      {
        id: "air_read",
        cost: 1,
        name: "Read the Air",
        description: "Sense the emotional state of one character in the scene.",
      },
      {
        id: "air_distract",
        cost: 2,
        name: "Distraction",
        description: "Create a distraction; one character loses their next free action.",
      },
      {
        id: "air_vanish",
        cost: 3,
        name: "Vanish",
        description: "Move to an adjacent area without being observed.",
      },
    ],
    earth: [
      {
        id: "earth_steady",
        cost: 1,
        name: "Steady Yourself",
        description: "Remove 1 strife from yourself.",
      },
      {
        id: "earth_endure",
        cost: 2,
        name: "Endure",
        description: "Reduce the severity of the next wound you suffer by 1.",
      },
      {
        id: "earth_immov",
        cost: 3,
        name: "Immovable",
        description: "Until your next turn, it costs your opponents 1 extra action to move or affect you.",
      },
    ],
    fire: [
      {
        id: "fire_inspire",
        cost: 1,
        name: "Inspire",
        description: "Reduce the TN of one nearby ally's next check by 1.",
      },
      {
        id: "fire_ferocity",
        cost: 2,
        name: "Ferocity",
        description: "Your next attack inflicts 2 additional fatigue on the target.",
      },
      {
        id: "fire_conflag",
        cost: 3,
        name: "Conflagration",
        description: "Deal bonus fire/environmental damage or impose burning condition (GM discretion).",
      },
    ],
    water: [
      {
        id: "water_move",
        cost: 1,
        name: "Swift Movement",
        description: "Move to an adjacent area as a free action.",
      },
      {
        id: "water_adapt",
        cost: 2,
        name: "Adapt",
        description: "Change your approach; you may swap one kept die result to any face of the same die type.",
      },
      {
        id: "water_flow",
        cost: 3,
        name: "Flow Like Water",
        description: "Gain a bonus die on your next check before the end of this scene.",
      },
    ],
    void: [
      {
        id: "void_insight",
        cost: 1,
        name: "Spiritual Insight",
        description: "Gain 1 void point.",
      },
      {
        id: "void_center",
        cost: 2,
        name: "Center Yourself",
        description: "Remove 3 strife from yourself.",
      },
      {
        id: "void_transcend",
        cost: 3,
        name: "Transcend",
        description: "You may ignore the effects of your lowest active condition until the end of the scene.",
      },
    ],
  },

  // Shown only when roll has a target OR uses a martial skill
  conflict: [
    {
      id: "conf_flurry",
      cost: 1,
      name: "Flurry",
      description: "Make an additional Strike against the same target at no action cost.",
    },
    {
      id: "conf_move",
      cost: 1,
      name: "Swift Step",
      description: "Move to an adjacent zone as part of this action.",
    },
    {
      id: "conf_trip",
      cost: 2,
      name: "Knock Down",
      description: "The target must pass a TN 3 Earth check or become Prone.",
    },
    {
      id: "conf_dev",
      cost: 2,
      name: "Devastating Blow",
      description: "Increase the damage dealt by this attack by your Void ring rank.",
    },
    {
      id: "conf_expose",
      cost: 3,
      name: "Expose",
      description: "The target loses their Guard posture (or cannot assume Guard until their next turn).",
    },
  ],

  techniques: {
    kata: [
      {
        id: "kata_draw",
        cost: 1,
        name: "Swift Draw",
        description: "Draw or sheathe a weapon as a free action.",
      },
      {
        id: "kata_press",
        cost: 2,
        name: "Press the Attack",
        description: "Your next attack against this target gains a bonus die.",
      },
      {
        id: "kata_finish",
        cost: 3,
        name: "Finishing Blow",
        description: "Add your Fire ring rank to damage dealt by this attack.",
      },
    ],
    kiho: [
      {
        id: "kiho_focus",
        cost: 1,
        name: "Focused Breath",
        description: "Remove 2 strife from yourself.",
      },
      {
        id: "kiho_chi",
        cost: 2,
        name: "Chi Surge",
        description: "Until your next turn, your unarmed and kiho attacks deal +1 damage.",
      },
      {
        id: "kiho_flow",
        cost: 3,
        name: "Flowing Chi",
        description: "Regain 1 void point.",
      },
    ],
    shuji: [
      {
        id: "shu_grace",
        cost: 1,
        name: "Graceful Exit",
        description: "Exit the social scene without causing offense; no one may pursue or accuse you until your next appearance.",
      },
      {
        id: "shu_press",
        cost: 2,
        name: "Press the Advantage",
        description: "Your target must answer one additional question or make one additional concession.",
      },
      {
        id: "shu_humil",
        cost: 3,
        name: "Devastating Remark",
        description: "The target gains 3 strife.",
      },
    ],
    invocation: [
      {
        id: "inv_empower",
        cost: 1,
        name: "Empower",
        description: "The invocation's effect lasts until the end of the next round (or scene for non-combat).",
      },
      {
        id: "inv_ring",
        cost: 2,
        name: "Ring Resonance",
        description: "Add a secondary ring effect based on the invocation's primary ring (GM discretion).",
      },
      {
        id: "inv_surge",
        cost: 3,
        name: "Surge",
        description: "Double the numerical value of one effect of this invocation (e.g., wounds dealt, strife removed).",
      },
    ],
    ritual: [
      {
        id: "rit_swift",
        cost: 1,
        name: "Expedient Ritual",
        description: "Reduce the time required for this ritual by half.",
      },
      {
        id: "rit_lasting",
        cost: 2,
        name: "Lasting Effect",
        description: "The ritual's duration doubles.",
      },
      {
        id: "rit_potent",
        cost: 3,
        name: "Potent Ritual",
        description: "One numerical effect of the ritual increases by your Void ring rank.",
      },
    ],
    maho: [
      {
        id: "maho_drain",
        cost: 1,
        name: "Blood Drain",
        description: "The target suffers 1 additional fatigue.",
      },
      {
        id: "maho_curse",
        cost: 2,
        name: "Deepen the Curse",
        description: "Extend one condition applied by this maho technique by one round/scene.",
      },
      {
        id: "maho_shadow",
        cost: 3,
        name: "Shadowstep",
        description: "You and one willing target may teleport to adjacent zones.",
      },
    ],
    ninjutsu: [
      {
        id: "nin_vanish",
        cost: 1,
        name: "Vanish",
        description: "Move to an adjacent zone without being seen.",
      },
      {
        id: "nin_poison",
        cost: 2,
        name: "Apply Poison",
        description: "The target is Poisoned — they lose 1 fatigue resistance until end of scene.",
      },
      {
        id: "nin_shadow",
        cost: 3,
        name: "Shadow Clone",
        description: "Create a momentary decoy; the next attack against you automatically misses.",
      },
    ],
    mantra: [
      {
        id: "man_calm",
        cost: 1,
        name: "Calming Mantra",
        description: "Remove 2 strife from one character within earshot.",
      },
      {
        id: "man_ward",
        cost: 2,
        name: "Ward",
        description: "A willing character in the scene gains +1 TN to all checks targeting them until your next turn.",
      },
      {
        id: "man_purify",
        cost: 3,
        name: "Purify",
        description: "Remove one Affliction or supernatural condition from a willing character.",
      },
    ],
    inversion: [
      {
        id: "inv2_reflect",
        cost: 1,
        name: "Reflect",
        description: "Redirect one effect of a technique or invocation back toward its originator.",
      },
      {
        id: "inv2_null",
        cost: 2,
        name: "Nullify",
        description: "Cancel one ongoing supernatural effect in the scene.",
      },
      {
        id: "inv2_unravel",
        cost: 3,
        name: "Unravel",
        description: "Permanently suppress one enchantment or curse until a shugenja re-establishes it.",
      },
    ],
  },
});
