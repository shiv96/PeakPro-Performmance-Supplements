// Countdown Timer
const launchDate = new Date("March 6, 2025 00:00:00").getTime();

const timer = setInterval(function() {
    let now = new Date().getTime();
    let distance = launchDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".countdown").innerHTML = 
        `Launching in ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML = "We Are Live!";
    }
}, 1000);