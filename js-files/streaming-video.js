//Declare variables
// query the API

// Begin building an object to contain our API call's query parameters
// Set the API key

// oneShow(term);

// function oneShow(term){
//   //empty out the oneshow area before starting (removes over appending issue)
//   $("#oneshow").empty();

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=breaking%20bad&country=us",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
		"x-rapidapi-key": "9389ffc211msh3e42b8a01417cbep12b111jsn9697ad0ffd24"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    console.log(response.results.length);
	console.log(response.results[0].name);//name of the show title
	
	console.log(response.results[0].locations[0].display_name);//name of first streaming provider
	console.log(response.results[1].locations[0].display_name);//name of second streaming provider
	console.log(response.results[2].locations[0].display_name);//name of third streaming provider
	console.log(response.results[3].locations[0].display_name);//name of fourth streaming provider
	console.log(response.results[4].locations[0].display_name);//name of fifth streaming provider

	console.log(response.results[0].locations[0].url);//first streaming provider's URL of that show
	console.log(response.results[2].locations[0].url);//third streaming provider's URL of that show

});

     //1. Entertainment div that displays from userinput
         
//      <div class="row">  d1
//      <div class="col s12">  d2
//        <div class="card blue-grey darken-1">  d3
//          <div class="card-content white-text">  d4
//            <span class="card-title">Streaming Video Services</span>  span
//              <span id="">
//              <p>
//              Info here!!!!!! 
//              </p>
//              </span>
//          </div>
//        </div>
//      </div>
//    </div>

    // var d1=$("<div>");
    // d1.attr("class","row");
    //  //<div class="row"></div>
    
    // var d2=$("<div>");
    // d2.attr("class","col s12");
    // //<div class="col s12"></div>

    // var d3=$("<div>");
    // d3.attr("class", "card blue-grey darken-1");
    // //<div class="card blue-grey darken-1"></div>

    // var d4=$("<div>");
    // d4.attr("class", "card-content white-text");
    // //<div class="card-content white-text"></div>

    // var span=$("<span>");
    // span.attr("class", "card-title").text("Streaming Video Services");
    // //<span class="card-title">Streaming Video Services</span>

    // var span=$("<span>");
    // span.attr("class","oneshow");

    //B.dynamically create the show/service in front end
//  for (var i = 0; i < 5; i++) {
//     var p=$("<p>");
//     p.attr("class", "service");
//     //<p class="service"></p>
    
//  }  


// var queryURL= "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="+term+"&country="+country+"&api_key="+apiKey;

//grab the info
//grab the specific value
//push in to an array
//showsArray.push($"#search").val())
//set array to local storage
//localstorage.setItem("shows",JSON.stringify(showsArray))
//call shows Info function