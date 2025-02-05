
const btn = document.querySelector("#btn");

btn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - btn.offsetWidth;  // Max X position
    const maxY = window.innerHeight - btn.offsetHeight; // Max Y position

    const randomX = Math.random() * maxX;  // Random X
    const randomY = Math.random() * maxY;  // Random Y

    btn.style.position = "absolute"; // Ensure it moves properly
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
});