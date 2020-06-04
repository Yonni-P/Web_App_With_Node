// const http = require('http')
const port = process.env.PORT || 3000
// const port = 3005
/*
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello World</h1>')
})
*/
/*
server.listen(port, () => {
  console.log('Server running at port ' + port)
})
*/
const express = require('express')
const app = express()
const mainRoutes = require('./mainRoutes')

app.use(mainRoutes)

// const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)

console.log('index.js ran')
