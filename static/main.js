const container = document.getElementById('container')
var journal = {
  'Places': {
    'offset': 0, 'size': 16, 'num': 0, 'found': 0, 'entries': [
      { 'name': 'Dwelling', 'found': 0 },
      { 'name': 'Jungle', 'found': 0 },
      { 'name': 'Volcana', 'found': 0 },
      { 'name': 'Olmec\'s Lair', 'found': 0 },
      { 'name': 'Tide Pool', 'found': 0 },
      { 'name': 'Abzu', 'found': 0 },
      { 'name': 'Temple of Anubis', 'found': 0 },
      { 'name': 'City of Gold', 'found': 0 },
      { 'name': 'Duat', 'found': 0 },
      { 'name': 'Ice Caves', 'found': 0 },
      { 'name': 'Neo Babylon', 'found': 0 },
      { 'name': 'Tiamat\'s Throne', 'found': 0 },
      { 'name': 'Sunken City', 'found': 0 },
      { 'name': 'Eggplant World', 'found': 0 },
      { 'name': 'Hundun\'s Hideaway', 'found': 0 },
      { 'name': 'Cosmic Ocean', 'found': 0 }
    ]
  },
  'Bestiary': {
    'offset': 16, 'size': 78, 'num': 2, 'found': 0, 'entries': [
      { 'name': 'Snake', 'found': 0 },
      { 'name': 'Spider', 'found': 0 },
      { 'name': 'Bat', 'found': 0 },
      { 'name': 'Caveman', 'found': 0 },
      { 'name': 'Skeleton', 'found': 0 },
      { 'name': 'Horned Lizard', 'found': 0 },
      { 'name': 'Cave Mole', 'found': 0 },
      { 'name': 'Quillback', 'found': 0 },
      { 'name': 'Mantrap', 'found': 0 },
      { 'name': 'Tiki man', 'found': 0 },
      { 'name': 'Witch Doctor', 'found': 0 },
      { 'name': 'Mosquito', 'found': 0 },
      { 'name': 'Monkey', 'found': 0 },
      { 'name': 'Hang Spider', 'found': 0 },
      { 'name': 'Giant Spider', 'found': 0 },
      { 'name': 'Magmar', 'found': 0 },
      { 'name': 'Robot', 'found': 0 },
      { 'name': 'Fire Bug', 'found': 0 },
      { 'name': 'Imp', 'found': 0 },
      { 'name': 'Lavamander', 'found': 0 },
      { 'name': 'Vampire', 'found': 0 },
      { 'name': 'Vlad', 'found': 0 },
      { 'name': 'Olmec', 'found': 0 },
      { 'name': 'Jiangshi', 'found': 0 },
      { 'name': 'Jiangshi Assassin', 'found': 0 },
      { 'name': 'Flying Fish', 'found': 0 },
      { 'name': 'Octopy', 'found': 0 },
      { 'name': 'Hermit Crab', 'found': 0 },
      { 'name': 'Pangxie', 'found': 0 },
      { 'name': 'Great Humphead', 'found': 0 },
      { 'name': 'Kingu', 'found': 0 },
      { 'name': 'Crocman', 'found': 0 },
      { 'name': 'Cobra', 'found': 0 },
      { 'name': 'Mummy', 'found': 0 },
      { 'name': 'Sorceress', 'found': 0 },
      { 'name': 'Cat Mummy', 'found': 0 },
      { 'name': 'Necromancer', 'found': 0 },
      { 'name': 'Anubis', 'found': 0 },
      { 'name': 'Ammit', 'found': 0 },
      { 'name': 'Apep', 'found': 0 },
      { 'name': 'Anubis II', 'found': 0 },
      { 'name': 'Osiris', 'found': 0 },
      { 'name': 'UFO', 'found': 0 },
      { 'name': 'Alien', 'found': 0 },
      { 'name': 'Yeti', 'found': 0 },
      { 'name': 'Yeti King', 'found': 0 },
      { 'name': 'Yeti Queen', 'found': 0 },
      { 'name': 'Lahamu', 'found': 0 },
      { 'name': 'Proto Shopkeeper', 'found': 0 },
      { 'name': 'Olmite', 'found': 0 },
      { 'name': 'Lamassu', 'found': 0 },
      { 'name': 'Tiamat', 'found': 0 },
      { 'name': 'Tadpole', 'found': 0 },
      { 'name': 'Frog', 'found': 0 },
      { 'name': 'Fire Frog', 'found': 0 },
      { 'name': 'Goliath Frog', 'found': 0 },
      { 'name': 'Grub', 'found': 0 },
      { 'name': 'Giant Fly', 'found': 0 },
      { 'name': 'Hundun', 'found': 0 },
      { 'name': 'Eggplant Minister', 'found': 0 },
      { 'name': 'Eggplup', 'found': 0 },
      { 'name': 'Celestial Jelly', 'found': 0 },
      { 'name': 'Scorpion', 'found': 0 },
      { 'name': 'Bee', 'found': 0 },
      { 'name': 'Queen Bee', 'found': 0 },
      { 'name': 'Scarab', 'found': 0 },
      { 'name': 'Golden Monkey', 'found': 0 },
      { 'name': 'Leprechaun', 'found': 0 },
      { 'name': 'Monty', 'found': 0 },
      { 'name': 'Percy', 'found': 0 },
      { 'name': 'Poochi', 'found': 0 },
      { 'name': 'Ghist', 'found': 0 },
      { 'name': 'Ghost', 'found': 0 },
      { 'name': 'Cave Turkey', 'found': 0 },
      { 'name': 'Rock Dog', 'found': 0 },
      { 'name': 'Axolotl', 'found': 0 },
      { 'name': 'Qilin', 'found': 0 },
      { 'name': 'Mech Rider', 'found': 0 }
    ]
  },
  'People': {
    'offset': 94, 'size': 38, 'num': 1, 'found': 0, 'entries': [
      { 'name': 'Ana', 'found': 0 },
      { 'name': 'Margaret', 'found': 0 },
      { 'name': 'Colin', 'found': 0 },
      { 'name': 'Roffy', 'found': 0 },
      { 'name': 'Alto', 'found': 0 },
      { 'name': 'Liz', 'found': 0 },
      { 'name': 'Nekka', 'found': 0 },
      { 'name': 'LISE', 'found': 0 },
      { 'name': 'Coco', 'found': 0 },
      { 'name': 'Manfred', 'found': 0 },
      { 'name': 'Jay', 'found': 0 },
      { 'name': 'Tina', 'found': 0 },
      { 'name': 'Valerie', 'found': 0 },
      { 'name': 'Au', 'found': 0 },
      { 'name': 'Demi', 'found': 0 },
      { 'name': 'Pilot', 'found': 0 },
      { 'name': 'Airyn', 'found': 0 },
      { 'name': 'Dirk', 'found': 0 },
      { 'name': 'Guy', 'found': 0 },
      { 'name': 'Classic', 'found': 0 },
      { 'name': 'Terra', 'found': 0 },
      { 'name': 'HH', 'found': 0 },
      { 'name': 'Eggpants', 'found': 0 },
      { 'name': 'Shoppie', 'found': 0 },
      { 'name': 'Tun', 'found': 0 },
      { 'name': 'Yang', 'found': 0 },
      { 'name': 'Tusk', 'found': 0 },
      { 'name': 'Bodyguard', 'found': 0 },
      { 'name': 'Waddler', 'found': 0 },
      { 'name': 'Caveman Shoppie', 'found': 0 },
      { 'name': 'Ghist Shoppie', 'found': 0 },
      { 'name': 'Van Horsing', 'found': 0 },
      { 'name': 'Parsley', 'found': 0 },
      { 'name': 'Parsnip', 'found': 0 },
      { 'name': 'Parmesan', 'found': 0 },
      { 'name': 'Sparrow', 'found': 0 },
      { 'name': 'Beg', 'found': 0 },
      { 'name': 'Yama', 'found': 0 }
    ]
  },
  'Items': {
    'offset': 132, 'size': 54, 'num': 3, 'found': 0, 'entries': [
      { 'name': 'Rope Pile', 'found': 0 },
      { 'name': 'Bomb Bag', 'found': 0 },
      { 'name': 'Bomb Box', 'found': 0 },
      { 'name': 'Paste', 'found': 0 },
      { 'name': 'Spectacles', 'found': 0 },
      { 'name': 'Climbing Gloves', 'found': 0 },
      { 'name': 'Pitcher\'s Mitt', 'found': 0 },
      { 'name': 'Spring Shoes', 'found': 0 },
      { 'name': 'Spike Shoes', 'found': 0 },
      { 'name': 'Compass', 'found': 0 },
      { 'name': 'Alien Compass', 'found': 0 },
      { 'name': 'Parachute', 'found': 0 },
      { 'name': 'Udjat Eye', 'found': 0 },
      { 'name': 'Kapala', 'found': 0 },
      { 'name': 'Hedjet', 'found': 0 },
      { 'name': 'Crown', 'found': 0 },
      { 'name': 'Eggplant Crown', 'found': 0 },
      { 'name': 'The True Crown', 'found': 0 },
      { 'name': 'Ankh', 'found': 0 },
      { 'name': 'Tablet of Destiny', 'found': 0 },
      { 'name': 'Skeleton Key', 'found': 0 },
      { 'name': 'Royal Jelly', 'found': 0 },
      { 'name': 'Cape', 'found': 0 },
      { 'name': 'Vlad\'s Cape', 'found': 0 },
      { 'name': 'Jetpack', 'found': 0 },
      { 'name': 'Telepack', 'found': 0 },
      { 'name': 'Hoverpack', 'found': 0 },
      { 'name': 'Powerpack', 'found': 0 },
      { 'name': 'Webgun', 'found': 0 },
      { 'name': 'Shotgun', 'found': 0 },
      { 'name': 'Freeze Ray', 'found': 0 },
      { 'name': 'Clone Gun', 'found': 0 },
      { 'name': 'Crossbow', 'found': 0 },
      { 'name': 'Camera', 'found': 0 },
      { 'name': 'Teleporter', 'found': 0 },
      { 'name': 'Mattock', 'found': 0 },
      { 'name': 'Boomerang', 'found': 0 },
      { 'name': 'Machete', 'found': 0 },
      { 'name': 'Excalibur', 'found': 0 },
      { 'name': 'Broken Sword', 'found': 0 },
      { 'name': 'Plasma Cannon', 'found': 0 },
      { 'name': 'Scepter', 'found': 0 },
      { 'name': 'Hou Yi\'s Bow', 'found': 0 },
      { 'name': 'Arrow of Light', 'found': 0 },
      { 'name': 'Wooden Shield', 'found': 0 },
      { 'name': 'Metal Shield', 'found': 0 },
      { 'name': 'Idol', 'found': 0 },
      { 'name': 'The Tusk Idol', 'found': 0 },
      { 'name': 'Curse Pot', 'found': 0 },
      { 'name': 'Ushabti', 'found': 0 },
      { 'name': 'Eggplant', 'found': 0 },
      { 'name': 'Cooked Turkey', 'found': 0 },
      { 'name': 'Elixir', 'found': 0 },
      { 'name': 'Four-Leaf Clover', 'found': 0 }
    ]
  },
  'Traps': {
    'offset': 186, 'size': 24, 'num': 4, 'found': 0, 'entries': [
      { 'name': 'Spikes', 'found': 0 },
      { 'name': 'Arrow Trap', 'found': 0 },
      { 'name': 'Totem Trap', 'found': 0 },
      { 'name': 'Log Trap', 'found': 0 },
      { 'name': 'Spear Trap', 'found': 0 },
      { 'name': 'Thorny Trap', 'found': 0 },
      { 'name': 'Bear Trap', 'found': 0 },
      { 'name': 'Powder Box', 'found': 0 },
      { 'name': 'Falling Platform', 'found': 0 },
      { 'name': 'Spikeball', 'found': 0 },
      { 'name': 'Lion Trap', 'found': 0 },
      { 'name': 'Giant Clam', 'found': 0 },
      { 'name': 'Sliding Wall', 'found': 0 },
      { 'name': 'Crush Trap', 'found': 0 },
      { 'name': 'Giant Crush Trap', 'found': 0 },
      { 'name': 'Boulder', 'found': 0 },
      { 'name': 'Spring Trap', 'found': 0 },
      { 'name': 'Landmine', 'found': 0 },
      { 'name': 'Laser Trap', 'found': 0 },
      { 'name': 'Spark Trap', 'found': 0 },
      { 'name': 'Frog Trap', 'found': 0 },
      { 'name': 'Sticky Trap', 'found': 0 },
      { 'name': 'Bone Drop', 'found': 0 },
      { 'name': 'Egg Sac', 'found': 0 }
    ]
  }
}, state = {}

