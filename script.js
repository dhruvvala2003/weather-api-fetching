
const basic_url="https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=1564b65866b67420c14220c39b6379f9&units=metric";
let url="";
const btn=document.getElementById("btnn");
const city=document.querySelector(".search input");
const tmp=document.getElementById("tmp");
const city_org=document.getElementById("cityy");
const humadity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const imgg=document.querySelector(".weather img");

    const updateData=(data)=>{

        tmp.innerText=data.main.temp +"°c";
        city_org.innerText=city.value.toUpperCase();
        humadity.innerText=data.main.humidity+"%";
        wind.innerText=data.wind.speed+" KM/H";

        if(data.weather[0].main=="Clouds")
        {
           imgg.src="clouds.png";
        }
        else if(data.weather[0].main=="Clear")
        {
            imgg.src="clear.png";

        }
        else if(data.weather[0].main=="Rain")
        {
            imgg.src="rain.png";

        }
        else if(data.weather[0].main=="Drizzle")
        {
            imgg.src="drizzle.png";
        }
        else if(data.weather[0].main=="Mist")
        {
            imgg.src="mist.png";

        }

        //  showinging display ...

        document.querySelector(".weather").style.visibility= "visible";
        document.querySelector(".details").style.visibility= "visible";
    }

btn.addEventListener("click",async()=>{
    // console.log(city.value);
    url=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=1564b65866b67420c14220c39b6379f9&units=metric`;

    const response=await fetch(url);
    const data=await response.json();
    
    updateData(data);
});