type Circle =  {
 shape : "circle";
 radius : number;
}

type Rectangle =  {
    shape : "rectangle";
    width : number;
    height : number;
   }
   type shape = Circle| Rectangle;

   function calculateShapeArea(shape:shape){
    
    if(shape.shape==="circle"){
        return (Math.PI*shape.radius*shape.radius).toFixed(2);
    }
    else if(shape.shape==="rectangle"){
        return shape.width*shape.height;
    }
   }
