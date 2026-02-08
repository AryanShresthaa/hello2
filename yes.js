setInterval(() => {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.classList.add("heart");

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 400);