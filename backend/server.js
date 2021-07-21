var express = require ('express')
const path = require ('path')
const cors = require ('cors')

const PORT = 80
const IP = "209.188.7.188"

var app = express()


app.use (express.static(path.join(__dirname, 'build')))
app.set ('domain', 'rittenhouse.restaurant')
app.use(cors())


app.get ('/' , function (req, res) {
  res.sendFile(path.join(build, 'index.html'))
})



app.listen(PORT, IP, function () {
  console.log('listening at '+IP+':'+PORT)
})

