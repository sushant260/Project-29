class Block{
  constructor(x,y,color){
      
      
      this.body = Bodies.rectangle(x,y,30,25,color);
      this.color = color;
      this.width = 30;
      this.height = 25;
      this.Visiblity = 255;
      World.add(world, this.body);

  }

  display(){
      var pos = this.body.position;
      
    
      if(this.body.speed < 5){
          fill(this.color);
          strokeWeight(2);
          rect(pos.x,pos.y,this.width,this.height);
          
      }
      else{
          
          push();
          World.remove(world,this.body);
          this.Visiblity = this.Visiblity-5;
          pop();
      }

    }

}