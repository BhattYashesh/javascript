let arr=[5, 10, 15, 20, 25, 30, 35, 40];

let data = arr.filter((element,index)=>
{
    if(index%2!=0)
    {
        return element;
    }
})

console.log(data);