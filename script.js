for (let i = 0; i < 300; i++) {
  const span = document.createElement("span");
  span.style.width = 0.2 + Math.random() * 5 + "px";
  span.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  span.style.animationDelay = Math.random() * -20 + "s";
  span.style.animationDuration = 2 + Math.random() * 10 + "s";
  document.querySelector("body > div").appendChild(span);
}
