// Set the target launch date and time (replace with your desired date and time)
const launchDate = new Date("2024-12-31T00:00:00Z").getTime();

// Update the countdown every second
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = launchDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    } else {
        countdownElement.innerHTML = "Website Launched!";
    }
}

// Update the countdown initially and every second
updateCountdown();
setInterval(updateCountdown, 1000);
