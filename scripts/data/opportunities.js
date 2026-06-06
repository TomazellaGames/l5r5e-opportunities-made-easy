// scripts/data/opportunities.js
// Opportunity data sourced from https://www.courtgames.net/5th-edition-opportunity-table.html

export const OPPORTUNITIES = Object.freeze({

  // Available on every check regardless of ring, skill group, or technique
  generic: [
    {
      id: "gen_assist_fail",
      cost: 1,
      name: "Assist After Failure",
      description: "If you failed, provide assistance to the next character trying to accomplish the same action.",
    },
    {
      id: "gen_strife",
      cost: 1,
      name: "Reduce Strife",
      description: "Remove 1 strife you gained from this check per * spent this way.",
      note: "Scalable",
    },
    {
      id: "gen_assist",
      cost: 2,
      name: "Provide Assistance",
      description: "Provide assistance to the next character to attempt a check to accomplish something similar.",
    },
  ],

  // Organized by skill group → ring approach
  skillGroups: {

    artisan: {
      air: [
        { id: "art_air_demeanor",  cost: 1, name: "Learn Demeanor",   description: "Learn another character in the scene's demeanor (if an NPC) and current strife." },
        { id: "art_air_subtle",    cost: 1, name: "Subtle Action",     description: "Act subtly to attract minimal attention in your efforts. Extra * makes the attempt even subtler.", note: "Scalable" },
        { id: "art_air_detail",    cost: 2, name: "Notice Detail",     description: "Notice an interesting detail about a character in the scene, such as an advantage or disadvantage." },
        { id: "art_air_quality",   cost: 1, name: "Add Quality",       description: "If you succeed, add the Resplendent or Subtle quality to an item you are refining." },
      ],
      earth: [
        { id: "art_ear_reassure",  cost: 1, name: "Reassure",          description: "Reassure another character in the scene with your presence, allowing them to remove 2 strife." },
        { id: "art_ear_careful",   cost: 1, name: "Careful Work",      description: "Act carefully to minimize consequences of failure or other dangers that could arise from the task.", note: "Scalable" },
        { id: "art_ear_recall",    cost: 2, name: "Sudden Recall",     description: "Suddenly recall an important piece of information not directly related to the task. At the GM's discretion, you may establish a small preparatory action you took earlier." },
        { id: "art_ear_durable",   cost: 1, name: "Add Durable Quality", description: "If you succeed, add the Durable quality to an item you are restoring." },
      ],
      fire: [
        { id: "art_fir_inflame",   cost: 1, name: "Inflame",           description: "Inflame another character in the scene with your presence, causing them to receive 2 strife." },
        { id: "art_fir_flashy",    cost: 1, name: "Flashy Performance", description: "Perform the task in a flashy way, drawing attention to yourself. Extra * attracts even more notice.", note: "Scalable" },
        { id: "art_fir_notice",    cost: 2, name: "Notice Absence",    description: "Notice something missing or out of place in the vicinity that is not directly related to the task." },
        { id: "art_fir_copy",      cost: 1, name: "Create Extra Copy", description: "If you succeed, make one additional copy of the item you are creating." },
      ],
      water: [
        { id: "art_wat_strife",    cost: 1, name: "Remove Strife",     description: "Remove 2 strife from yourself." },
        { id: "art_wat_efficient", cost: 1, name: "Efficient Completion", description: "Perform the task efficiently, completing it more quickly or saving supplies. Extra * further reduces the time or materials expended.", note: "Scalable" },
        { id: "art_wat_detail",    cost: 2, name: "Spot Detail",       description: "Spot an interesting physical detail present in your environment not directly related to your check. At the GM's discretion, you may establish a piece of terrain or a mundane object nearby." },
        { id: "art_wat_bonus",     cost: 1, name: "Artisan's Momentum", description: "Add a kept Ring Dice set to an * result to the next Artisan skill check you make before the end of the game session." },
      ],
      void: [
        { id: "art_voi_ring",      cost: 1, name: "Ring Focus",        description: "Choose a ring other than Void. Reduce the TN of your next check by 1 if it uses that ring." },
        { id: "art_voi_spirit",    cost: 1, name: "Supernatural Detection", description: "Feel a chill down your spine, notice a sudden silence, or detect another sign of the supernatural if there is a spiritual disturbance in the scene. Extra * gives an increasingly precise location.", note: "Scalable" },
        { id: "art_voi_insight",   cost: 2, name: "Spiritual Insight", description: "Gain spiritual insight into the nature of the universe or your own heart. At the GM's discretion, you may establish a previously unrevealed fact about your character that relates to the situation." },
        { id: "art_voi_attune",    cost: 1, name: "Attunement",        description: "Reduce the TN of the next check you make using the item you are attuning yourself to by 1." },
        { id: "art_voi_minimal",   cost: 1, name: "Leave No Trace",    description: "Reduce any effect you have on your environment (and physical traces of your efforts) to a minimum." },
      ],
    },

    scholar: {
      air: [
        { id: "sch_air_demeanor",  cost: 1, name: "Learn Demeanor",   description: "Learn another character in the scene's demeanor (if an NPC) and current strife." },
        { id: "sch_air_subtle",    cost: 1, name: "Subtle Action",     description: "Act subtly to attract minimal attention in your efforts. Extra * makes the attempt even subtler.", note: "Scalable" },
        { id: "sch_air_detail",    cost: 2, name: "Notice Detail",     description: "Notice an interesting detail about a character in the scene, such as an advantage or disadvantage." },
        { id: "sch_air_creator",   cost: 1, name: "Creator Insight",   description: "Learn something about who created or used an item you're studying — GM's choice of an advantage or disadvantage they possess." },
      ],
      earth: [
        { id: "sch_ear_reassure",  cost: 1, name: "Reassure",          description: "Reassure another character in the scene with your presence, allowing them to remove 2 strife." },
        { id: "sch_ear_careful",   cost: 1, name: "Careful Work",      description: "Act carefully to minimize consequences of failure or other dangers that could arise from the task.", note: "Scalable" },
        { id: "sch_ear_recall",    cost: 2, name: "Sudden Recall",     description: "Suddenly recall an important piece of information not directly related to the task; establish a small preparatory action you took earlier." },
        { id: "sch_ear_source",    cost: 1, name: "Research Source",   description: "Remember a place where you can research or study the topic you were attempting to recall." },
        { id: "sch_ear_anc1",      cost: 1, name: "Ancestry Unearthed — Oath",   description: "You know one sworn oath the character's family took in the past, and whether or not they have broken or bent it.", note: "Requires Shuji: Ancestry Unearthed" },
        { id: "sch_ear_anc2",      cost: 2, name: "Ancestry Unearthed — Secret", description: "You know one secret of the character's family that they would prefer be forgotten, and have perhaps even worked to bury.", note: "Requires Shuji: Ancestry Unearthed" },
        { id: "sch_ear_anc3",      cost: 3, name: "Ancestry Unearthed — Hidden", description: "You know something the character does not even know about their own ancestry.", note: "Requires Shuji: Ancestry Unearthed" },
      ],
      fire: [
        { id: "sch_fir_inflame",   cost: 1, name: "Inflame",           description: "Inflame another character in the scene with your presence, causing them to receive 2 strife." },
        { id: "sch_fir_flashy",    cost: 1, name: "Flashy Performance", description: "Perform the task in a flashy way, drawing attention to yourself. Extra * attracts even more notice.", note: "Scalable" },
        { id: "sch_fir_notice",    cost: 2, name: "Notice Absence",    description: "Notice something missing or out of place in the vicinity that is not directly related to the task." },
        { id: "sch_fir_motives",   cost: 1, name: "Extrapolate Motivations", description: "Extrapolate the motivations or desires of another character in the scene or wider situation." },
        { id: "sch_fir_truth",     cost: 1, name: "Truth Burns Through Lies", description: "If there is a single statement upon which the character's story hinges, you determine what it is and what you would need to verify or disprove it.", note: "Requires Shuji" },
      ],
      water: [
        { id: "sch_wat_strife",    cost: 1, name: "Remove Strife",     description: "Remove 2 strife from yourself." },
        { id: "sch_wat_efficient", cost: 1, name: "Efficient Completion", description: "Perform the task efficiently, completing it more quickly or saving supplies. Extra * further reduces the time or materials expended.", note: "Scalable" },
        { id: "sch_wat_detail",    cost: 2, name: "Spot Detail",       description: "Spot an interesting physical detail present in your environment not directly related to your check. At the GM's discretion, you may establish a piece of terrain or a mundane object nearby." },
        { id: "sch_wat_identify",  cost: 1, name: "Unique Quality",    description: "Spot a unique or identifying quality, aspect, or ability of something that you are identifying." },
      ],
      void: [
        { id: "sch_voi_ring",      cost: 1, name: "Ring Focus",        description: "Choose a ring other than Void. Reduce the TN of your next check by 1 if it uses that ring." },
        { id: "sch_voi_spirit",    cost: 1, name: "Supernatural Detection", description: "Feel a chill down your spine, notice a sudden silence, or detect another sign of the supernatural if there is a spiritual disturbance in the scene. Extra * gives an increasingly precise location.", note: "Scalable" },
        { id: "sch_voi_insight",   cost: 2, name: "Spiritual Insight", description: "Gain spiritual insight into the nature of the universe or your own heart. At the GM's discretion, you may establish a previously unrevealed fact about your character." },
        { id: "sch_voi_inquiry",   cost: 1, name: "Inquiry Intuition", description: "Intuit whether you can learn anything of value from your current course of inquiry." },
      ],
    },

    social: {
      air: [
        { id: "soc_air_demeanor",  cost: 1, name: "Learn Demeanor",   description: "Learn another character in the scene's demeanor (if an NPC) and current strife." },
        { id: "soc_air_subtle",    cost: 1, name: "Subtle Action",     description: "Act subtly to attract minimal attention in your efforts. Extra * makes the attempt even subtler.", note: "Scalable" },
        { id: "soc_air_detail",    cost: 2, name: "Notice Detail",     description: "Notice an interesting detail about a character in the scene, such as an advantage or disadvantage." },
        { id: "soc_air_status",    cost: 1, name: "Compare Standing",  description: "Learn if another character's honor, glory, or status is higher, lower, or equal to yours." },
        { id: "soc_air_cadence",   cost: 1, name: "Cadence",           description: "Convey a secret message to observers; spend additional * to reach those without this technique.", note: "Requires Shuji: Cadence — Scalable" },
        { id: "soc_air_rustling",  cost: 1, name: "Rustling of Leaves", description: "Increase the TN of any check to trace the rumor back to you by 2 per * spent this way.", note: "Requires Shuji: Rustling of Leaves — Scalable" },
        { id: "soc_air_wind",      cost: 3, name: "The Wind Blows Both Ways", description: "Modify glory gains or forfeits for targets until the end of the scene.", note: "Requires Shuji: The Wind Blows Both Ways" },
        { id: "soc_air_bend",      cost: 5, name: "Bend with the Storm", description: "Make targets believe you possess specific advantages or disadvantages without direct communication.", note: "Requires Shuji: Bend with the Storm" },
      ],
      earth: [
        { id: "soc_ear_reassure",  cost: 1, name: "Reassure",          description: "Reassure another character in the scene with your presence, allowing them to remove 2 strife." },
        { id: "soc_ear_careful",   cost: 1, name: "Careful Work",      description: "Act carefully to minimize consequences of failure or other dangers that could arise from the task.", note: "Scalable" },
        { id: "soc_ear_recall",    cost: 2, name: "Sudden Recall",     description: "Suddenly recall an important piece of information not directly related to the task; establish a preparatory action taken earlier." },
        { id: "soc_ear_hinder",    cost: 1, name: "Hinder Opponent",   description: "Increase the TN of the next Social check another character makes before the end of the scene by 1." },
        { id: "soc_ear_stonewall", cost: 1, name: "Stonewall Tactics", description: "Increase the TN of all non-self-directed checks a target makes by 1 per * spent until your next turn.", note: "Requires Shuji: Stonewall Tactics — Scalable" },
        { id: "soc_ear_duty1",     cost: 1, name: "Weight of Duty (Fear)", description: "Discover how a target fears they have failed as a samurai.", note: "Requires Shuji: Weight of Duty" },
        { id: "soc_ear_duty2",     cost: 2, name: "Weight of Duty (Giri)", description: "Learn the target's giri obligation.", note: "Requires Shuji: Weight of Duty" },
      ],
      fire: [
        { id: "soc_fir_inflame",   cost: 1, name: "Inflame",           description: "Inflame another character in the scene with your presence, causing them to receive 2 strife." },
        { id: "soc_fir_flashy",    cost: 1, name: "Flashy Performance", description: "Perform the task in a flashy way, drawing attention to yourself. Extra * attracts even more notice.", note: "Scalable" },
        { id: "soc_fir_notice",    cost: 1, name: "Notice Absence",    description: "Notice something missing or out of place in the vicinity that is not directly related to the task." },
        { id: "soc_fir_tn",        cost: 1, name: "Aid Companion",     description: "Reduce the TN of the next Social check another character makes before the end of the scene by 1." },
        { id: "soc_fir_dazzle",    cost: 3, name: "Dazzling Performance", description: "Next time you receive a glory award this scene, increase the amount by 1. Higher-status characters grant +1 per * spent.", note: "Requires Shuji: Dazzling Performance — Scalable" },
        { id: "soc_fir_flames",    cost: 2, name: "Fanning the Flames",  description: "Targets gain the Dazed condition per * spent, or the Enraged condition per 2 * spent.", note: "Requires Shuji: Fanning the Flames — Scalable" },
        { id: "soc_fir_sear",      cost: 5, name: "Sear the Wound",    description: "Apply the target's known disadvantage to all their checks through the end of the scene.", note: "Requires Shuji: Sear the Wound" },
        { id: "soc_fir_distract",  cost: 1, name: "Sensational Distraction", description: "Adjust vigilance values during this interaction per * spent.", note: "Requires Shuji: Sensational Distraction — Scalable" },
        { id: "soc_fir_embers",    cost: 1, name: "Stirring the Embers", description: "A target rerolls three dice instead of two when a known distinction applies.", note: "Requires Shuji: Stirring the Embers — Scalable" },
      ],
      water: [
        { id: "soc_wat_jest",      cost: 1, name: "All In Jest",       description: "If you forfeited honor as part of the check in order to say something rude or appeal to base desires, regain 1 honor per * spent this way.", note: "Scalable" },
        { id: "soc_wat_shallow",   cost: 1, name: "Shallow Waters",    description: "Learn one material item a target character desires (1 *) or their ninjō (2 *).", note: "2 * for ninjō" },
        { id: "soc_wat_desire",    cost: 1, name: "Well of Desire",    description: "When presenting a gift via Courtesy (Water), the target must forfeit glory equal to your Water ring to refuse; if they accept because they desire it, they must also suffer strife equal to the item's rarity, and the TN of their next Social check against you is reduced by the item's rarity." },
      ],
      void: [
        { id: "soc_voi_ring",      cost: 1, name: "Ring Focus",        description: "Choose a ring other than Void. Reduce the TN of your next check by 1 if it uses that ring." },
        { id: "soc_voi_spirit",    cost: 1, name: "Supernatural Detection", description: "Feel a chill down your spine, notice a sudden silence, or detect another sign of the supernatural if there is a spiritual disturbance in the scene. Extra * gives an increasingly precise location.", note: "Scalable" },
        { id: "soc_voi_insight",   cost: 2, name: "Spiritual Insight", description: "Gain spiritual insight into the nature of the universe or your own heart. At the GM's discretion, you may establish a previously unrevealed fact about your character." },
        { id: "soc_voi_discern",   cost: 1, name: "Discern Objective", description: "Discern the objective of another character in the scene." },
      ],
    },

    trade: {
      air: [
        { id: "trd_air_demeanor",  cost: 1, name: "Learn Demeanor",   description: "Learn another character in the scene's demeanor (if an NPC) and current strife." },
        { id: "trd_air_subtle",    cost: 1, name: "Subtle Action",     description: "Act subtly to attract minimal attention in your efforts. Extra * makes the attempt even subtler.", note: "Scalable" },
        { id: "trd_air_detail",    cost: 2, name: "Notice Detail",     description: "Notice an interesting detail about a character in the scene, such as an advantage or disadvantage." },
        { id: "trd_air_price",     cost: 1, name: "Inflate Price",     description: "Convince a buyer to pay an additional 10% for an item you are selling." },
      ],
      earth: [
        { id: "trd_ear_reassure",  cost: 1, name: "Reassure",          description: "Reassure another character in the scene with your presence, allowing them to remove 2 strife." },
        { id: "trd_ear_careful",   cost: 1, name: "Careful Work",      description: "Act carefully to minimize consequences of failure or other dangers that could arise from the task.", note: "Scalable" },
        { id: "trd_ear_recall",    cost: 2, name: "Sudden Recall",     description: "Suddenly recall an important piece of information not directly related to the task; establish a preparatory action taken earlier." },
        { id: "trd_ear_guide",     cost: 1, name: "Guide the Trade",   description: "Reduce the TN of the next check another character makes with the same skill before the end of the scene by 1." },
      ],
      fire: [
        { id: "trd_fir_inflame",   cost: 1, name: "Inflame",           description: "Inflame another character in the scene with your presence, causing them to receive 2 strife." },
        { id: "trd_fir_flashy",    cost: 1, name: "Flashy Performance", description: "Perform the task in a flashy way, drawing attention to yourself. Extra * attracts even more notice.", note: "Scalable" },
        { id: "trd_fir_notice",    cost: 2, name: "Notice Absence",    description: "Notice something missing or out of place in the vicinity that is not directly related to the task." },
        { id: "trd_fir_inspire",   cost: 1, name: "Unusual Inspiration", description: "Add a kept Ring Dice set to an * result to the next check you make with another skill." },
      ],
      water: [
        { id: "trd_wat_strife",    cost: 1, name: "Remove Strife",     description: "Remove 2 strife from yourself." },
        { id: "trd_wat_efficient", cost: 1, name: "Efficient Completion", description: "Perform the task efficiently, completing it more quickly or saving supplies. Extra * further reduces the time or materials expended.", note: "Scalable" },
        { id: "trd_wat_detail",    cost: 2, name: "Spot Detail",       description: "Spot an interesting physical detail present in your environment not directly related to your check." },
        { id: "trd_wat_discount",  cost: 1, name: "Bargain Discount",  description: "Convince a seller to give you an additional 10% discount for an item you are buying." },
        { id: "trd_wat_jest",      cost: 1, name: "All In Jest",       description: "If you forfeited honor as part of the check in order to say something rude or appeal to base desires, regain 1 honor per * spent this way.", note: "Requires Shuji: All In Jest — Scalable" },
        { id: "trd_wat_fluent",    cost: 1, name: "Fluent Bargaining", description: "If you succeed, you also convince the client to pay 10% of the fee up front per * spent this way.", note: "Requires Shuji: Fluent Bargaining — Scalable" },
      ],
      void: [
        { id: "trd_voi_ring",      cost: 1, name: "Ring Focus",        description: "Choose a ring other than Void. Reduce the TN of your next check by 1 if it uses that ring." },
        { id: "trd_voi_spirit",    cost: 1, name: "Supernatural Detection", description: "Feel a chill down your spine, notice a sudden silence, or detect another sign of the supernatural if there is a spiritual disturbance in the scene. Extra * gives an increasingly precise location.", note: "Scalable" },
        { id: "trd_voi_insight",   cost: 2, name: "Spiritual Insight", description: "Gain spiritual insight into the nature of the universe or your own heart; establish a previously unrevealed fact about your character." },
        { id: "trd_voi_minimal",   cost: 1, name: "Leave No Trace",    description: "Reduce any effect you have on your environment (and physical traces of your efforts) to a minimum." },
      ],
    },

    martial: {
      air: [
        { id: "mar_air_ringdie",   cost: 1, name: "Martial Momentum",  description: "Add a kept Ring Dice set to an * result to your next Martial skill check." },
        { id: "mar_air_vertical",  cost: 1, name: "Vertical Movement", description: "During movement actions, up to 1 range band per * spent can be along vertical surfaces.", note: "Scalable" },
        { id: "mar_air_defense",   cost: 2, name: "Evasive Posture",   description: "Increase the TN of the next Martial Arts [Ranged] check targeting you before the start of your next turn by 2." },
      ],
      earth: [
        { id: "mar_ear_reassure",  cost: 1, name: "Reassure",          description: "Reassure another character in the scene with your presence, allowing them to remove 2 strife." },
        { id: "mar_ear_careful",   cost: 1, name: "Careful Work",      description: "Act carefully to minimize consequences of failure or other dangers that could arise from the task.", note: "Scalable" },
        { id: "mar_ear_recall",    cost: 2, name: "Sudden Recall",     description: "Suddenly recall an important piece of information; establish a preparatory action you took earlier." },
        { id: "mar_ear_striking",  cost: 1, name: "Striking as Earth", description: "Increase your physical resistance by 1 per * spent until the beginning of your next turn.", note: "Scalable" },
      ],
      fire: [
        { id: "mar_fir_tn",        cost: 1, name: "Menacing Presence", description: "Increase the TN of the next check a character makes before the start of your next turn, if it does not include you as a target." },
        { id: "mar_fir_crit",      cost: 1, name: "Press Advantage",   description: "Increase the TN of checks to resist your critical strikes by 1 per * spent during Attack actions.", note: "Scalable" },
        { id: "mar_fir_threat",    cost: 2, name: "Fearsome Display",  description: "Other characters must receive 2 strife to choose you as the target of their Attack and Scheme actions until the start of your next turn." },
        { id: "mar_fir_striking",  cost: 1, name: "Striking as Fire",  description: "The next time your target suffers a critical strike, increase its severity by 1 per * spent.", note: "Scalable" },
      ],
      water: [
        { id: "mar_wat_fatigue",   cost: 1, name: "Recover",           description: "Remove 1 fatigue from yourself or the target." },
        { id: "mar_wat_resist",    cost: 1, name: "Piercing Strike",   description: "Ignore 1 point of the target's physical resistance per * spent.", note: "Scalable" },
        { id: "mar_wat_move",      cost: 2, name: "Swift Step",        description: "Move 1 range band as part of this action." },
        { id: "mar_wat_striking",  cost: 1, name: "Striking as Water", description: "Reduce the target's physical resistance by 1 per * spent until the beginning of your next turn.", note: "Scalable" },
      ],
      void: [
        { id: "mar_voi_terrain",   cost: 1, name: "Terrain Mastery",   description: "Ignore one terrain quality of your choice during your next Attack action." },
        { id: "mar_voi_init",      cost: 1, name: "Heightened Initiative", description: "Increase your Initiative value by 1 per * spent when making a Support action.", note: "Scalable" },
        { id: "mar_voi_condition", cost: 2, name: "Mind Over Matter",  description: "Ignore the effects of one condition you are suffering until the end of your next turn." },
        { id: "mar_voi_stance",    cost: 1, name: "Striking as Void — Stance", description: "Immediately switch to a different stance of your choice." },
        { id: "mar_voi_action",    cost: 2, name: "Striking as Void — Second Chance", description: "If you fail, you may perform another action you have not yet used this turn." },
      ],
    },

  },

  // Invocation technique checks — keyed by ring element
  invocations: {
    air: [
      { id: "inv_air_target",    cost: 1, name: "Additional Target",  description: "Choose one additional target per 2 * spent, if this technique can target characters other than you.", note: "2 * per extra target" },
      { id: "inv_air_movement",  cost: 1, name: "Fluid Motion",       description: "Reduce the TN of your next Movement action check by 1." },
      { id: "inv_air_demeanor",  cost: 1, name: "Learn Demeanor",     description: "Learn another character in the scene's demeanor (if an NPC) and current strife." },
      { id: "inv_air_detail",    cost: 1, name: "Notice Detail",      description: "Notice an interesting detail about a character in the scene, such as an advantage or disadvantage." },
      { id: "inv_air_range",     cost: 1, name: "Extended Range",     description: "Treat the maximum range of this technique as 1 higher per * spent.", note: "Scalable" },
      { id: "inv_air_subtle",    cost: 1, name: "Subtle Invocation",  description: "Act subtly to attract minimal attention in your efforts. Extra * makes the attempt even subtler.", note: "Scalable" },
    ],
    earth: [
      { id: "inv_ear_resistance", cost: 1, name: "Bolstered Defense",  description: "Increase your physical resistance by 1 until the beginning of your next turn." },
      { id: "inv_ear_target",     cost: 1, name: "Additional Target",  description: "Add one additional target per * spent, if this technique can target multiple characters.", note: "Scalable" },
      { id: "inv_ear_range",      cost: 1, name: "Extended Range",     description: "Increase the maximum range of this technique by 1 per * spent.", note: "Scalable" },
      { id: "inv_ear_physical",   cost: 1, name: "Earthen Impact",     description: "Change the damage type from supernatural to physical." },
      { id: "inv_ear_sacred",     cost: 1, name: "Sacred Strike",      description: "Grant the Sacred quality to damage dealt by this technique." },
      { id: "inv_ear_reassure",   cost: 1, name: "Reassure",           description: "Reassure another character in the scene with your presence, allowing them to remove 2 strife." },
      { id: "inv_ear_careful",    cost: 1, name: "Careful Casting",    description: "Act carefully to minimize consequences of failure or other dangers that could arise from the task.", note: "Scalable" },
    ],
    fire: [
      { id: "inv_fir_range",     cost: 1, name: "Extended Range",     description: "Treat the maximum range of this technique as 1 higher per * spent.", note: "Scalable" },
      { id: "inv_fir_target",    cost: 1, name: "Additional Target",  description: "Choose additional targets per * spent, if this technique can target characters other than you.", note: "Scalable" },
      { id: "inv_fir_attack",    cost: 1, name: "Fueled Assault",     description: "Reduce the TN of the next Attack action check you make by 1. This effect persists until the end of your next turn." },
      { id: "inv_fir_resist",    cost: 1, name: "Overwhelming Power", description: "Increase the TN of checks to resist this effect by 1 per * spent.", note: "Scalable" },
      { id: "inv_fir_burning",   cost: 2, name: "Ignite",             description: "One target per 2 * spent must resist with a TN 3 Fitness check (Air 4, Water 1) or suffer the Burning condition.", note: "2 * per target" },
      { id: "inv_fir_inflame",   cost: 1, name: "Inflame",            description: "Inflame another character in the scene with your presence, causing them to receive 2 strife." },
    ],
    water: [
      { id: "inv_wat_resistance", cost: 1, name: "Spiritual Defense",  description: "Increase your supernatural resistance by 1 until the end of your next turn." },
      { id: "inv_wat_target",     cost: 1, name: "Additional Target",  description: "Choose additional targets per * spent, if this technique can target characters other than you.", note: "Scalable" },
      { id: "inv_wat_range",      cost: 2, name: "Range Adjustment",   description: "Treat the maximum or minimum range of this technique as 1 higher or lower per 2 * spent.", note: "2 * per range step" },
      { id: "inv_wat_fatigue",    cost: 2, name: "Soothing Waters",    description: "Remove 1 fatigue from the target or yourself." },
      { id: "inv_wat_support",    cost: 1, name: "Fluid Support",      description: "Reduce the TN of the next Support action check you make by 1. This effect persists until the end of your next turn." },
      { id: "inv_wat_strife",     cost: 1, name: "Remove Strife",      description: "Remove 2 strife from yourself." },
    ],
    // Inversions use the Void ring
    void: [
      { id: "inv_voi_ring",      cost: 1, name: "Ring Focus",         description: "Choose a ring other than Void. Reduce the TN of your next check by 1 if it uses that ring." },
      { id: "inv_voi_spirit",    cost: 1, name: "Supernatural Detection", description: "Feel a chill down your spine, notice a sudden silence, or detect another sign of the supernatural if there is a spiritual disturbance in the scene. Extra * gives an increasingly precise location.", note: "Scalable" },
      { id: "inv_voi_insight",   cost: 2, name: "Spiritual Insight",  description: "Gain spiritual insight into the nature of the universe or your own heart. At the GM's discretion, you may establish a previously unrevealed fact about your character." },
      { id: "inv_voi_inquiry",   cost: 1, name: "Inquiry Intuition",  description: "Intuit whether you can learn anything of value from your current course of inquiry." },
    ],
  },

});
