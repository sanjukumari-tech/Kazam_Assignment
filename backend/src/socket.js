const socketHandler = (io) => {
  const { addTaskToCache } = require('./controllers/taskController.js')

  io.on('connection', (socket) => {
    console.log('Client connected')

    socket.on('add', async (data) => {
      console.log('Received add event:', data)
      await addTaskToCache(data)
      socket.emit('ack', 'Task added')
    })

    socket.on('disconnect', () => {
      console.log('Client disconnected')
    })
  })
}

export default  socketHandler
