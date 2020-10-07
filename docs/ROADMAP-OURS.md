# Roadmap - WITCHFALL

## What's done
- Level 1 - Village - Built Out
- Items
  - Replaced Armor with Witchy Items
- Monster Types
  - spider
- Replaced all chests/tree stumps with Jack-O-Lanterns and changed gold to candy for trick or treating.

## What needs to be done
- Add one dialog screen that explains saving/leaderboard
  - First with a set list of items
- Level 2 - Cemetery
- Create Basic Quest System
  - First with a set list of items
  - Then with a randomly generated list
- Loot Chest Regenerate
- Monster Regenerate
- Monsters
  - Zombie - Level 2 / Cemetery
- Inventory items leave backpack when equipped
- Clean up viewport sizing logic and add magnified size for large desktop

## Current To-Do List
- Add 'Close' Button to Leaderboard
  - Find every connection to settings menu & its close button
  - Add another icon to main page, attached to a complete copy of settings
  - Replace settings copy stuff with leaderboard stuff
  -make sure it works
- Cape - Defense not showing up in item detail window. cape is armor::body
  - cape not shown in src/components/equipped-items/
  - TEXT
- Create Basic Quest System
  - First with a set list of items
  - Then with a randomly generated list

### MAPS
- <span style="color:orange">src/config/constant.js</span>
  - Map Size: Tile Height & Width
    - Global Sizing, Fix ALL Maps
- <span style="color:orange">src/features/map/map-tile.js</span>
  - Case: Lists All Map Objects Like Floors, Buildings, Etc
- <span style="color:orange">src/data/maps/</span>
  - Each level gets a folder with an index.js with a grid-map and lists the creatures for that level
- <span style="color:orange">public/tiles/</span>
  - PNG files: All objects used in the maps, 40x40px
- 
    - 
  - 
- 
- 
- 
  - 
  - 

### MENUS & DIALOGUE
- <span style="color:orange"><b>src/features/game-menus/index.js</b></span>
  - Main Screen: On-Screen, shows Stats Bar, Inventory, Settings, Google
- <span style="color:orange"><b>src/features/stats/index.js</b></span>
  - Stats Bar: On-Screen, shows level, attack, defense, HP, Exp & Gold/Candy
- <span style="color:orange"><b>src/features/dialog-manager/index.js & reducer.js</b></span>
  - controls actions on main page, game start, opening menus/pages, game pause state
- <span style="color:orange"><b>src/features/dialog-manager/dialogs/main-game-start/index.js</b></span>
  - First Dialog/Menu "Explore the Town of Pumpkin Falls" after the main start page
  - 
- <span style="color:orange"><b>Leaderboard</b></span>
  - src/components/leaderboardscreen - compiles leaderboard data
  - src/features/dialog-manager/dialogs/leaderboard-dialog - dialog/menu page that pulls in data from leaderboardscreen component
  - src/features/dialog-manager/actions/toggle-leaderboard.js -  
  
- <span style="color:orange"><b>Settings</b></span>
  - src/features/dialog-manager/index.js & reducer.js
  - src/features/dialog-manager/dialogs/settings-dialog/
  - Settings Icon/Button - src/features/game-menus/game-settings/
  - Opens Settings - src/features/dialog-manager/actions/toggle-settings.js
  - Close Button - src/features/dialog-manager/actions/close-settings.js
  - src/features/dialog-manager/actions/is-game-paused.js


- <span style="color:orange"><b>replace</b></span>
  - replace

### ITEMS
- <span style="color:orange">src/data/items/index.js</span>
  - imports in all items and sets them up for random loot generator
- <span style="color:orange">src/components/view-item/index.js</span>
  - Sets case for each item, equip state, Buy & Sell actions for store, & use actions for consumable items
- <span style="color:orange">src/components/equipped-items/index.js</span>
  - Handles everything to do with equipping items
- <span style="color:orange">public/tiles/</span>
  - PNG files: All objects used in the maps, 40x40px
- 
    - 
  - 
- 
- 
- 
  - 
  - 

### MISC
- <span style="color:orange"><b>src/config/constant.js</b></span>
  - Sight Radius: Adjusts visible map area
  - Sprite_Size = 40 (tile is 40px x 40px
  - Map_Padding_Distance - addt'l tiles around edges
  - 
- <span style="color:orange"><b>src/config/store.js</b></span>
  - Stats: Holds state and stat for everything (player, weapons, monsters, inventory, etc)
- <span style="color:orange"><b>src/features/stats/reducer.js</b></span>
  - Initial State: Player's starting off stats
  - Defines Cases: get gold, lose gold, equip & unequip, healing, damage, get exp & RESET
- <span style="color:orange"><b>src/features/dialog-manager/actions/close-dialog.js</b></span>
  - action code to make close button work. pulled into src/features/dialog-manager/reducer.js
