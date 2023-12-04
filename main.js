//anamation intro

// setup canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//global variables'
let rectX = 300;
let rectSize = 80;
let rectBlue = 255;
let rectRed = 0;

let spaceKeyIsPressed = false;

// main program loop 60fps
requestAnimationFrame(loop);

function loop() {
  // update variables

  rectX += 1;
  rectSize += Math.random() * 2 - 1; // -1 to 1
  rectBlue--;
  rectRed++;

  //draw a backround
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  if (spaceKeyIsPressed) {
    // draw a square
    ctx.fillStyle = "rgb(" + rectRed + ", 0," + rectBlue + ")";
    ctx.fillRect(rectX, 150, rectSize, rectSize);
  }

  requestAnimationFrame(loop);
}

// event stuff
document.addEventListener("keydown", KeydownHandler);
document.addEventListener("keyup", KeyupHandler);

function KeydownHandler(event) {
  if (event.code == "Space") {
    spaceKeyIsPressed = true;
  }
}

function KeyupHandler(event) {
  if (event.code == "Space") {
    spaceKeyIsPressed = false;
  }
}
