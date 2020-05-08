




//THIS IS PROJECT ONE ENTERTAINMENT!!!!!

//code
//need to get the data of user input (city)

var city="Denver";

var apiKey="9389ffc211msh3e42b8a01417cbep12b111jsn9697ad0ffd24";
var lon;
var lat;


oneDay(city);

function oneDay(city){
    //1. div that displays today's weather of city from userinput with current data at top (temp, humidity, wind, and UV index) 

var queryURL= "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
//"api.openweathermap.org/data/2.5/weather?q={city name}&appid={5bf8eae819934207415529c4c325451c}";
console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      
    //A. get the data (console.log it) 
    console.log(response);
       
    // (temp, 
    console.log(response.main.temp)
    var tempNum=(((response.main.temp-273.15)*1.8)+32);
    console.log("Temperature: "+tempNum.toFixed(2)+" \u00B0"+"F");
    //https://www.w3schools.com/howto/howto_js_temperature_converter.asp

    var todayTemp="Temperature: "+tempNum.toFixed(2)+" \u00B0"+"F";
    console.log(todayTemp);

    //humidity,
     console.log(response.main.humidity)
    var humidity="Humidity: "+response.main.humidity+"%";
    console.log(humidity);

    //wind speed, and 
    console.log(response.wind.speed)
    var windSpeed="Wind Speed: "+response.wind.speed+" MPH";
    console.log(windSpeed);

    //UV index
        //lon and lat
        console.log(response.coord.lon)
        lon=response.coord.lon;
        console.log(response.coord.lat)
        lat=response.coord.lat;
        var uvURL= "http://api.openweathermap.org/data/2.5/uvi?appid="+apiKey+"&lat="+lat+"&lon="+lon;
        //http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}
        console.log(uvURL);
        
    $.ajax({
        url: uvURL,
        method: "GET"
      }).then(function(uvobj) {
        console.log(uvobj);
        console.log(uvobj.value);

      var uvIndex="UV Index: "+(uvobj.value);
      console.log(uvIndex);
          //B.dynamically create the city in front end
  
      });
        //B.dynamically create the city in front end

  });


}



//---------------------------------------
// FIVE day function

// console.log(city);
// console.log(apiKey)

var lon;
var lat;

fiveDay(city);

function fiveDay(city){
    //1. div that displays 5 day forecast of city from userinput with data  (date, icon, temp, humidity) 

var queryURL= "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+apiKey;
//"api.openweathermap.org/data/2.5/forecast?q={city name}&appid={5bf8eae819934207415529c4c325451c}";
console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      
    //A. get the data (console.log it) 
    console.log(response);
    // console.log(response.city.name);
    console.log(response.list[0].main.temp);
    console.log(response.list[0].main.humidity);