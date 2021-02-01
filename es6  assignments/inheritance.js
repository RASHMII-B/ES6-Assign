class Honour {
     constructor(price,color){
         this.price = price
         this.color = color

     }
storage(){
   console.log(`storage is good `)
            
}
}

class Honourlite extends Honour {
      constructor(price,color,version,camera){
      super(price,color)
        this.version=version
        this.camera = camera

      }
speed(){
      console.log(`speed is good ${this.price}`)
}
}

let s2 = new Honourlite(20000,'black',8,'13mp');

 
s2.speed();
 
