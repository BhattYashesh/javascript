let arr=[2, 5, 12, 15, 7, 20];

let data1=arr.filter((element,index)=>
{
    return element>=10;
})

let data2=data1.map((element)=>
{
    return element*element;
})

data2.forEach((element)=>
{
    console.log(element);
})