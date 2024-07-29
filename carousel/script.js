let image_link = [
    "https://images.pexels.com/photos/547119/pexels-photo-547119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/06/nature-1686808887.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/beautiful-waterfall-in-forest-in-khuean-royalty-free-image-1576785617.jpg?crop=1xw:1xh;center,top&resize=980:*",
    "https://www.shutterstock.com/image-photo/fantastic-evening-kirkjufell-volcano-coast-600nw-530221900.jpg",
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://i.etsystatic.com/16465191/r/il/91e10b/3425815435/il_570xN.3425815435_jzvu.jpg",
    "https://i.etsystatic.com/16465191/r/il/91e10b/3425815435/il_570xN.3425815435_jzvu.jpg"
]

let a=0;

let btn1=document.querySelector("#prev");
let btn2=document.querySelector("#next");

btn1.addEventListener("click",d1)
btn2.addEventListener("click",d2)

document.querySelector("#image").innerHTML=`<img src="${image_link[a]}" alt="${image_link[a]}">`

function d1(){
     if(a>0)
     {
        a--;
     }
     else{
        a=image_link.length-1;
     }
      document.querySelector("#image").innerHTML=`<img src="${image_link[a]}" alt="${image_link[a]}">`
}

function d2(){
    if(a<image_link.length-1)
    {
        a++;
    }
    else{
        a=0;
    }

    document.querySelector("#image").innerHTML=`<img src="${image_link[a]}" alt="${image_link[a]}">`
}