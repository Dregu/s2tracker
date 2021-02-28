const container = document.getElementById('container')
var hash = window.location.hash.substr(1).toLowerCase()
var journal = {
  'Places': {
    'offset': 0, 'size': 16, 'num': 0, 'found': 0, 'entries': [
      { 'name': 'Dwelling', 'found': 0, 'area': 1 },
      { 'name': 'Jungle', 'found': 0, 'area': 2 },
      { 'name': 'Volcana', 'found': 0, 'area': 3 },
      { 'name': 'Olmec\'s Lair', 'found': 0, 'area': 4 },
      { 'name': 'Tide Pool', 'found': 0, 'area': 5 },
      { 'name': 'Abzu', 'found': 0, 'area': 6 },
      { 'name': 'Temple of Anubis', 'found': 0, 'area': 7 },
      { 'name': 'City of Gold', 'found': 0, 'area': 8 },
      { 'name': 'Duat', 'found': 0, 'area': 9 },
      { 'name': 'Ice Caves', 'found': 0, 'area': 10 },
      { 'name': 'Neo Babylon', 'found': 0, 'area': 11 },
      { 'name': 'Tiamat\'s Throne', 'found': 0, 'area': 12 },
      { 'name': 'Sunken City', 'found': 0, 'area': 13 },
      { 'name': 'Eggplant World', 'found': 0, 'area': 14 },
      { 'name': 'Hundun\'s Hideaway', 'found': 0, 'area': 15 },
      { 'name': 'Cosmic Ocean', 'found': 0, 'area': 16 }
    ]
  },
  'Bestiary': {
    'offset': 16, 'size': 78, 'num': 2, 'found': 0, 'entries': [
      { 'name': 'Snake', 'found': 0, 'area': 1 },
      { 'name': 'Spider', 'found': 0, 'area': 1 },
      { 'name': 'Bat', 'found': 0, 'area': 1 },
      { 'name': 'Caveman', 'found': 0, 'area': 1 },
      { 'name': 'Skeleton', 'found': 0, 'area': 1 },
      { 'name': 'Horned Lizard', 'found': 0, 'area': 1 },
      { 'name': 'Cave Mole', 'found': 0, 'area': 1 },
      { 'name': 'Quillback', 'found': 0, 'area': 1 },
      { 'name': 'Mantrap', 'found': 0, 'area': 2 },
      { 'name': 'Tiki man', 'found': 0, 'area': 2 },
      { 'name': 'Witch Doctor', 'found': 0, 'area': 2 },
      { 'name': 'Mosquito', 'found': 0, 'area': 2 },
      { 'name': 'Monkey', 'found': 0, 'area': 2 },
      { 'name': 'Hang Spider', 'found': 0, 'area': 2 },
      { 'name': 'Giant Spider', 'found': 0, 'area': 2 },
      { 'name': 'Magmar', 'found': 0, 'area': 3 },
      { 'name': 'Robot', 'found': 0, 'area': 3 },
      { 'name': 'Fire Bug', 'found': 0, 'area': 3 },
      { 'name': 'Imp', 'found': 0, 'area': 3 },
      { 'name': 'Lavamander', 'found': 0, 'area': 3 },
      { 'name': 'Vampire', 'found': 0, 'area': 3 },
      { 'name': 'Vlad', 'found': 0, 'area': 3 },
      { 'name': 'Olmec', 'found': 0, 'area': 4 },
      { 'name': 'Jiangshi', 'found': 0, 'area': 5 },
      { 'name': 'Jiangshi Assassin', 'found': 0, 'area': 5 },
      { 'name': 'Flying Fish', 'found': 0, 'area': 5 },
      { 'name': 'Octopy', 'found': 0, 'area': 5 },
      { 'name': 'Hermit Crab', 'found': 0, 'area': 5 },
      { 'name': 'Pangxie', 'found': 0, 'area': 5 },
      { 'name': 'Great Humphead', 'found': 0, 'area': 5 },
      { 'name': 'Kingu', 'found': 0, 'area': 6 },
      { 'name': 'Crocman', 'found': 0, 'area': 7 },
      { 'name': 'Cobra', 'found': 0, 'area': 7 },
      { 'name': 'Mummy', 'found': 0, 'area': 7 },
      { 'name': 'Sorceress', 'found': 0, 'area': 7 },
      { 'name': 'Cat Mummy', 'found': 0, 'area': 7 },
      { 'name': 'Necromancer', 'found': 0, 'area': 7 },
      { 'name': 'Anubis', 'found': 0, 'area': 7 },
      { 'name': 'Ammit', 'found': 0, 'area': 9 },
      { 'name': 'Apep', 'found': 0, 'area': 9 },
      { 'name': 'Anubis II', 'found': 0, 'area': 9 },
      { 'name': 'Osiris', 'found': 0, 'area': 9 },
      { 'name': 'UFO', 'found': 0, 'area': 10 },
      { 'name': 'Alien', 'found': 0, 'area': 10 },
      { 'name': 'Yeti', 'found': 0, 'area': 10 },
      { 'name': 'Yeti King', 'found': 0, 'area': 10 },
      { 'name': 'Yeti Queen', 'found': 0, 'area': 10 },
      { 'name': 'Lahamu', 'found': 0, 'area': 10 },
      { 'name': 'Proto Shopkeeper', 'found': 0, 'area': 10 },
      { 'name': 'Olmite', 'found': 0, 'area': 11 },
      { 'name': 'Lamassu', 'found': 0, 'area': 11 },
      { 'name': 'Tiamat', 'found': 0, 'area': 12 },
      { 'name': 'Tadpole', 'found': 0, 'area': 13 },
      { 'name': 'Frog', 'found': 0, 'area': 13 },
      { 'name': 'Fire Frog', 'found': 0, 'area': 13 },
      { 'name': 'Goliath Frog', 'found': 0, 'area': 13 },
      { 'name': 'Grub', 'found': 0, 'area': 13 },
      { 'name': 'Giant Fly', 'found': 0, 'area': 13 },
      { 'name': 'Hundun', 'found': 0, 'area': 15 },
      { 'name': 'Eggplant Minister', 'found': 0, 'area': 14 },
      { 'name': 'Eggplup', 'found': 0, 'area': 14 },
      { 'name': 'Celestial Jelly', 'found': 0, 'area': 16 },
      { 'name': 'Scorpion', 'found': 0, 'area': 0 },
      { 'name': 'Bee', 'found': 0, 'area': 7 },
      { 'name': 'Queen Bee', 'found': 0, 'area': 7 },
      { 'name': 'Scarab', 'found': 0, 'area': 0 },
      { 'name': 'Golden Monkey', 'found': 0, 'area': 0 },
      { 'name': 'Leprechaun', 'found': 0, 'area': 8 },
      { 'name': 'Monty', 'found': 0, 'area': 0 },
      { 'name': 'Percy', 'found': 0, 'area': 0 },
      { 'name': 'Poochi', 'found': 0, 'area': 0 },
      { 'name': 'Ghist', 'found': 0, 'area': 5 },
      { 'name': 'Ghost', 'found': 0, 'area': 1 },
      { 'name': 'Cave Turkey', 'found': 0, 'area': 1 },
      { 'name': 'Rock Dog', 'found': 0, 'area': 3 },
      { 'name': 'Axolotl', 'found': 0, 'area': 5 },
      { 'name': 'Qilin', 'found': 0, 'area': 11 },
      { 'name': 'Mech Rider', 'found': 0, 'area': 10 }
    ]
  },
  'People': {
    'offset': 94, 'size': 38, 'num': 1, 'found': 0, 'entries': [
      { 'name': 'Ana', 'found': 1, 'area': 0 },
      { 'name': 'Margaret', 'found': 1, 'area': 0 },
      { 'name': 'Colin', 'found': 1, 'area': 0 },
      { 'name': 'Roffy', 'found': 1, 'area': 0 },
      { 'name': 'Alto', 'found': 0, 'area': 1 },
      { 'name': 'Liz', 'found': 0, 'area': 2 },
      { 'name': 'Nekka', 'found': 0, 'area': 2 },
      { 'name': 'LISE', 'found': 0, 'area': 3 },
      { 'name': 'Coco', 'found': 0, 'area': 3 },
      { 'name': 'Manfred', 'found': 0, 'area': 4 },
      { 'name': 'Jay', 'found': 0, 'area': 5 },
      { 'name': 'Tina', 'found': 0, 'area': 6 },
      { 'name': 'Valerie', 'found': 0, 'area': 7 },
      { 'name': 'Au', 'found': 0, 'area': 8 },
      { 'name': 'Demi', 'found': 0, 'area': 10 },
      { 'name': 'Pilot', 'found': 0, 'area': 10 },
      { 'name': 'Airyn', 'found': 0, 'area': 11 },
      { 'name': 'Dirk', 'found': 0, 'area': 13 },
      { 'name': 'Guy', 'found': 0, 'area': 12 },
      { 'name': 'Classic', 'found': 0, 'area': 15 },
      { 'name': 'Terra', 'found': 0, 'area': 1 },
      { 'name': 'HH', 'found': 0, 'area': 0 },
      { 'name': 'Eggpants', 'found': 0, 'area': 10 },
      { 'name': 'Shoppie', 'found': 0, 'area': 1 },
      { 'name': 'Tun', 'found': 0, 'area': 3 },
      { 'name': 'Yang', 'found': 0, 'area': 1 },
      { 'name': 'Tusk', 'found': 0, 'area': 5 },
      { 'name': 'Bodyguard', 'found': 0, 'area': 5 },
      { 'name': 'Waddler', 'found': 0, 'area': 4 },
      { 'name': 'Caveman Shoppie', 'found': 0, 'area': 0 },
      { 'name': 'Ghist Shoppie', 'found': 0, 'area': 0 },
      { 'name': 'Van Horsing', 'found': 0, 'area': 3 },
      { 'name': 'Parsley', 'found': 0, 'area': 2 },
      { 'name': 'Parsnip', 'found': 0, 'area': 2 },
      { 'name': 'Parmesan', 'found': 0, 'area': 2 },
      { 'name': 'Sparrow', 'found': 0, 'area': 3 },
      { 'name': 'Beg', 'found': 0, 'area': 0 },
      { 'name': 'Yama', 'found': 0, 'area': 14 }
    ]
  },
  'Items': {
    'offset': 132, 'size': 54, 'num': 3, 'found': 0, 'entries': [
      { 'name': 'Rope Pile', 'found': 0, 'area': 0 },
      { 'name': 'Bomb Bag', 'found': 0, 'area': 0 },
      { 'name': 'Bomb Box', 'found': 0, 'area': 0 },
      { 'name': 'Paste', 'found': 0, 'area': 2 },
      { 'name': 'Spectacles', 'found': 0, 'area': 0 },
      { 'name': 'Climbing Gloves', 'found': 0, 'area': 0 },
      { 'name': 'Pitcher\'s Mitt', 'found': 0, 'area': 0 },
      { 'name': 'Spring Shoes', 'found': 0, 'area': 0 },
      { 'name': 'Spike Shoes', 'found': 0, 'area': 10 },
      { 'name': 'Compass', 'found': 0, 'area': 10 },
      { 'name': 'Alien Compass', 'found': 0, 'area': 7 },
      { 'name': 'Parachute', 'found': 0, 'area': 4 },
      { 'name': 'Udjat Eye', 'found': 0, 'area': 1 },
      { 'name': 'Kapala', 'found': 0, 'area': 0 },
      { 'name': 'Hedjet', 'found': 0, 'area': 2 },
      { 'name': 'Crown', 'found': 0, 'area': 3 },
      { 'name': 'Eggplant Crown', 'found': 0, 'area': 14 },
      { 'name': 'The True Crown', 'found': 0, 'area': 0 },
      { 'name': 'Ankh', 'found': 0, 'area': 4 },
      { 'name': 'Tablet of Destiny', 'found': 0, 'area': 9 },
      { 'name': 'Skeleton Key', 'found': 0, 'area': 0 },
      { 'name': 'Royal Jelly', 'found': 0, 'area': 0 },
      { 'name': 'Cape', 'found': 0, 'area': 3 },
      { 'name': 'Vlad\'s Cape', 'found': 0, 'area': 3 },
      { 'name': 'Jetpack', 'found': 0, 'area': 9 },
      { 'name': 'Telepack', 'found': 0, 'area': 0 },
      { 'name': 'Hoverpack', 'found': 0, 'area': 0 },
      { 'name': 'Powerpack', 'found': 0, 'area': 0 },
      { 'name': 'Webgun', 'found': 0, 'area': 0 },
      { 'name': 'Shotgun', 'found': 0, 'area': 0 },
      { 'name': 'Freeze Ray', 'found': 0, 'area': 0 },
      { 'name': 'Clone Gun', 'found': 0, 'area': 5 },
      { 'name': 'Crossbow', 'found': 0, 'area': 0 },
      { 'name': 'Camera', 'found': 0, 'area': 5 },
      { 'name': 'Teleporter', 'found': 0, 'area': 0 },
      { 'name': 'Mattock', 'found': 0, 'area': 0 },
      { 'name': 'Boomerang', 'found': 0, 'area': 2 },
      { 'name': 'Machete', 'found': 0, 'area': 0 },
      { 'name': 'Excalibur', 'found': 0, 'area': 5 },
      { 'name': 'Broken Sword', 'found': 0, 'area': 5 },
      { 'name': 'Plasma Cannon', 'found': 0, 'area': 10 },
      { 'name': 'Scepter', 'found': 0, 'area': 7 },
      { 'name': 'Hou Yi\'s Bow', 'found': 0, 'area': 0 },
      { 'name': 'Arrow of Light', 'found': 0, 'area': 13 },
      { 'name': 'Wooden Shield', 'found': 0, 'area': 2 },
      { 'name': 'Metal Shield', 'found': 0, 'area': 0 },
      { 'name': 'Idol', 'found': 0, 'area': 1 },
      { 'name': 'The Tusk Idol', 'found': 0, 'area': 5 },
      { 'name': 'Curse Pot', 'found': 0, 'area': 1 },
      { 'name': 'Ushabti', 'found': 0, 'area': 11 },
      { 'name': 'Eggplant', 'found': 0, 'area': 0 },
      { 'name': 'Cooked Turkey', 'found': 0, 'area': 1 },
      { 'name': 'Elixir', 'found': 0, 'area': 7 },
      { 'name': 'Four-Leaf Clover', 'found': 0, 'area': 2 }
    ]
  },
  'Traps': {
    'offset': 186, 'size': 24, 'num': 4, 'found': 0, 'entries': [
      { 'name': 'Spikes', 'found': 0, 'area': 1 },
      { 'name': 'Arrow Trap', 'found': 0, 'area': 1 },
      { 'name': 'Totem Trap', 'found': 0, 'area': 1 },
      { 'name': 'Log Trap', 'found': 0, 'area': 1 },
      { 'name': 'Spear Trap', 'found': 0, 'area': 2 },
      { 'name': 'Thorny Trap', 'found': 0, 'area': 2 },
      { 'name': 'Bear Trap', 'found': 0, 'area': 2 },
      { 'name': 'Powder Box', 'found': 0, 'area': 3 },
      { 'name': 'Falling Platform', 'found': 0, 'area': 3 },
      { 'name': 'Spikeball', 'found': 0, 'area': 3 },
      { 'name': 'Lion Trap', 'found': 0, 'area': 5 },
      { 'name': 'Giant Clam', 'found': 0, 'area': 5 },
      { 'name': 'Sliding Wall', 'found': 0, 'area': 5 },
      { 'name': 'Crush Trap', 'found': 0, 'area': 7 },
      { 'name': 'Giant Crush Trap', 'found': 0, 'area': 7 },
      { 'name': 'Boulder', 'found': 0, 'area': 10 },
      { 'name': 'Spring Trap', 'found': 0, 'area': 10 },
      { 'name': 'Landmine', 'found': 0, 'area': 10 },
      { 'name': 'Laser Trap', 'found': 0, 'area': 11 },
      { 'name': 'Spark Trap', 'found': 0, 'area': 11 },
      { 'name': 'Frog Trap', 'found': 0, 'area': 13 },
      { 'name': 'Sticky Trap', 'found': 0, 'area': 13 },
      { 'name': 'Bone Drop', 'found': 0, 'area': 13 },
      { 'name': 'Egg Sac', 'found': 0, 'area': 13 }
    ]
  }
}, state = {}

