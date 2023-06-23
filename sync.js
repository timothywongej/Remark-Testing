// connect to the socket.io server
const socket = io('http://localhost:3005');

window.addEventListener('hashchange', handleHashChange);

function handleHashChange() {
    const slideNumber = getSlideNumberFromURL();
    socket.emit('slideChange', slideNumber);
}

function getSlideNumberFromURL() {
    const url = window.location.href;
    const slideNumber = url.split('#')[1] || '1';
    return slideNumber;
}

document.addEventListener('DOMContentLoaded', () => {
    const slideNumber = getSlideNumberFromURL();
    socket.emit('slideChange', slideNumber);
});

socket.on('slideChange', (slideNumber) => {
    const newURL = window.location.href.split('#')[0] + `#${slideNumber}`;
    window.location.href = newURL;
});