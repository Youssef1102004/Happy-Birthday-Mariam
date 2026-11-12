
/*const button = document.getElementById("surpriseBtn");
const letter = document.getElementById("letter");

button.addEventListener("click", function() {
  letter.classList.remove("hidden");

  button.textContent = "A little more love ♡";

  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("span");

    heart.className = "sparkle";
    heart.textContent = ["♡", "✦", "♥", "✨"][
      Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = (50 + Math.random() * 40) + "vh";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
});*/


const button = document.getElementById("surpriseBtn");
const letter = document.getElementById("letter");

// Create floating hearts
function createHeart() {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (7 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 13000);
}

// Keep creating hearts continuously
setInterval(createHeart, 650);

// Open birthday surprise
button.addEventListener("click", function() {
    letter.classList.remove("hidden");

    button.textContent = "A little more love ♡";

    // Extra hearts when clicked
    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 100);
    }
});

