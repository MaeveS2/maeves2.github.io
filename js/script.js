const elem = document.getElementById("amognus");
let size = 10;
let goUp = true;
setInterval(() => {
  if (goUp) {
    size += 5;
  } else {
    size -= 5;
  }
  elem.style.fontSize = size + 'px';
  if (size >= 100) {
    goUp = false
  }

  if (size <= 10) {
    goUp = true;
  }
}, 500)
