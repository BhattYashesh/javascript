const numbers =[2,3,4] 
   
   function doubleAndAddIndex(a){

 
     {
      let data= numbers.map((element,index)=>
     {
    return element * 2 + index
    }) 

      console.log(data);
    }
   }
   doubleAndAddIndex(numbers)
