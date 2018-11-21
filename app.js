$(document).ready(function () {


  //dynamic array of contents in favorite beer list array -- also on index.js
  // DYNAMICALLY CREATE BUTTONS that are the beer name plate and match the favorite product products 
  //-button press to increment favorite score in array


 






  const render = function () {

// insert the favorite beers array sort function to we reorder the array with highest score first - 
    beerList.sort(function(a, b){
    return b.score-a.score
    })


 // Load the Visualization API and the corechart package.
 google.charts.load('current', { 'packages': ['corechart'] });

 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(drawChart);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function drawChart() {

   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Beer');
   data.addColumn('number', 'Liked');

   for (let i = 0; i < 10; i++) {
     data.addRows([
       [beerList[i].name + ' ', beerList[i].score]
     ]);
   }

   // Set chart options
   var options = {
     'title': 'Most Liked Beers',
     'width': '100%',
     'height': 'auto'
   };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 }

    //clear beerButtons ID=favorites to prevent duplicates and then reload buttons after each new addition to beerList array
    $('#favorites').empty();
    // Create a for-loop to iterate through the letters array.
    for (let i = 0; i < beerList.length; i++) {

      $('#favorites').append(`<button id="button-${i}" type="button" class="beer-button beer-name btn btn-outline-warning">${beerList[i].name}</button>`)

      $(`#button-${i}`).on('click', function () {
        let html = '<div class="card">';
        html += '<div class="card-header">';
        html += `<h3>${beerList[i].name}</h3>`;
        html += '</div>';
        html += '<div class="card-body">';
        html += `<p>Type: ${beerList[i].type}<br>`;
        html += `ABV: ${beerList[i].abv}%<br>`;
        html += `Brewery: ${beerList[i].brewery}<br>`;
        html += '</p>';
        html += '</div>';
        html += '</div>'

        $('#beer-display').html(html);

        // Increment beer score by 1
        beerList[i].score++;
        render();
      });

    }
  }

  render();

  // //  ATTACH ON-CLICK EVENTS TO "favorites" BUTTONS

  // const incrementScore = function() {

  //   // Inside the on-click event...  to increment the "score" for that particular beer

  //   let beerName = '';

  //   // 10. Then chain the following code onto the "task" variable: .text($(this).attr("data-beer"))

  //   beerName = $(this).attr("beer-name");

  // if (beerList.includes(beerName)) {
  //   // increment beer name in beerList array to (score+1)--- to be built**********************************************to be built

  //     }

  // }

  // // Create an "on-click" event attached to the ".beer-button" class to push incremental score up by one when pressed.
  // $('#inventory').on('click', '.beer-button', incrementScore);









  //the two sections below -- add button, and beerInfo compressed into single process and function -- including duplicate check

  const beerInfo = function () {


    const beerName = $('#beerInput').val().trim(); // grab beer from input field and assign to variable beerName
    console.log(beerName);
    const clientID = '57E8159A820EF24D970F8FF3DA35FA786E6CD22B'  //untapped client ID
    const clientSecret = '5DA2FE5752A0B5BF39DC21A323EF78AC587B57BD'  //untapped API key
    const testURL = `https://api.untappd.com/v4/search/beer?q=${beerName}&sort=name&client_id=${clientID}&client_secret=${clientSecret}`
    //const testURL = `https://api.untappd.com/v4/beer/info?BID=3942&sort=name&client_id=${clientID}&client_secret=${clientSecret}`
    $.ajax({
      url: testURL,
      method: 'GET'
    }).then(function (response3) {
    // temp array holding the favorite array list as a single dimension array of only the string names - and all in lower case so we can
    // compare the new entry in lower case with the array content looking for duplicates - without altering the array and its original 
    // case on name the indludes comparison JQuery does string comparisons -- returing tru/false, but without the temp array we are  
    // comparing string to object which is always false
      const tempBeerArray = beerList.map(function(beer) {
        return beer.name.toLowerCase();
      });
      console.log(response3);
      const beerABV = response3.response.beers.items[0].beer.beer_abv;
      console.log(beerABV);
      const breweryName = response3.response.beers.items[0].brewery.brewery_name;
      console.log(breweryName);
      const beerType = response3.response.beers.items[0].beer.beer_style;
      console.log(beerType);
      // if the beer is in the array, then do not push new entry. (duplicate check)

      if (!tempBeerArray.includes(beerName.toLowerCase())) {
        beerList.push({name: beerName, type: beerType, brewery: breweryName, abv: beerABV, score: 1});
      }     
      console.log(beerList);
      render();
    })
  }

  $('#submit').on('click', beerInfo);

  //   // This function handles events where add a beer button is clicked (submit) -- this portion is only to generate the new button and add it to available list

  //   // This line will grab the text from the input box and trim off any white space
  //   const beerInput = $('#beerInput').val().trim();

  //   // event.preventDefault() prevents the form from trying to submit itself.
  //   // Using a form so that the user can hit enter instead of clicking the button if they want
  //   // event.preventDefault();

  //   // The beer from the textbox is then added to our array
  //   beerList.push(beerInput);////// push additional data form API calls to beerList array*************************to be built

  //   // Deletes the contents of the input field
  //   $('#beerInput').val('');


  //   // The beer from the textbox is then added to our array
  //   beerList.push(beerInput);////// push additional data form API calls to beerList array*************************to be built

  //   // Deletes the contents of the input field
  //   $('#beerInput').val('');

  //   // calling renders which handles the processing of our beerList array and regenerates beer buttons
  //   render();
});









// BeerDB

// BreweryDB
// Base Endpoint: https://sandbox-api.brewerydb.com/v2/
// API Key: e653cee80fd3616231cceff422090d22
// Input field: #favoriteBeer
// Search Button: #search


// var beerDB = [];

// $.get('https://sandbox-api.brewerydb.com/v2/beers?key=e653cee80fd3616231cceff422090d22', function (response) {
//   console.log(response);
// });

// $.ajax({
//   type: "GET",
//   url: 'https://sandbox-api.brewerydb.com/v2/beers?key=e653cee80fd3616231cceff422090d22',
//   // xhrFields: {
//   //   withCredentials: false
//   // },
//   crossDomain: true
// })
//   .done(function (response) {
//     console.log(response);
//   })
//   .fail(function (xhr, textStatus, errorThrown) {
//     console.log(xhr.responseText);
//     console.log(textStatus);
//   });


    // $.ajax({
    //     type: 'GET',
    //     url: 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html',

    //     // The 'contentType' property sets the 'Content-Type' header.
    //     // The JQuery default for this property is
    //     // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
    //     // a preflight. If you set this value to anything other than
    //     // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
    //     // you will trigger a preflight request.
    //     contentType: 'text/plain',

    //     xhrFields: {
    //       // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
    //       // This can be used to set the 'withCredentials' property.
    //       // Set the value to 'true' if you'd like to pass cookies to the server.
    //       // If this is enabled, your server must respond with the header
    //       // 'Access-Control-Allow-Credentials: true'.
    //       withCredentials: false
    //     },

    //     headers: {
    //       // Set any custom headers here.
    //       // If you set any non-simple headers, your server must include these
    //       // headers in the 'Access-Control-Allow-Headers' response header.
    //     },

    //     success: function() {
    //       // Here's where you handle a successful response.
    //       console.log('Success');
    //     },

    //     error: function() {
    //       // Here's where you handle an error response.
    //       // Note that if the error was due to a CORS issue,
    //       // this function will still fire, but there won't be any additional
    //       // information about the error.
    //       console.log('Fail');
    //     }
    //   });



