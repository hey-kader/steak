var express = require ('express')
const path = require ('path')
const cors = require ('cors')
const fs = require ('fs')
const https = require ('https')

const PORT = 80
const IP = "209.188.7.188"

var app = express()


app.use (express.static(path.join(__dirname, 'build')))
app.set ('domain', 'rittenhouse.restaurant')
app.use(cors())
app.use(redirectUnmatched)

function redirectUnmatched (req, res) {
  res.redirect('https://rittenhouse.restaurant/')
}

app.get ('/' , function (req, res) {
  res.sendFile(path.join(build, 'index.html'))
})



app.listen(PORT, IP, function () {
  console.log('listening at '+ip+':'+port)
})

const credentials = {
  key: fs.readFileSync('rittenhouse.restaurant.key'),
  cert: fs.readFileSync('rittenhouse_restaurant.crt')
}

const server = https.createServer (credentials, app)
server.listen('443', IP, function () {
console.log('running on https://rittenhouse.restaurant')
})



