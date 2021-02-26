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

Click on the category names or just go to http://localhost:27122/#people to show just one category.

Click on the icons to hide them manually, if you're not using livesplit for some reason.

### Custom CSS tweaks
You can add some custom CSS in OBS to edit the appearance a bit.
```css
/* Put all areas back on their own row */
.cat { clear: both!important; }

/* Align to top instead of bottom */
#journal { top: 0; }

/* Don't wrap item rows even if they don't fit */
.items { flex-wrap: nowrap; }
```
Check [main.css](https://github.com/Dregu/s2tracker/blob/master/static/main.css) for some more ideas.
