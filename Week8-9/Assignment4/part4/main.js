

/* Java Assignment - part 4 - 

A background for the page is created with a constant name canvas. 
A constant named ctx is created in order to give 
the background its character with dimensions.
The width and height are constants set to fit within 
the window inner margin limits. */


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// The function to make a random amount of 2d balls every time the page is opened. 

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// To function to give each of the balls a random colour to start with. 

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

/* A class is created for the balls giving them the basis for becoming moving animations of balls as we desire later. 
This together with the 'extends Shape' class says that each ball is made of these properties, each of which are empty of value yet. 
Splitting up what the properties will be of a ball like this is just a basic demonstration of how one class object can be a necessary addition/adjustment to another
'This.exists = true' is programmed so that later this condition is repeatedly checked with the presence of the 'evilCircle'.*/

class Shape {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

class Ball extends Shape {
  constructor(x, y, velX, velY, color, size) {
   super(x, y, velX, velY);
    this.color = color;
    this.size = size;
    this.exists = true;
  }
// The built-in function 'draw' is added to the 'Ball' class for the balls to take shape. 
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}
// This function determines whether the ball is moving logically based on the canvas borders. The balls direction is a part of velocity represented by 
// 'this.velX' and 'this.velY'. Once it is within the borders, the ball can begin enabled to move from 0 and up with '...<=0'
//  (the condition that it is more than or equal to zero). 
update() {
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

// As the desired program is to include changing of a balls colour on impact with other balls, a function 
// called 'collisionDetect' is added on the condition that the ball exists.    
  collisionDetect() {

    for (const ball of balls) {
      if (!(this === ball) && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }

}

// The evilCircle adds itself to the Shape class background. It is given 'EventListener' so that it can be moved with the 'WSAD' keys in their directions.

class evilCircle extends Shape {
  constructor(x,y) {
    super(x,y,20,20);
    this.color = "white";
    this.size = 10;

  window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      this.x -= this.velX;
      break;
    case "d":
      this.x += this.velX;
      break;
    case "w":
      this.y -= this.velY;
      break;
    case "s":
      this.y += this.velY;
      break;
  }
  });

// Draw function for the 'evilCircle' to take shape. 
  draw() 
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke(); 
    ctx.lineWidth = 3;
  }

// Again the same as update but for the 'evilCircle', in order for it to be somewhere within the canvas. 
secureLimits() { 
if (this.x + this.size >= width) {
  this.x -= this.size;
}

if (this.x - this.size <= 0) {
  this.x += this.size;
}
if (this.y + this.size >= height) {
  this.y -= this.size;
}
if (this.y - this.size <= 0 ) {
  this.y += this.size; 
}

}
// The evilCircle is given its own collision detector function as a ball is erased upon impact with it, and the ball count operation takes place consequently. 
collisionDetect() {
  for (const ball of balls) {
    if (ball.exists) {
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx*dx + dy*dy);

    if (distance < this.size + ball.size) {
      ball.exists = false; 
      count--; 
      para.textContent = 'Ball count: ' + count;
    }
    }
  }
}
}

//A list must be created to neatly make a generator of balls that makes a random amount of them every time the program is started. 
const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
  count++;
  para.textContent = 'Ball count: ' + count;
}

const evilBall = new evilCircle(random (0, width), random(0, height));

// This function cycles through the status of balls and the 'evilCircle' renamed 'evilBall' individually,
// until the conditions of the functions it checks are no longer true. 
// Completing the bouncing balls program. 
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
   if (ball.exists) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  } 
} 

  evilBall.draw();
  evilBall.secureLimits();
  evilBall.collisionDetect(); 

  // This must be called for animations to be referenced. 
  requestAnimationFrame(loop);
}

// This must be typed in at the end for the loop to work. 
loop();

