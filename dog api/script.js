document.getElementById("dog").addEventListener("click",check)

function check(){
    fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
            document.querySelector("img").src = res.message;
        })
        .catch((err) => {
            console.log(err)
        });
    
    }
   check()