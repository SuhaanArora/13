class Tree {
constructor (x,y,width,height){
    this.image = loadImage("1234/tree.png");
  }
  display(){
if(this.body.speed<3){
 super.display();

}
else{

  World.remove(world,this.body);
  push();

image(this.image,this.body.position.x,this.body.position.y,50,50);
pop();
}

  }

};

    
