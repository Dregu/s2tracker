const express = require('express')
const bodyParser = require('body-parser')
var app = express()
const expressWs = require('express-ws')(app)
const nconf = require('nconf')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('static'))

var state = {}

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
  console.log(state)
  broadcast(state)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html')
})

app.ws('/', (ws, req) => {
  ws.on('message', (msg) => {
    console.log(msg)
    if(msg == 'state') {
      ws.send(JSON.stringify({ state: state }))
    }
  })

})

app.listen(27122)
