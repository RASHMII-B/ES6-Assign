class Honour {
     constructor(price,color){
         this.price = price
         this.color = color
      
         console.log(` ${color} `)
     }
storage(){
   console.log(`storage is good `)
            
}
}

class Honourlite  {
      constructor(s1,version){
            this.s1=s1;
            this.version=version
      
      }
speed(){
      console.log(`speed is good ${this.s1.price} and ${this.version}`)
}
}

      let s1 = new Honour(10000,'red');
   let s2 = new Honourlite(s1,'9');
   s2.speed();
 
