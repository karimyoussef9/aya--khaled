// Wedding date: February 1st, 2026 at 6:00 PM
const weddingDate = new Date('2026-02-01T18:00:00');

// Countdown timer function
function updateCountdown() {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) {
        // Wedding has passed
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Update DOM elements
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// RSVP button handler
function handleRSVP() {
    alert("RSVP Confirmed! We look forward to celebrating with you.");
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Attach RSVP button event listener
    const rsvpBtn = document.getElementById('rsvpBtn');
    if (rsvpBtn) {
        rsvpBtn.addEventListener('click', handleRSVP);
    }
});
