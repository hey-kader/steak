const express = require ('express')
const path = require ('path')

const PORT = 80
const IP = "66.85.133.132"

var app = express()


app.use (express.static(path.join(__dirname, 'build')))

app.set ('domain', 'rittenhouse.restaurant')

app.get ('/' , (req, res) => {
  res.sendFile('index.html')
})


app.listen(PORT, IP, function () {
  console.log('listening at http://rittenhouse.restaurant')
})

