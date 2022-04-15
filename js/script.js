const elem = document.getElementById("mouse");
let size = 10;
let goUp = true;
let movingRight = true;
let movingDown = true;
let x = 0;
let y = 0
let deg = 0;
let moveAmount = 10;
console.log(elem)

setInterval(() => {
  if(goUp) {
    size += 5;
  } else {
  	size -= 5;
  }
	elem.style.fontSize = size + 'px';
  if(size >= 100) {
   goUp = false
  }
  
  if(size <= 10) {
   goUp = true;
  }
}, 500)



const updateHandler = () => {
    if (movingRight) {
        elem.style.left = (x += moveAmount) + 'px';
    } else {
        elem.style.left = (x -= moveAmount) + 'px';
    }

    if (movingDown) {
        elem.style.top = (y += moveAmount) + 'px';
    } else {
        elem.style.top = (y -= moveAmount) + 'px';
    }

    if (x >= window.innerWidth - elem.offsetWidth || x <= 0) {
        movingRight = !movingRight;
    }

    if (y >= window.innerHeight - elem.offsetHeight || y <= 0) {
        movingDown = !movingDown;
    }

    elem.style.transform = `rotate(${(deg += 5)}deg)`;
    if (deg === 360) {
        deg = 0;
    }
}

setInterval(updateHandler, 500);
