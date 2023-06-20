const server = require('http').createServer();
const io = require('socket.io')(server);

// Listen for socket.io connections
io.on('connection', (socket) => {
  // Listen for the 'slideChange' event emitted by a device
  socket.on('slideChange', (slideNumber) => {
    // Broadcast the 'slideChange' event to all connected devices, including the main controller
    io.emit('slideChange', slideNumber);
  });
});

// Start the server
server.listen(3005, () => {
  console.log('Socket.io server is running on port 3000');
});