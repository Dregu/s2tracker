# s2tracker
Journal tracker for Spelunky 2 RTA speedrun categories.

## Installation
Run from source:
```
cd s2tracker
npm install
node index.js
```
Or just [get the release](https://github.com/Dregu/s2tracker/releases/latest) with nodejs packaged in.

## Usage
**The recommended order of operations is to:**

1. Start s2tracker
2. Start livesplit with the tracker option enabled
3. Start the game

**(Why? The livesplit part works by finding your savegame in the memory at start. There are two copies of the savegame in the memory, one has the most recently saved data and the other has unsaved changes too. We want the unsaved changes, because that makes the tracker update instantly. If you load the autosplitter when there are unsaved changes to the journal, livesplit can't find the right data and you won't get instant updates, instead updating on level change or death.)**

- Go to http://localhost:27122/ for a category view.
- Go to http://localhost:27122/#area to arrange everything by their probable area found.
- Go to http://localhost:27122/#char for a character tracker.
- Click on the category names or just go to http://localhost:27122/#people etc to show just one category.

These are designed for OBS Browser, so they might look a little goofy in your regular one.

Click on the icons to hide them manually, if you're not using livesplit for some reason. Reload to reset in that case.

### Custom CSS tweaks
You can add some custom CSS in OBS to edit the appearance a bit.
```css
/* Put all areas back on their own row (This is done automatically though when width < 800px) */
.cat { clear: both!important; }

/* Align to top instead of bottom */
#journal { top: 0; }

/* Don't wrap item rows even if they don't fit */
.items { flex-wrap: nowrap; }

/* Put things in category view back in journal order and on single rows */
.item { order: 0!important; }

/* Hide places in category view */
#places { display: none; }
```
Check [main.css](https://github.com/Dregu/s2tracker/blob/master/static/main.css) for some more ideas.
