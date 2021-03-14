const express = require('express')
const bodyParser = require('body-parser')
const open = require('open')
const WebSocket = require('ws');

var app = express()
const expressWs = require('express-ws')(app)
const numEntries = 0xec;

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(__dirname + '/static'))
app.set('views', './views')
app.set('view engine', 'jade')

var journal = Array(numEntries).fill(0)
journal[0] = 1
journal[0x5e] = 1
journal[0x5f] = 1
journal[0x60] = 1
journal[0x61] = 1

var state = { 'journal': journal }
var roomCode = null;
var fyiConnection = null;

const updateJournal = (newState) => {
  console.log('Updating state from other player.')
  newState.map((entry, idx) => {
    if (entry) {
      state['journal'][idx] = entry;
    }
  });
}

const connectFyi = () => {
  console.log("Connecting to spelunky.fyi")

  if (!roomCode) {
    return null;
  }

  var ws = new WebSocket(`wss://spelunky.fyi/ws/tools/coop-aje-tracker/${roomCode}/`)

  ws.on('open', () => {
    console.log('Connected to Spelunky.fyi')
  })

  ws.on('message', (data) => {
    data = JSON.parse(data);
    if (data['action'] == 'update') {
      updateJournal(data['data'])
      broadcast(state);
    }
  })

  ws.on('close',  (e) => {
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason)
    fyiConnection = null;
    setTimeout(() => {
      fyiConnection = connectFyi();
    }, 1000)
  })

  ws.on('error', (err) => {
    console.error(`Socket encountered error: ${err.message} Closing socket`)
    ws.close()
  })

  return ws
}

const broadcast = (status) => {
  for(let client of expressWs.getWss().clients) {
    client.send(JSON.stringify({ update: status }))
  }
}

app.get('/join-room', function (req, res) {
  res.render('join-room', { 'roomCode': roomCode })
})

app.post('/join-room', function (req, res) {
  roomCode = req.body.roomCode
  if (fyiConnection !== null) {
    fyiConnection.close();
    fyiConnection = null;
  }

  if (roomCode !== null) {
    fyiConnection = connectFyi();
  }
  res.redirect('/join-room')
})

app.post('/', (req, res) => {
  res.sendStatus(200)
  Object.entries(req.body).map(([key, value], idx) => {
    if (key === "journal") {
      let newState = value.split(',')
      if (fyiConnection !== null) {
        updateJournal(newState)
      } else {
        state[key] = isNaN(+value) ? value : +value
      }
    } else {
      state[key] = isNaN(+value) ? value : +value
    }
  })
  console.log('Got journal data from livesplit')
  if (fyiConnection !== null) {
    console.log('Relaying state to spelunky.fyi')
    fyiConnection.send(JSON.stringify({
      'action': 'update',
      'data': state['journal']
    }))
  }
  broadcast(state)
})

app.ws('/', (ws, req) => {
  ws.on('message', (msg) => {
    console.log('Client is asking for', msg)
    if(msg == 'state') {
      ws.send(JSON.stringify({ state: state }))
    }
  })
})

var server = app.listen(27122, function() {
    var port = server.address().port
    console.log(`Tracker is listening on http://localhost:${port}`)
    console.log(`If playing co-op join a room at http://localhost:${port}/join-room`)
    open(`http://localhost:${port}`)
})
