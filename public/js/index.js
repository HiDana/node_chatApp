var socket = io();

socket.on('connect', () => {
	console.log('connected to server')

	// socket.emit('createEmail', {
	// 	to: 'even@gmail.com',
	// 	text: 'hey, i am even'
	// })
	socket.emit('createMessage', {
		from: 'dana',
		text: 'hahahaha, I am Dana'
	})
})
socket.on('disconnect', () => {
	console.log('disconnected from server')
})

// socket.on('newEmail', (email) => {
// 	console.log('New email', email)
// })

socket.on('newMessage', (message) => {
	console.log('New message', message)
})