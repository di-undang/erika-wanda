const container = document.querySelector(".bubble-container");

// Generate 50 bubbles dynamically
for (let i = 0; i < 50; i++) {
     const bubble = document.createElement("div");
     bubble.classList.add("bubble");

     // Randomize size and position
     const size = Math.random() * 30 + 10; // Random size between 10px and 40px
     bubble.style.width = `${size}px`;
     bubble.style.height = `${size}px`;
     bubble.style.left = `${Math.random() * 100}%`; // Random position
     bubble.style.animationDuration = `${Math.random() * 5 + 4}s`; // Random duration
     bubble.style.animationDelay = `${Math.random() * 5}s`; // Random delay

     container.appendChild(bubble);
}
