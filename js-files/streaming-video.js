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
        // console.log(response);
        // console.log(response.results.length);
        var arrayNum=(response.results.length);
        // console.log(arrayNum);

        $("#oneshow").empty();

    for (var i = 0; i < arrayNum; i++) {
        var serviceName = (response.results[i].locations[0].display_name);
        var serviceURL = (response.results[i].locations[0].url);
        var lineBreak = document.createElement("br");
        
        var newLink = $("<a />", {
            name: serviceName,
            href: serviceURL,
            text: serviceName + " ",
        });
        // p1.text(serviceName + serviceURL);
        $("#oneshow").append(newLink, lineBreak);
    }
    });
};

function doSearch() {
    var searchTerm = $("#searchShow").val();
    // console.log(searchTerm);
    var newSettings = buildApicall(searchTerm);
    userSearch(newSettings);
}

