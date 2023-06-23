const server = require('http').createServer();
const io = require('socket.io')(server);

// // Listen for socket.io connections
// io.on('connection', (socket) => {
//   // Listen for the 'slideChange' event emitted by a device
//   socket.on('slideChange', (slideNumber) => {
//     // Broadcast the 'slideChange' event to all connected devices, including the main controller
//     io.emit('slideChange', slideNumber);
//   });
// });

// Listen for the 'slideChange' event emitted by the main controller or server
io.on('slideChange', (slideNumber) => {
  const newURL = window.location.href.split('#')[0] + `#${slideNumber}`;
  window.location.href = newURL;
});

// Start the server
server.listen(3005, () => {
  console.log('Socket.io server is running on port 3000');
});