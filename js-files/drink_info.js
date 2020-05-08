$("document").ready(function () {
  // variables
  var apiKey = "1";

  var masterDrinkArray = [];

  var userValue = $("#search").val();
  console.log(userValue);

  // var drink = userValue

  // functions
  //searchDrink("margarita");
  function searchDrink(drink) {
    console.log(drink);
    var ingredients = [];
    var meaurements = [];

    var queryURL =
      "https://www.thecocktaildb.com/api/json/v1/" +
      apiKey +
      "/search.php?s=" +
      drink;
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log("this is the response from ajax", response);
      // console.log(response.drinks[0].strInstructions);
      for (var i = 0; i < response.drinks.length; i++) {
        ingredients = [];
        measurements = [];
        // if conditional statements for ingredients
        console.log(response.drinks[i].strIngredient1);
        if (response.drinks[i].strIngredient1 != null) {
          ingredients.push(response.drinks[i].strIngredient1);
        }
        if (response.drinks[i].strIngredient2 != null) {
          ingredients.push(response.drinks[i].strIngredient2);
        }
        if (response.drinks[i].strIngredient3 != null) {
          ingredients.push(response.drinks[i].strIngredient3);
        }
        if (response.drinks[i].strIngredient4 != null) {
          ingredients.push(response.drinks[i].strIngredient4);
        }
        if (response.drinks[i].strIngredient5 != null) {
          ingredients.push(response.drinks[i].strIngredient5);
        }
        if (response.drinks[i].strIngredient6 != null) {
          ingredients.push(response.drinks[i].strIngredient6);
        }
        if (response.drinks[i].strIngredient7 != null) {
          ingredients.push(response.drinks[i].strIngredient7);
        }
        if (response.drinks[i].strIngredient8 != null) {
          ingredients.push(response.drinks[i].strIngredient8);
        }
        if (response.drinks[i].strIngredient9 != null) {
          ingredients.push(response.drinks[i].strIngredient9);
        }
        if (response.drinks[i].strIngredient10 != null) {
          ingredients.push(response.drinks[i].strIngredient10);
        }
        if (response.drinks[i].strIngredient11 != null) {
          ingredients.push(response.drinks[i].strIngredient11);
        }
        if (response.drinks[i].strIngredient12 != null) {
          ingredients.push(response.drinks[i].strIngredient12);
        }
        if (response.drinks[i].strIngredient13 != null) {
          ingredients.push(response.drinks[i].strIngredient13);
        }
        if (response.drinks[i].strIngredient14 != null) {
          ingredients.push(response.drinks[i].strIngredient14);
        }
        if (response.drinks[i].strIngredient15 != null) {
          ingredients.push(response.drinks[i].strIngredient15);
        }
        // console.log(ingredients);

        // if conditional statements for measurements of ingredients needed
        console.log(response.drinks[0].strMeasure1);
        if (response.drinks[i].strMeasure1 != null) {
          measurements.push(response.drinks[i].strMeasure1);
        }
        if (response.drinks[i].strMeasure2 != null) {
          measurements.push(response.drinks[i].strMeasure2);
        }
        if (response.drinks[i].strMeasure3 != null) {
          measurements.push(response.drinks[i].strMeasure3);
        }
        if (response.drinks[i].strMeasure4 != null) {
          measurements.push(response.drinks[i].strMeasure4);
        }
        if (response.drinks[i].strMeasure5 != null) {
          measurements.push(response.drinks[i].strMeasure5);
        }
        if (response.drinks[i].strMeasure6 != null) {
          measurements.push(response.drinks[i].strMeasure6);
        }
        if (response.drinks[i].strMeasure7 != null) {
          measurements.push(response.drinks[i].strMeasure7);
        }
        if (response.drinks[i].strMeasure8 != null) {
          measurements.push(response.drinks[i].strMeasure8);
        }
        if (response.drinks[i].strMeasure9 != null) {
          measurements.push(response.drinks[i].strMeasure9);
        }
        if (response.drinks[i].strMeasure10 != null) {
          measurements.push(response.drinks[i].strMeasure10);
        }
        if (response.drinks[i].strMeasure11 != null) {
          measurements.push(response.drinks[i].strMeasure11);
        }
        if (response.drinks[i].strMeasure12 != null) {
          measurements.push(response.drinks[i].strMeasure12);
        }
        if (response.drinks[i].strMeasure13 != null) {
          measurements.push(response.drinks[i].strMeasure13);
        }
        if (response.drinks[i].strMeasure14 != null) {
          measurements.push(response.drinks[i].strMeasure14);
        }
        if (response.drinks[i].strMeasure15 != null) {
          measurements.push(response.drinks[i].strMeasure15);
        }
        // console.log(measurements);
        // get recipe (instructions) from the api
        // var instructions = response.drinks[i].strInstructions;
        // recipe.push(response.drinks[i].strInstructions);
        // console.log(instructions);
        // empty object that will contain the arrays we are pushing the values to
        var currentDrink = {};
        currentDrink.name = response.drinks[i].strDrink;
        currentDrink.ingredients = ingredients;
        currentDrink.measurements = measurements;
        currentDrink.recipe = response.drinks[i].strInstructions;
        masterDrinkArray.push(currentDrink);

        // console.log(masterDrinkArray[0].ingredients[0]);
      }
      console.log("ingred", ingredients);
      console.log("measure", measurements);
      for (i = 0; i < ingredients.length; i++) {
        console.log("you need: ", ingredients[i] + " + " + measurements[i]);
      }
      masterDrinkArray = [];
      console.log(masterDrinkArray);
    });
  }

  // drink image fx
  // function getDrinkImage(userValue) {
  //   // create api call url

  //   var drinkQueryUrl = "";

  //   $.ajax({
  //     url: ,
  //     method: 'GET',
  //   }).then(function(renderImage) {

  //   })
  // }

  // event handlers
  $("#searchdrink").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    var search = $("#search").val();
    console.log(search);
    // call searchDrink function passing userValue through it
    searchDrink(search);

    // call the renderDrinkImage fx passing userValue through it
  });
});
