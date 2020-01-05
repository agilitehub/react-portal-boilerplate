'use strict'

require('agilite-utils/dotenv').config()

const express = require('express')
const path = require('path')
const app = express()
const http = require('http')
const compression = require('compression')

app.use(compression())

// Serve the files out of ./build as our main files
app.use('/', express.static(path.join(__dirname, '/build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

// Server Setup
const port = process.env.PORT
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`${process.env.REACT_APP_NAME} listening on Port - ${process.env.PORT}`)
})
