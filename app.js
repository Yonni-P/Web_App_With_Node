const port = process.env.PORT || 3000
const http = require('http')
const express = require('express')
const app = express()
const mainRoutes = require('./mainRoutes')
/*
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello World</h1>')
})

server.listen(port, () => {
  console.log('Server running at port ' + port)
})
*/
app.use(mainRoutes)
var server = app.listen(port)
server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello World</h1>')
})
// server.listen(port)

// const port = process.env.PORT || 3000
// app.listen(port)

// console.log('Express server running on port', port)

console.log('index.js ran')
