// scripts/data/opportunities.js
// Opportunity data sourced from https://www.courtgames.net/5th-edition-opportunity-table.html

export const OPPORTUNITIES = Object.freeze({

  // Available on every check regardless of ring, skill group, or technique
  generic: [
    {
      id: "gen_assist_fail",
      cost: 1,
      name: "Determine Approach",
      description: "If you failed, determine the easiest way to accomplish the task you were attempting (skill and approach).",
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
        { id: "mar_ear_terrain",   cost: 1, name: "Ignore Terrain",    description: "During a Movement action, ignore one terrain quality of your choice." },
        { id: "mar_ear_crit",      cost: 1, name: "Reduce Critical",   description: "Reduce the severity of the next critical strike you suffer before the start of your next turn by 1 per * spent this way.", note: "Scalable" },
        { id: "mar_ear_disadv",    cost: 2, name: "Suppress Disadvantage", description: "Do not apply one of your disadvantages to checks until the end of your next turn." },
        { id: "mar_ear_striking",  cost: 1, name: "Striking as Earth", description: "Increase your physical resistance by 1 per * spent until the beginning of your next turn.", note: "Scalable" },
      ],
      fire: [
        { id: "mar_fir_tn",        cost: 1, name: "Menacing Presence", description: "Increase the TN of the next check a character makes before the start of your next turn, if it does not include you as a target." },
        { id: "mar_fir_crit",      cost: 1, name: "Press Advantage",   description: "Increase the TN of checks to resist your critical strikes by 1 per * spent during Attack actions.", note: "Scalable" },
        { id: "mar_fir_threat",    cost: 2, name: "Fearsome Display",  description: "Other characters must receive 2 strife to choose you as the target of their Attack and Scheme actions until the start of your next turn." },
        { id: "mar_fir_striking",  cost: 1, name: "Striking as Fire",  description: "The next time your target suffers a critical strike, increase its severity by 1 per * spent.", note: "Scalable" },
      ],
      water: [
        { id: "mar_wat_strife",    cost: 1, name: "Remove Strife",     description: "Remove 2 strife from yourself." },
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
      { id: "inv_air_exclude",   cost: 2, name: "Exclude from Area",  description: "If this technique targets all characters in an area, choose 1 character in range to exclude as a target per 2 * spent this way.", note: "2 * per excluded target" },
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

  // Special circumstances: In the Shadowlands
  shadowlands: {
    air:   [{ id: "sha_air_navigate",  cost: 1, name: "Shadowlands Navigation", description: "You detect a subtle sign in your environment that lets you get your bearings — a stream running slightly less Tainted, or growths on twisted trees pointing toward the Festering Pit. This landmark helps guide you for one scene, plus one additional scene per * spent.", note: "Scalable" }],
    earth: [{ id: "sha_ear_vigilance", cost: 1, name: "Resolute Nature",         description: "Your resolute nature steels you against the unstable environment of the Shadowlands. You count your vigilance as 1 higher the next time you seek to notice or avoid a hazardous situation or creature." }],
    fire:  [{ id: "sha_fir_encourage", cost: 1, name: "Spur Comrades",           description: "One other character in the scene per * you spend reduces their next TN to resist physical hardship or the influence of the Shadowlands by 1.", note: "Scalable" }],
    water: [{ id: "sha_wat_scavenge",  cost: 1, name: "Scavenge Item",           description: "By luck or careful scavenging, you find a useful item not yet corrupted by the Shadowlands. Such items have a maximum rarity of 3, plus 1 for each additional * spent. The GM should modify this depending on the nature of the item.", note: "Scalable" }],
    void:  [{ id: "sha_voi_undeterred",cost: 1, name: "Undeterred",              description: "Though Jigoku's power weighs heavily upon you, you are undeterred. By drawing on memories of the un-Tainted lands north of the wall, you can keep yourself focused and ignore all strife results on your next check." }],
  },

  // Special circumstances: While Tainted
  whileTainted: {
    air:   [{ id: "tai_air_conceal",   cost: 1, name: "Conceal Taint",    description: "Your newfound cunning redirects attention away from you, potentially concealing your Tainted nature. The TN of the next check made to scrutinize you or your actions is increased by 1." }],
    earth: [{ id: "tai_ear_endure",    cost: 1, name: "Endure",           description: "No mortal concern can slow you, as you already endure worse than most can imagine. For the rest of the scene, whenever you suffer fatigue reduce the value suffered by 2, to a minimum of 0." }],
    fire:  [{ id: "tai_fir_jigoku",    cost: 1, name: "Jigoku's Might",   description: "The furious power of Jigoku flows through you, granting unnatural might. Add 1 kept die showing a strife result to the next Martial Arts check you make. This effect persists until the start of their next turn." }],
    water: [{ id: "tai_wat_fluid",     cost: 1, name: "Fluid Recovery",   description: "You briefly become fluid in mind or body, shaking off disorientation or even injury. Remove one of the following conditions: Dazed, Disoriented, Immobilized, Intoxicated, Lightly Wounded, or Prone." }],
    void:  [{ id: "tai_voi_kansen",    cost: 1, name: "Kansen Insights",  description: "The unnatural insights of the kansen voice themselves wordlessly to you, granting knowledge you could not possibly have known otherwise. You learn something relevant to the situation, appropriate in scope to the * spent. For each * spent, you receive 1 strife.", note: "Scalable — 1 strife per *" }],
  },

  // Special circumstances: Against Tainted Threats
  againstTainted: {
    air:   [{ id: "att_air_weakness",  cost: 1, name: "Discern Weakness",     description: "Confronted with the horrors of the Taint, you remain alert and discern a weakness in your foe. Reduce the TN of your next check made to oppose or harm a Tainted character by 1." }],
    earth: [{ id: "att_ear_weather",   cost: 1, name: "Weather the Reveal",   description: "You are able to weather such terrible things as the revelation of a secret mahō-tsukai or the summoning of an oni. The next time you suffer strife this scene, you suffer 2 fewer strife, to a minimum of 0." }],
    fire:  [{ id: "att_fir_cow",       cost: 1, name: "Righteous Fury",       description: "The righteous fury you display can cow even the most terrible of Tainted fiends. Each Tainted being in the scene gains 1 strife, plus 1 additional strife for every 2 * spent. If you are unaware whether another character is Tainted, the GM records this strife secretly.", note: "Scalable" }],
    water: [{ id: "att_wat_adapt",     cost: 1, name: "Adapt to Corruption",  description: "You adapt yourself to better fight the corrupted power before you. Once per game session, reduce the TN of a check to resist a Tainted power assailing you by 1, or increase the TN of another character's check to target you with such a power by 1." }],
    void:  [{ id: "att_voi_discern",   cost: 1, name: "Discern the Taint",    description: "Spending 1 *: you discern that the kami have fled and the type of disturbance (mahō, kansen, or similar). Spending 2 *: you can also determine the total combat threat rating of all Tainted beings that caused the kami to flee.", note: "1 * or 2 *" }],
  },

  // Downtime activity opportunities
  downtime: {
    air: [
      { id: "dwn_air_learn",    cost: 1, name: "Learn Detail",          description: "Learn one detail about someone in your company (an advantage or disadvantage of their choice) per * spent. Maximum one per person per downtime scene.", note: "Scalable" },
      { id: "dwn_air_secret",   cost: 2, name: "Secret Activity",       description: "Perform your activity without one or more other characters (your choice) knowing that you did it." },
    ],
    earth: [
      { id: "dwn_ear_restore",  cost: 1, name: "Restore Companion",     description: "Another character in your company may remove 1 strife or fatigue per * spent.", note: "Scalable" },
      { id: "dwn_ear_memorize", cost: 2, name: "Memorize Detail",       description: "Memorize a small but vital detail from your activity; you may recall it later without a check." },
    ],
    fire: [
      { id: "dwn_fir_assist",   cost: 1, name: "Assist Companion",      description: "Assist 1 other character per * spent with their next downtime activity check this session.", note: "Scalable" },
      { id: "dwn_fir_energize", cost: 2, name: "Energize Companion",    description: "Energize another character with your efforts: they may perform 1 additional downtime action (maximum 2 total in the downtime)." },
    ],
    water: [
      { id: "dwn_wat_recover",  cost: 1, name: "Recover",               description: "Remove 1 strife or fatigue from yourself per * spent.", note: "Scalable" },
      { id: "dwn_wat_friend",   cost: 2, name: "Make a Friend",         description: "Make a new friend while performing your downtime activity." },
    ],
    void: [
      { id: "dwn_voi_reserve",  cost: 1, name: "Reserve Die",           description: "Reserve 1 discarded die (maximum your ranks in the skill used) to use as a kept die on your next check with the same skill.", note: "Scalable" },
      { id: "dwn_voi_premon",   cost: 2, name: "Premonition",           description: "Have a brief premonition of a possible future event while performing the activity." },
    ],
  },

  // War — Fields of Victory opportunities
  war: {

    // Mobilizing an Army
    mobilizingArmy: {
      any: [
        { id: "mob_any_maintenance", cost: 1, name: "Ease Maintenance",    description: "Reduce the TN of the first army maintenance check by 1 per * spent.", note: "Scalable" },
      ],
      air: [
        { id: "mob_air_covert",      cost: 2, name: "Covert Assembly",     description: "The army assembles without attracting the attention of local powers not at war with you." },
        { id: "mob_air_doctrine",    cost: 1, name: "Grant Doctrine",      description: "One cohort gains the doctrine Out of Nowhere or Sappers." },
      ],
      earth: [
        { id: "mob_ear_fortify",     cost: 2, name: "Secure Fortification",description: "Receive use of a nearby fortification (outpost: -2 attrition, difficulty 6)." },
        { id: "mob_ear_discipline",  cost: 1, name: "Bolster Discipline",  description: "Increase the army's discipline by 5." },
      ],
      fire: [
        { id: "mob_fir_assault",     cost: 2, name: "Inspired Assault",    description: "In the first mass battle, reduce the TN of each leader's Assault actions by 1." },
        { id: "mob_fir_strength",    cost: 1, name: "Bolster Strength",    description: "Increase the army's strength by 5." },
      ],
      water: [
        { id: "mob_wat_funds",       cost: 1, name: "Raise Funds",         description: "Raise 100 koku per * spent. Spending koku outside of equipment or mercenaries costs 10 Honor.", note: "Scalable" },
        { id: "mob_wat_upgrade",     cost: 2, name: "Army Upgrade",        description: "The army gains one upgrade: Baggage Train or Battlefield Medical Supplies." },
      ],
      void: [
        { id: "mob_voi_delay",       cost: 2, name: "Delayed Assembly",    description: "The army assembles at a location of your choice up to one month in the future, instead of immediately." },
        { id: "mob_voi_boost",       cost: 1, name: "Boost Army",          description: "Increase the army's strength and discipline by 3." },
      ],
    },

    // Mass Battles
    massBattles: {
      air: [
        { id: "bat_air_scheme",      cost: 1, name: "Aid Scheme",          description: "Reduce the TN of an allied leader's next Scheme check by 1 per * spent. This effect persists until the end of the scene.", note: "Scalable" },
        { id: "bat_air_fortbreak",   cost: 3, name: "Break Fortification", description: "A leader in a fortification loses its benefits until their next turn." },
      ],
      earth: [
        { id: "bat_ear_panic",       cost: 1, name: "Quell Panic",         description: "Remove 1 panic from your army per * spent.", note: "Scalable" },
        { id: "bat_ear_shield",      cost: 3, name: "Shield Cohort",       description: "An allied leader's cohort cannot be targeted by Attack actions until that leader's next turn." },
      ],
      fire: [
        { id: "bat_fir_panic",       cost: 1, name: "Spread Panic",        description: "The enemy army suffers 1 panic per * spent.", note: "Scalable" },
        { id: "bat_fir_crit",        cost: 1, name: "Exploit Opening",     description: "When attacking a leader's cohort whose Vigilance is equal to or less than the * spent, inflict a critical strike (using one weapon's Lethality) after resolving the action.", note: "Scalable" },
      ],
      water: [
        { id: "bat_wat_move",        cost: 1, name: "Aid Movement",        description: "Reduce the TN of an allied leader's next Movement check by 1 per * spent.", note: "Scalable" },
        { id: "bat_wat_immobilize",  cost: 3, name: "Immobilize Cohort",   description: "An enemy leader's cohort cannot perform Movement actions until that leader's next turn." },
      ],
      void: [
        { id: "bat_voi_attrition",   cost: 1, name: "Mutual Attrition",    description: "Your army and each enemy army suffer 2 attrition per * spent.", note: "Scalable" },
        { id: "bat_voi_challenge",   cost: 3, name: "Issue Challenge",      description: "When performing a Support action, you may immediately perform a Challenge action targeting an enemy leader." },
        { id: "bat_voi_boost",       cost: 2, name: "Boost Army",          description: "Increase your army's strength and discipline by 3. This effect persists until the end of the scene." },
      ],
    },

    // Contested Territory
    contestedTerritory: {
      air: [
        { id: "ctr_air_init",        cost: 1, name: "Combat Readiness",    description: "In the next conflict scene this session, add a kept die showing a success result to your Initiative check." },
        { id: "ctr_air_reroll",      cost: 2, name: "Undermine Foe",       description: "In the next conflict scene, choose one character — in their next check they must reroll all dice showing a success result. Spending 3 * instead affects all their checks that scene.", note: "2 * or 3 *" },
      ],
      earth: [
        { id: "ctr_ear_unknown",     cost: 1, name: "Read the Unknown",    description: "Reduce the TN of your next check to deal with an unknown situation or opponent by 1." },
        { id: "ctr_ear_conditions",  cost: 2, name: "Cast Off Conditions", description: "Remove 1 strife for each condition you are currently suffering." },
      ],
      fire: [
        { id: "ctr_fir_study",       cost: 1, name: "Quick Study",         description: "Immediately attempt a Scholar check of your choice about the situation or a present NPC, with the TN reduced by 1." },
        { id: "ctr_fir_incite",      cost: 1, name: "Incite Allies",       description: "A number of allied characters of your choice each remove 1 strife per * spent; you receive 1 strife per character affected.", note: "Scalable" },
      ],
      water: [
        { id: "ctr_wat_friendly",    cost: 2, name: "Win Over Foe",        description: "Per 2 * spent, 1 hostile character becomes more friendly (not applicable during active combat; they may change their objective).", note: "Scalable — 2 * per character" },
        { id: "ctr_wat_terrain",     cost: 1, name: "Read the Land",       description: "Discover a key feature or terrain of the area and whether enemies have passed through recently." },
      ],
      void: [
        { id: "ctr_voi_reconcile",   cost: 1, name: "Shared Moment",       description: "You and 1 hostile character (GM's choice) each recover 2 strife per * spent.", note: "Scalable" },
        { id: "ctr_voi_refuge",      cost: 3, name: "Find Refuge",         description: "Discover a neutral meeting place, a protective legal precedent, or a safe haven applicable to the current situation." },
      ],
    },

  },

  // Initiative check opportunities
  initiativeCheck: {
    air:   [{ id: "ini_air_assess",    cost: 1, name: "Assess Weakness",       description: "On an Initiative check, assess one foe's weakness. Learn one of their disadvantages of that foe's choice." }],
    earth: [{ id: "ini_ear_suppress",  cost: 1, name: "Suppress Disadvantage", description: "On an Initiative check, choose another character's disadvantage you know. They do not apply that disadvantage to their checks this scene." }],
    fire:  [{ id: "ini_fir_focus",     cost: 1, name: "Focused Readiness",     description: "On an Initiative check, use your focus instead of your vigilance for your initiative when surprised." }],
    water: [{ id: "ini_wat_terrain",   cost: 1, name: "Terrain Assessment",    description: "On an Initiative check, assess the qualities of all terrain in the scene." }],
    void:  [{ id: "ini_voi_sense",     cost: 1, name: "Sense the Otherworldly",description: "On an Initiative check, sense if there is an Otherworldly being in the scene." }],
  },

});
