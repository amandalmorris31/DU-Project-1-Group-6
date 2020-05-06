// Declare variables
console.log("file runs");
var apiKey = "1";
var query = "margarita";
var drinksArray = JSON.parse(localStorage.getItem("drinks"));

// If there's nothing in your drinksArray, create an empty array
if (!Array.isArray(drinksArray)) {
  //if we have no input
  drinksArray = [];
}

var drinkname = "margarita";

function searchDrink(drinkname) {
  // event.preventDefault();
  //create your url
  //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
  var drinkURL =
    "https://www.thecocktaildb.com/api/json/v1/" +
    apiKey +
    "/search.php?s=" +
    drinkname;
  console.log(drinkURL);
  //cocktailglass
  //instructions
  //
  //grab value
  //push into array
  // drinksArray.push($("#search").val());
  // console.log(drinksArray);
  // //set the array to local storage
  // localStorage.setItem("drinks", JSON.stringify(drinksArray));
  //call the drinkInfo function
  // fiveday($("#search").val());
  //call the displayDrinkImg function
  // getWeather($("#search").val());
  //call the displayIngredients function
}
searchDrink(drinkname);
