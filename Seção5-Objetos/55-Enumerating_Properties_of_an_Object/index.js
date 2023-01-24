 const circulo = {
   radius: 1,
   draw() {
      console.log('draw');
   }
 };


 for (let key in circulo) 
 console.log(key, circulo[key]);


 for(let key of circulo) {//Só pode ser utilizado em Arrays e Maps
   console.log(key);
   }

   for(let key of Object.keys(circulo)) { 
   }

   for(let entry of Object.entry(circulo)) { 
      console.log(entry);
   }

   if('radius' in circle) console.log('yes');

