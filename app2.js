
const cityinput=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const img=document.querySelector(".image");
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=bd6ffa33e473ad075787701752ff2bc0&q=";

async function weather(city)
{
const resp=await fetch(url+city);
if(resp.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".card2").style.display="none";
        document.body.style.backgroundImage="none";
    }
    else{
var data =await resp.json();
document.querySelector(".location").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".description").innerHTML=data.weather[0].description;
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=Math.round(data.wind.speed)+" km/h";
if(data.weather[0].main=="Clear")
{
img.src="./images/clear.png";
}
else if(data.weather[0].main=="Haze")
{
img.src="./images/haze.png";
}
else if(data.weather[0].main=="Clouds")
{
img.src="./images/clouds.png";
}
else if(data.weather[0].main=="Drizzle")
{
img.src="./images/drizzle.png";
}
else if(data.weather[0].main=="Mist")
{
img.src="./images/mist.png";
}
else if(data.weather[0].main=="Rain")
{
img.src="./images/rain.png";
}
else if(data.weather[0].main=="Snow")
{
img.src="./images/snow.png";
}
   document.querySelector(".card2").style.display="block";
   document.querySelector(".error").style.display="none";
   document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" +city+"')";
}
}
btn.addEventListener("click",()=>{
    weather(cityinput.value);
    
});