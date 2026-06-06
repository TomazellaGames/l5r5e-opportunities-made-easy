# L5R5e Opportunities Made Easy

A [Foundry VTT](https://foundryvtt.com/) module for the [Legend of the Five Rings 5th Edition](https://foundryvtt.com/packages/l5r5e) system that shows relevant opportunity options automatically when you roll dice.

## What it does

When a player makes a skill or technique roll, an **Opportunities** button appears on the chat card. Clicking it opens a window showing which opportunities are available for that roll — filtered to the correct ring and skill group, with all other categories available as tabs for reference.

Opportunities are sourced from the official L5R5e opportunity tables, organised by:
- **General** — available on any roll
- **Skill groups** — Artisan, Scholar, Social, Trade, Martial (each × ring)
- **Invocations** — per ring element
- **Shadowlands**, **While Tainted**, **Against Tainted Threats**, **Initiative Check**

## Requirements

| Requirement | Version |
|---|---|
| Foundry VTT | 14+ |
| L5R5e system | any |

## Installation

### Via Manifest URL (recommended)

1. Open Foundry VTT and go to **Add-on Modules**.
2. Click **Install Module**.
3. Paste the manifest URL into the **Manifest URL** field:
   ```
   https://raw.githubusercontent.com/TomazellaGames/l5r5e-opportunities-made-easy/main/module.json
   ```
4. Click **Install**.

### Manual

1. Download the latest release zip from the [Releases page](https://github.com/TomazellaGames/l5r5e-opportunities-made-easy/releases).
2. Extract it into your Foundry `Data/modules/` folder so the path is:
   ```
   Data/modules/l5r5e-opportunities-made-easy/module.json
   ```
3. Restart Foundry and enable the module in your world.

## Usage

1. Enable the module in your world (**Game Settings → Manage Modules → L5R5e Opportunities Made Easy**).
2. Make any skill or technique roll using the L5R5e system.
3. An **Opportunities** button appears on the chat card beneath the roll.
4. Click it to open the opportunity reference window.

### Opportunity window

The window opens pre-filtered to the current roll's ring and skill group or technique type. Use the tabs at the top to browse other categories:

| Tab | Shows |
|---|---|
| Active | General opportunities + the ones relevant to this specific roll |
| Artisan / Scholar / Social / Trade / Martial | All opportunities for that skill group in the rolled ring |
| Invocations | Invocation opportunities for the rolled ring |
| Shadowlands | Shadowlands, While Tainted, Against Tainted Threats, and Initiative Check opportunities |

The cost of each opportunity is shown as opportunity icons (★) matching the number of opportunities you need to spend.

## Credits

- **Author:** Jeferson Tomazella
- **Opportunity data:** [Court Games — 5th Edition Opportunity Table](https://www.courtgames.net/5th-edition-opportunity-table.html)
