/*  File Name: script.js
    Created on: 11.27.2024
    Developed by: Jacob Graham
    Last Updated: 12.01.2024
*/

// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}


/*Christmas list section*/

// Flag to track whether the user has clicked a gift in the current session
let hasClickedOnce = sessionStorage.getItem('hasClickedOnce') || false;

// Function to handle the first-time click event on a present
function showGift(giftId) {
    // Play the song only the first time the user clicks a present
    if (!hasClickedOnce) {
        let christmasSong = document.getElementById('christmasSong');
        christmasSong.play();
        christmasSong.loop = true; // Enable looping after the first click

        // Mark that the user has clicked once in this session
        hasClickedOnce = true;
        sessionStorage.setItem('hasClickedOnce', 'true');
    }

    // Hide all gift displays
    const allGifts = document.querySelectorAll('.gift-display');
    allGifts.forEach(gift => gift.style.display = 'none');

    // Show the selected gift
    const selectedGift = document.getElementById(giftId);
    if (selectedGift) {
        selectedGift.style.display = 'block';
    }
}
