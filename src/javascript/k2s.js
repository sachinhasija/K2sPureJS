window.onload = () => {
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`section[data-key='${e.keyCode}']`);

    if (!audio) return;
    key.classList.add("key-pressed");
    audio.currentTime = 0;
    audio.play();
  }
  window.addEventListener("keydown", playSound);
  const keys = document.querySelectorAll(".key");
  function endTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("key-pressed");
  }
  keys.forEach(key => {
    key.addEventListener("transitionend", endTransition);
  });
};
