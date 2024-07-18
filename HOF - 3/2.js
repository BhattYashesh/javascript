const numbers = [1, 2, 3, 4, 5, 6];

 function filterEvenNumbers(a)
 {
    let data= numbers.filter((element,index)=>
    {
        if(element%2==0)
        {
            return element;
        }
    })
    return data;    
 }

 console.log(filterEvenNumbers(numbers));