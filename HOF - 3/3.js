const numbers = [1, 2, 3];

 function logSquares(a)
 {
     numbers.forEach((element,index)=>
    {
        console.log(element*element);
    })
 }

 logSquares(numbers)