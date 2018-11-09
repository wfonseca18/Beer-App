
// BreweryDB
// Base Endpoint: https://sandbox-api.brewerydb.com/v2/
// API Key: e653cee80fd3616231cceff422090d22
// Input field: #favoriteBeer
// Search Button: #search


var beerDB = [];

// $.get('https://sandbox-api.brewerydb.com/v2/beers?key=e653cee80fd3616231cceff422090d22', function (response) {
//     console.log(response);
// });

// $.ajax({
//     type: "GET",
//     url: 'https://sandbox-api.brewerydb.com/v2/beers?key=e653cee80fd3616231cceff422090d22',
//     xhrFields: {
//       withCredentials: false
//     },
//     crossDomain: true
// })
//     .done(function (response) {
//         console.log(response);
//     })
//     .fail(function (xhr, textStatus, errorThrown) {
//         alert(xhr.responseText);
//         alert(textStatus);
//     });





    $.ajax({
        type: 'GET',
        url: 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html',
      
        // The 'contentType' property sets the 'Content-Type' header.
        // The JQuery default for this property is
        // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
        // a preflight. If you set this value to anything other than
        // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
        // you will trigger a preflight request.
        contentType: 'text/plain',
      
        xhrFields: {
          // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
          // This can be used to set the 'withCredentials' property.
          // Set the value to 'true' if you'd like to pass cookies to the server.
          // If this is enabled, your server must respond with the header
          // 'Access-Control-Allow-Credentials: true'.
          withCredentials: false
        },
      
        headers: {
          // Set any custom headers here.
          // If you set any non-simple headers, your server must include these
          // headers in the 'Access-Control-Allow-Headers' response header.
        },
      
        success: function() {
          // Here's where you handle a successful response.
          console.log('Success');
        },
      
        error: function() {
          // Here's where you handle an error response.
          // Note that if the error was due to a CORS issue,
          // this function will still fire, but there won't be any additional
          // information about the error.
          console.log('Fail');
        }
      });




















