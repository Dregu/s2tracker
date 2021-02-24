const express = require('express')
const bodyParser = require('body-parser')
var app = express()
const expressWs = require('express-ws')(app)
const open = require('open')

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(__dirname + '/static'))

var state = { 'journal': Array(0xec).fill(0).join(',') }

const broadcast = (status) => {
  for(let client of expressWs.getWss().clients) {
    client.send(JSON.stringify({ update: status }))
  }
}

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
