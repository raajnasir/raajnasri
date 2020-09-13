function istouching(obj1,obj2){
     if((obj1.width/2+obj2.width/2 > obj1.x-obj2.x )&&
    (obj1.width/2+obj2.width/2 > obj2.x-obj1.x )&&
    (obj1.height/2+obj2.height/2 > obj1.y-obj2.y )&&
    (obj1.height/2+obj2.height/2 > obj2.y-obj1.y ))
     {obj1.shapeColor = "blue";
    obj2.shapeColor = "blue"; 
      }
    
      else{
      obj1.shapeColor = "red";
      obj2.shapeColor = "green"; 
    }
  }
