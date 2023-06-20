// connect to the socket.io server
const socket = io('http://localhost:3005');

// listen for the 'slideChange' event emitted by the main controller
socket.on('slideChange', (slideNumber) => {
    // update the slide on the current device
    goToSlide(slideNumber);
});

// emit the 'slideChange' event when the slide changes on the main controller
function goToSlide(slideNumber) {
    // update the slide on the main controller
    // ...

    // emit the 'slideChange' evenet to the server
    socket.emit('slideChange', slideNumber);
}