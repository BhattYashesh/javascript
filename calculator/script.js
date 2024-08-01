let button = document.querySelectorAll("button");
let str=""
let heading=document.querySelector("#value")
button.forEach((el)=>
{
    el.addEventListener("click",()=>
    {
        if(el.value != "=" && el.value != "c")
        {
            str+=el.value;
            heading.innerHTML=str
        }
        else if(el.value == "=")
        {
            heading.innerHTML=eval(str)
            str=""
        }
        else if(el.value == "c")
        {
            heading.innerHTML=""
        }
    })
})

