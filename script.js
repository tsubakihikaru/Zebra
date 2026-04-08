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
