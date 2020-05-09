//Declare variables
// query the API

// Begin building an object to contain our API call's query parameters
// Set the API key

function buildApicall(searchTerm) {
    var baseUrl = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="
    var newUrl = baseUrl + encodeURI(searchTerm) + "&country=us";
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": newUrl,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "9389ffc211msh3e42b8a01417cbep12b111jsn9697ad0ffd24"
        }
    }

    return settings;
}

var defaultSettings = buildApicall("breaking bad");

userSearch(defaultSettings);
function userSearch(settings) {
    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(response.results.length);
        var arrayNum = (response.results.length);
        console.log(arrayNum);

        $("#oneshow").empty();

        for (var i = 0; i < arrayNum; i++) {
            var serviceName = (response.results[i].locations[0].display_name);
            var p1 = $("<p>");
            p1.text(serviceName);

            $("#oneshow").append(p1);
        }
        // console.log(serviceName);

        for (var i = 0; i < arrayNum; i++) {
            var serviceURL = (response.results[i].locations[0].url);
            var p2 = $("<p>");
            p2.text(serviceURL);

            var a = $("<a>");

            $("#oneshow").append(p2);
        }
    });
};

function doSearch() {
    var searchTerm = $("#searchShow").val();
    console.log(searchTerm);
    var newSettings = buildApicall(searchTerm);
    userSearch(newSettings);
}

	// console.log(response.results[0].locations[0].url);//first streaming provider's URL of that show

	// console.log(response.results[0].name);//name of the show title
    //console.log(response.results[0].locations[0].display_name);//name of first streaming provider
	// console.log(response.results[1].locations[0].display_name);//name of second streaming provider
	// console.log(response.results[2].locations[0].display_name);//name of third streaming provider
	// console.log(response.results[3].locations[0].display_name);//name of fourth streaming provider
	// console.log(response.results[4].locations[0].display_name);//name of fifth streaming provider
    // console.log(response.results[2].locations[0].url);//third streaming provider's URL of that show


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

    // var span=$("<span>");
    // span.attr("class", "card-title").text("Streaming Video Services");

    // var span=$("<span>");
    // span.attr("class","oneshow");