/* 
    Author: Jacob Graham
    File Name: script.js
    Date: 11-27-2024
*/

// Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

// Function to display the burpees example video
function burpees() {
    videoSource.src = "media/burpees.mp4";
    descriptionSource.src = "media/burpees-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

// Function to display the plank example video
function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSource.src = "media/plank-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

function mountain() {
    videoSource.src = "media/mountain.mp4";
    descriptionSource.src = "media/mountain-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

// Function to display a promo code
function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}

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

/* Christmas list scripts begin */

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

/* Christmas list scripts end */

/**
 * music script
 * 
 */
