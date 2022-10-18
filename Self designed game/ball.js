class Ball {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.ball_image = loadImage("basketball.png");
         }

    display() {
      
       
  
      push();
      translate(this.x, this.y);
      imageMode(CENTER);
      image(this.ball_image, 0, 0, this.width, this.height);
      pop();
      
    }
  }