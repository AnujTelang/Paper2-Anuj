/**class Box extends BaseClass {

  constructor(x, y, width, height){
    var options = {
      'isStatic':true,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
  } 
    super(x,y,width,height,options);
    this.image = loadImage("sprites/dustbingreen.png");
  }

};*/

class Box{
   constructor(x, y, width, height) {
     var options = {
         'isStatic':true,
       'restitution':0.3,
     'friction':0.5,
          'density':1.2
          
      }
    //  this.garbage1 = loadImage('sprites/dustbingreen.png');
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
     // image(this.garbage1,200,20);
      var pos =this.body.position;
      var angle=this.body.angle;
    push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      //fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };