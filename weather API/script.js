document.querySelector("button").addEventListener("click", ()=>{

     let any = document.getElementById("city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${any}&appid=7ed4af725be7a78b3b8836d6eb267a4c&units=metric`)
    .then((res)=>{
        return res.json();
     })
     .then((res)=>{
        console.log(res)
      //   document.querySelector(".main").innerHTML= `<img src=""> 
      //   <span style="">${res.main.temp}</span` 

      let d = new Date();
      let day = d.getDay();
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let h = d.getHours();
      let m = d.getMinutes();

        document.querySelector(".container").innerHTML = `
        <div class="row align-items-center justify-content-between">
            <div class="col-md-4 text-center">
                <div class="d-flex align-items-center">
                    <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" alt="Partly Cloudy" class="weather-icon">
                    <span class="temp-display ml-3" id="temp">${res.main.temp}</span>
                    <span class="unit">°C</span>
                </div>
                <p class="small">Humidity: ${res.main.humidity}% <br> Wind: ${res.wind.speed} km/h</p>
            </div>
            <div class="col-md-4 text-right">
                <p class="weather-time">${days[day]}, ${h}:${m} pm</p>
                <p class="weather-status">${res.weather[0].description}</p>
            </div>
        </div>`
     }) 
     .catch((err)=>{
        console.log(err);
        })
})