const entryCount = (entries) => {
  return entries.reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

const found = (cat, i, f) => {
  f = parseInt(f)
  var item = journal[cat].entries[i]
  item.found = f
  var el = document.querySelector('.'+getId(item.name))
  if (el)
    el.style.display = (f ? 'none' : 'inline-block')
  var num = 0
  for (let i of journal[cat].entries) {
    if (i.found) num++
  }
  journal[cat].found = num
  if (hash != 'area' && hash != 'char') {
    var cel = document.querySelector('#' + getId(cat) + ' .found')
    if (cel)
      cel.innerHTML = journal[cat].found
  } else if (hash == 'char') {
    var cel = document.querySelector('#' + getId(cat) + ' .found')
    if (cel)
      cel.innerHTML = countChars()
  }
}

const getId = (item) => {
  return item.toString().toLowerCase().replace(/[^a-z]*/g, '')
}

const countChars = () => {
  var num = 0
  for (let i = 0; i < 20; i++) {
    if (journal.People.entries[i].found) num++
  }
  return num
}

const getPercent = () => {
  var num = 0
  if (hash == 'char') {
    for (let i = 0; i < 20; i++) {
      if (journal.People.entries[i].found) num++
    }
    return Math.floor(num / 20 * 100) + '%'
  }
  var data = state.journal.split(',')
  for (let i of data) {
    num += parseInt(i)
  }
  return Math.floor(num / 210 * 100) + '%'
}

const getCat = (cat) => {
  if (!document.getElementById(getId(cat))) {
    var el = document.createElement('div')
    var head = document.createElement('h2')
    head.className = 'header'
    if (hash == 'area')
      head.style.display = 'none'
    var name = document.createElement('span')
    name.className = 'name'
    if (hash == 'char')
      name.innerHTML = 'Chars'
    else
      name.innerHTML = cat
    head.appendChild(name)
    if (hash != 'area' && hash != 'char') {
      name.onclick = function () { window.location.hash = this.innerHTML.toLowerCase() }
      var found = document.createElement('span')
      found.className = 'found'
      if (hash != 'area')
        found.innerHTML = journal[cat].found
      var slash = document.createElement('span')
      slash.innerHTML = '/'
      var total = document.createElement('span')
      total.className = 'total'
      if (hash != 'area')
        total.innerHTML = journal[cat].size
      head.appendChild(found)
      head.appendChild(slash)
      head.appendChild(total)
    } else if (hash == 'char') {
      var found = document.createElement('span')
      found.className = 'found'
      found.innerHTML = countChars()
      var slash = document.createElement('span')
      slash.innerHTML = '/20'
      head.appendChild(found)
      head.appendChild(slash)
    }
    el.id = getId(cat)
    el.className = 'cat'
    if (hash != 'area' && hash != 'char')
      el.style.order = journal[cat].num
    el.appendChild(head)
    var items = document.createElement('div')
    items.className = 'items'
    el.appendChild(items)
    getJournal().appendChild(el)
  }
  return document.querySelector('#'+getId(cat)+' .items')
}

const getItem = (cat, acat, item, n, f, a, num) => {
  if (!document.querySelector('.' + getId(item)) && hash != 'char' || (cat == 'People' && n < 20)) {
    if (hash == 'area')
      var items = getCat(acat)
    else
      var items = getCat(cat)
    if ((getId(item) == 'quillback' || getId(item) == 'terra') && hash != 'area') {
      var br = document.createElement('div')
      br.className = 'break'
      items.appendChild(br)
    }
    var el = document.createElement('img')
    el.src = 'img/' + getId(item) + '.png'
    el.alt = item
    el.title = item
    //el.style.display = (f ? 'none' : 'inline-block')
    el.className = 'item ' + getId(item)
    el.dataset.cat = cat
    el.dataset.acat = acat
    el.dataset.item = item
    el.dataset.area = a
    el.dataset.n = n
    el.onclick = function () { found(this.dataset.cat, parseInt(this.dataset.n), 1) }
    if (hash == 'area')
      el.style.order = num * 100 + n
    if (!document.getElementById('percent') && (acat == 'Generic' && hash == 'area')) {
      var perc = document.createElement('div')
      perc.id = 'percent'
      perc.innerHTML = getPercent()
      items.appendChild(perc)
    }
    items.appendChild(el)
  }
  if(hash != 'char' || (cat == 'People' && n < 20))
    return document.querySelector('.' + getId(item))
}

const updateJournal = () => {
  found('Places', 0, 0)
  var data = state.journal.split(',')
  var areafound = []
  var areatotal = []
  for (let [name, cat] of Object.entries(journal)) {
    if (name == 'Places') continue
    const entries = data.slice(cat.offset, cat.offset+cat.size)
    var n = 0
    for (let entry of cat.entries) {
      if (!areafound[entry.area]) areafound[entry.area] = 0
      if (!areatotal[entry.area]) areatotal[entry.area] = 0
      if (parseInt(entries[n]) > 0) areafound[entry.area]++
      areatotal[entry.area]++
      n++
    }
  }
  for (let [name, cat] of Object.entries(journal)) {
    const entries = data.slice(cat.offset, cat.offset+cat.size)
    journal[name].found = entryCount(entries)
    for (let i = 0; i < entries.length; ++i) {
      var area = journal[name].entries[i].area
      if (parseInt(entries[i]) == 0) {
        found(name, i, entries[i])
      } else if (name != 'Places') {
        found(name, i, entries[i])
      } else if (name == 'Places' && areafound[area] >= areatotal[area]) {
        found(name, i, entries[i])
      }
    }
  }
  var perc = document.getElementById('percent')
  if(perc) perc.innerHTML = getPercent()
}

const hashChange = () => {
  hash = window.location.hash.substr(1).toLowerCase()
  if (hash) {
    if (hash != 'area' && hash != 'char') {
      document.querySelectorAll('.cat').forEach((cat) => {
        if (cat.id != hash) {
          cat.style.display = 'none'
        } else {
          cat.style.display = 'block'
        }
      })
    }
  }
}
window.addEventListener('hashchange', function () {
  window.location.reload()
}, false)

const getJournal = () => {
  if (!document.getElementById('journal')) {
    var el = document.createElement('div')
    el.id = 'journal'
    if (!document.getElementById('percent') && hash != 'area' && hash != 'char') {
      var perc = document.createElement('div')
      perc.id = 'percent'
      perc.innerHTML = getPercent()
      perc.style.textAlign = 'right'
      perc.style.width = '150px'
      perc.style.fontSize = '24px'
      el.appendChild(perc)
    }
    container.appendChild(el)
    var data = state.journal.split(',')
    for (let [name, cat] of Object.entries(journal)) {
      var n = 0
      for (let entry of cat.entries) {
        if (entry.area > 0)
          areaname = journal.Places.entries[entry.area - 1].name
        else
          areaname = 'Generic'
        getItem(name, areaname, entry.name, n++, entry.found, entry.area, cat.num)
      }
    }
  }
  hashChange()
  updateJournal()
  return document.getElementById('journal')
}

const connect = () => {
  var ws = new WebSocket('ws://' + window.location.hostname + ':' + window.location.port + '/')
  ws.onopen = () => {
    console.log('WebSocket opened')
    ws.send('state')
  }
  ws.onmessage = (e) => {
    let data = JSON.parse(e.data)
    if (data['state']) {
      state = data['state']
    } else if (data['update']) {
      state = data['update']
    }
    getJournal()
    updateJournal()
  }
  ws.onclose = (e) => {
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason)
    setTimeout(() => {
      connect()
    }, 1000)
  }
  ws.onerror = (err) => {
    console.error('Socket encountered error: ', err.message, 'Closing socket')
    ws.close()
  };
  return ws
}
const init = () => {
  var ws = connect()
}
init()
