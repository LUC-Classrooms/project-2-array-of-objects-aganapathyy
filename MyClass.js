/**
 * Add code for your class constructor in this file
 */
// the Name of a constructor class should be capitalized
function MyClass (tempX, tempY){ 
    // this constructor expects two arguments
    // all object properties and methods begin with "this."
    this.x = tempX; // assign 1st argument to this.x 
    this.y = tempY; // assign 2nd argument to this.y
    this.d = 50; // initialize .d property to 50
    this.speed = random(-1, 1); // initialize .speed to a random number between 1 and -1
    this.r = random(0, 255); // set red level
    this.g = random(0, 255); // set green level
    this.b = random(0, 255); // set blue level

    // methods are functions that are assigned to property names
    this.move = function() {
    // define how the object will change location on screen each frame
      this.x += this.speed; // move by the value of .speed
      if (this.x > width || this.x < 0){
      // if the object reaches the right edge OR left edge
        this.speed = this.speed * -1; // reverse polarity!
      }
    }
    this.display = function(){ 
      // define how the object will look
      push();
      translate(this.x, this.y) // center the drawing at the .x and .y properties of the object
      rectMode(CENTER)
      fill(this.r, this.g, this.b,50); //set the color); //green
      rect(0,0,75)//body
      //eyes
      fill(240)//white
      ellipse (-20, -10, 25, 20)//left eyeball
      ellipse (20, -10, 25, 20)//right eyeball
      fill(0) //black
      ellipse (-20, -10, 15, 20)//left iris
      ellipse (20, -10, 15, 20)//right iris
      //shiny
      fill(240)//white
      ellipse (-20,-15,10,10)//left top
      ellipse (-20, -3, 10, 5)//left bottom
      ellipse (20, -15, 10,10)//right top
      ellipse (20, -3, 10, 5) // right bottom
      //face lines
      noFill()
      strokeWeight(2)
      arc(-35,-30,this.d,this.d/2,0, HALF_PI)//left eyebrow
      arc(35,-30,this.d,this.d/2,HALF_PI,PI)// r eyebrow
      strokeWeight(1)
      arc(0,5,this.d/2, this.d/4, PI, TWO_PI)//mouth
      arc(0,8,this.d/4, this.d/6, PI, TWO_PI)//mouth
      // tears
      //noStroke()
      fill(150,180,220)
      ellipse (-33, -2, 11, 5)//left
      ellipse (33, -2, 11, 5)//right
      pop();
    }
  } // end of MyClass() constructor