let arr=[1,2,3,4,5];

let data=arr.filter((element,index)=>
{
    if(element%2==0)
    {
        return element;
    }
})
console.log(data);