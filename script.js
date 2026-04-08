function toggleUserMenu() {
    var menu = document.getElementById("account-menu");
    // If hidden, show it. If showing, hide it.
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function showAccountSettings() {
    // Hide the main feed and show the settings page
    document.querySelector('.feed').style.display = 'none';
    document.getElementById('account-settings-page').style.display = 'block';
    // Close the dropdown menu
    document.getElementById("account-menu").style.display = "none";
}
// This runs automatically when the site opens
window.onload = function() {
    let user = localStorage.getItem("zebraUser");

    if (!user) {
        // If no user is found, start them as a Guest
        console.log("Welcome to Zebra! Entering Guest Mode...");
        enterGuestMode();
    } else {
        showMemberFeed(user);
    }
};

function enterGuestMode() {
    // Change the profile button text to show they are a guest
    document.querySelector('.profile-btn').innerText = "Guest Mode";
    
    // You can also hide certain things guests shouldn't do (like posting)
    document.querySelector('.create-post-btn').style.display = 'none';
}

