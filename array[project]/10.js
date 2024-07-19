let str=["apple", "banana", "pear"];

 let data=str.filter((element,index)=>
{
    if(element.length>=2)
    {
        return element;
    }
})
console.log(data);