const entryCount = (entries) => {
  return entries.reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

const found = (cat, i, found) => {
  found = parseInt(found)
  var item = journal[cat].entries[i]
  item.found = found
  var el = document.querySelector('#'+getId(cat)+' .'+getId(item.name))
  if (el)
    el.style.display = (found ? 'none' : 'inline-block')
  var found = document.querySelector('#' + getId(cat) + ' .found')
  var num = 0
  for (let i of journal[cat].entries) {
    if (i.found) num++
  }
  journal[cat].found = num
  if (found)
    found.innerHTML = journal[cat].found
}

const getId = (item) => {
  return item.toString().toLowerCase().replace(/[^a-z]*/g, '')
}

const getCat = (cat) => {
  if (!document.getElementById(getId(cat))) {
    var el = document.createElement('div')
    var head = document.createElement('h2')
    head.className = 'header'
    var name = document.createElement('span')
    name.className = 'name'
    name.innerHTML = cat
    name.onclick = function() { window.location.hash = this.innerHTML.toLowerCase() }
    var found = document.createElement('span')
    found.className = 'found'
    found.innerHTML = journal[cat].found
    var slash = document.createElement('span')
    slash.innerHTML = '/'
    var total = document.createElement('span')
    total.className = 'total'
    total.innerHTML = journal[cat].size
    head.appendChild(name)
    head.appendChild(found)
    head.appendChild(slash)
    head.appendChild(total)
    el.id = getId(cat)
    el.className = 'cat'
    el.style.order = journal[cat].num
    el.appendChild(head)
    var items = document.createElement('div')
    items.className = 'items'
    el.appendChild(items)
    getJournal().appendChild(el)
  }
  return document.querySelector('#'+getId(cat)+' .items')
}

const getItem = (cat, item, n, f) => {
  if (!document.querySelector('#'+getId(cat)+' .'+getId(item))) {
    var items = getCat(cat)
    if (getId(item) == 'quillback' || getId(item) == 'terra') {
      var br = document.createElement('div')
      br.className = 'break'
      items.appendChild(br)
    }
    var el = document.createElement('img')
    el.src = 'img/'+getId(cat)+'/'+getId(item)+'.png'
    el.alt = item
    el.title = item
    el.style.display = (f ? 'none' : 'inline-block')
    el.className = 'item ' + getId(item)
    el.dataset.cat = cat
    el.dataset.item = item
    el.dataset.n = n
    el.onclick = function() { found(this.dataset.cat, parseInt(this.dataset.n), 1) }
    items.appendChild(el)
  }
  return document.querySelector('#'+getId(cat)+' .'+getId(item))
}

const updateJournal = () => {
  var data = state.journal.split(',')
  for (let [name, cat] of Object.entries(journal)) {
    const entries = data.slice(cat.offset, cat.offset+cat.size)
    journal[name].found = entryCount(entries)
    for (let i = 0; i < entries.length; ++i) {
      found(name, i, entries[i])
    }
  }
}

const hideCats = () => {
  var hash = window.location.hash.substr(1).toLowerCase()
  if (hash) {
    document.querySelectorAll('.cat').forEach((cat) => {
      if (cat.id != hash) {
        cat.style.display = 'none'
      } else {
        cat.style.display = 'block'
      }
    })
  }
}
window.addEventListener('hashchange', hideCats, false)

const getJournal = () => {
  if (!document.getElementById('journal')) {
    var el = document.createElement('div')
    el.id = 'journal'
    container.appendChild(el)
    var data = state.journal.split(',')
    for (let [name, cat] of Object.entries(journal)) {
      var n = 0
      for (let entry of cat.entries) {
        getItem(name, entry.name, n++, 0)
      }
    }
  }
  hideCats()
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
