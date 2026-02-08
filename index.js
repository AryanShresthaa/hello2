const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const messages = [
  "Are you sure? 😏",
  "Nice try 😜",
  "Try again 💗",
  "No escape 😈",
  "Just click YES 💖"
];

let msgIndex = 0;

// Make NO button move only a little
noBtn.addEventListener("mouseover", () => {
  const moveDistance = 80; // 👈 control how far it runs (px)

  let currentX = noBtn.offsetLeft;
  let currentY = noBtn.offsetTop;

  let newX = currentX + (Math.random() * moveDistance * 2 - moveDistance);
  let newY = currentY + (Math.random() * moveDistance * 2 - moveDistance);

  // Keep button inside screen
  newX = Math.max(0, Math.min(window.innerWidth - noBtn.offsetWidth, newX));
  newY = Math.max(0, Math.min(window.innerHeight - noBtn.offsetHeight, newY));

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  noBtn.innerText = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
});

// YES → go to love page 💘
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
