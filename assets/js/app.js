$(document).ready(function () {


  // initial render process to layout and populate main app page

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
     'title': 'Most Liked Beers - Add your favorite',
     'width': '100%',
     'height': '325'
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


  //the two sections below -- add button, and beerInfo compressed into single process and function -- including duplicate check

  const beerInfo = function () {

    const beerName = $('#beerInput').val().trim(); // grab beer from input field and assign to variable beerName
    
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
     
      const beerABV = response3.response.beers.items[0].beer.beer_abv;
      
      const breweryName = response3.response.beers.items[0].brewery.brewery_name;
     
      const beerType = response3.response.beers.items[0].beer.beer_style;
    
      // if the beer is in the array, then do not push new entry. (duplicate check)

      if (!tempBeerArray.includes(beerName.toLowerCase())) {
        beerList.push({name: beerName, type: beerType, brewery: breweryName, abv: beerABV, score: 1});
      }     
    
      render();
    })
  }

  $('#submit').on('click', beerInfo);


});











