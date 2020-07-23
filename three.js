function clock() {           //Clock
    let date = new Date();
    let time = date.toLocaleTimeString();
    h3Clock.innerText = time;
}
setInterval(clock, 1000)  //Live Clock


document.querySelector('.three').addEventListener("click", third);