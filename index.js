'use strict'

const path = require('path')
const http = require('http') 
const express = require('express')
const socketIo = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketIo(server)

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', socket => {
	console.log('a socket connected!')

	socket.on('hello', message => {
		console.log('got message',message)
		socket.emit('doge')
	})
})

server.listen(3000, () => console.log('server is started'))

