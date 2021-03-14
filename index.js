const express = require('express')
const bodyParser = require('body-parser')
var app = express()
const expressWs = require('express-ws')(app)
const open = require('open')

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(__dirname + '/static'))
app.set('views', './views')
app.set('view engine', 'jade')

var initjournal = Array(0xec).fill(0)
initjournal[0] = 1
initjournal[0x5e] = 1
initjournal[0x5f] = 1
initjournal[0x60] = 1
initjournal[0x61] = 1

var state = { 'journal': initjournal.join(',') }
let roomCode = null;


const broadcast = (status) => {
  for(let client of expressWs.getWss().clients) {
    client.send(JSON.stringify({ update: status }))
  }
}

app.get('/join-room', function (req, res) {
  console.log(state)
  res.render('join-room', { 'roomCode': roomCode })
})

app.post('/join-room', function (req, res) {
  roomCode = req.body.roomCode
  res.redirect('/join-room')
})

app.post('/', (req, res) => {
  res.sendStatus(200)
  state = Object.entries(req.body).reduce((acc, [key, value]) => {
    acc[key] = isNaN(+value) ? value : +value
    return acc
  },{})
  console.log('Got journal data from livesplit')
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
    console.log('Tracker is listening on http://localhost:%s', port)
    open('http://localhost:'+port)
})
