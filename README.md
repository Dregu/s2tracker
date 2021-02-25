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
Click on the category names or just go to http://localhost:27122/#people to show just one category.
Click on the icons to hide them manually, if you're not using livesplit for some reason.

If you want to make things smaller for OBS, you can use custom CSS in the browser source, like
```
#places { display: none }
.item { width: 32px; height: 32px; order: 0; }
```
and set your browser width to 3000 to get a nice bottom bar with small icons in journal order.
