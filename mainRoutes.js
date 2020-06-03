const path = require('path')
const express = require('express')
const mainRouter = express.Router()

mainRouter.get('/', function (req, res) {
  res.send('Hello World, I\'m Node.js')
})

mainRouter.get('/index', function (req, res) {
  res.sendfile(path.join(__dirname, 'views', 'index.html'))
})

mainRouter.get('/logInpage', function (req, res) {
  res.sendfile(path.join(__dirname, 'views', 'logInpage.html'))
})

mainRouter.get('/registrationPage', function (req, res) {
  res.sendfile(path.join(__dirname, 'views', 'registrationPage.html'))
})

mainRouter.get('/Splitvengers', function (req, res) {
  res.sendfile(path.join(__dirname, 'views', 'Splitvengers.html'))
})

module.exports = mainRouter
