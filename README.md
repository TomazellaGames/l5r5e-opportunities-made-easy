# L5R5e Opportunities Made Easy

A [Foundry VTT](https://foundryvtt.com/) module for the [Legend of the Five Rings 5th Edition](https://foundryvtt.com/packages/l5r5e) system.

## What it does

- **Context-aware opportunity list** - after a roll, an **Opportunities** button appears on the chat card and inside the Roll & Keep dialog. Click it to open a popup showing only the opportunities relevant to that roll's context (ring, skill group, technique type).
- **Tabs by category** - the popup organizes opportunities into tabs: the roll's active context, plus Artisan, Scholar, Social, Trade, Martial, Invocations, and Shadowlands — so you can quickly browse without reading through irrelevant entries.
- **Reference window** - a persistent, filterable reference window lists every opportunity in the game. Filter by ring (Air, Earth, Fire, Water, Void) and situation (skill groups, invocations, special circumstances).
- **Opportunity cost display** - each opportunity shows its cost as filled dots, matching the L5R5e visual language.
- **Works for techniques too** - detects invocation and inversion techniques and surfaces the correct Invocation opportunities automatically.

## Compatibility

| Foundry VTT | Status |
|---|---|
| v14 | Verified |

Requires the **l5r5e** system.

## Installation

### From the Foundry module browser (recommended)

1. Open Foundry VTT and go to **Configuration → Add-on Modules → Install Module**.
2. Paste the following manifest URL into the search box at the bottom:
   ```
   https://raw.githubusercontent.com/TomazellaGames/l5r5e-opportunities-made-easy/main/module.json
   ```
3. Click **Install**.
4. Enable the module in your world under **Configuration → Manage Modules**.

### Manual install

1. Download `l5r5e-opportunities-made-easy.zip` from the [latest release](https://github.com/TomazellaGames/l5r5e-opportunities-made-easy/releases/latest).
2. Extract the zip into your Foundry `Data/modules/` folder so the path looks like:
   ```
   Data/modules/l5r5e-opportunities-made-easy/module.json
   ```
3. Restart Foundry and enable the module in your world.

## Usage

| What you want | How to do it |
|---|---|
| See opportunities for a roll | Click the **Opportunities** button on the chat card after rolling |
| See opportunities while picking dice | Click the **Opportunities** button inside the Roll & Keep dialog |
| Browse all opportunities | Click the **Opportunities** tab button (sidebar) to open the reference window |
| Filter the reference list | Use the Ring and Situation dropdowns in the reference window |

## Changelog

### v1.0.1
- Fixed **Tabs not showing** - now tabs Downtime and War show correctly on the opportunity window.

### v1.0.1
- Added **Downtime Activities** opportunity section (10 entries, Air/Earth/Fire/Water/Void, 2 per ring).
- Added **War — Fields of Victory** opportunity section with three subsections:
  - *Mobilizing an Army* (11 entries including any-ring option)
  - *Mass Battles* (11 entries)
  - *Contested Territory* (10 entries)
- Fixed opportunity costs in **Shadowlands**, **While Tainted**, and **Against Tainted Threats** sections to match the Core Rulebook (several entries were incorrectly set to 2★ or 3★ instead of 1★).
- Added **Reassure** (Earth) and **Remove Strife** (Water) opportunities to the **Martial** skill group.

### v1.0.0
- Initial release.

## Author

Jeferson Tomazella - [GitHub](https://github.com/TomazellaGames)
