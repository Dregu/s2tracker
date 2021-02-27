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
Start s2tracker, enable the tracker option in the [autosplitter](https://github.com/Dregu/LiveSplit-Spelunky2) and go to http://localhost:27122/.

Go to http://localhost:27122/#area to arrange everything by their probable area found.

Go to http://localhost:27122/#char for a character tracker.

Click on the category names or just go to http://localhost:27122/#people to show just one category.

Click on the icons to hide them manually, if you're not using livesplit for some reason.

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
