const roles = ["Software Engineer", "Web Developer", "Designer"];
let currentRoleIndex = 0;

function updateRoleText() {
    const roleElement = document.querySelector(".role");
    roleElement.textContent = roles[currentRoleIndex];
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
}

// Update the role text
updateRoleText();

// Update the role text every 3 seconds
let intervalId = setInterval(updateRoleText, 3000);

// Clear the interval and restart when all roles have been displayed
if (currentRoleIndex === 0) {
    clearInterval(intervalId);
    intervalId = setInterval(updateRoleText, 3000);
}