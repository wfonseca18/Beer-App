$(document).ready(function() {
  

console.log(beerList);
  //dynamic array of contents in favorite beer list array -- also on index.js
  // DYNAMICALLY CREATE BUTTONS that are the beer name plate and match the favorite product products 
  //-button press to increment favorite score in array

  const render = function() {
  //clear beerButtons ID=favorites to prevent duplicates and then reload buttons after each new addition to beerList array
    $('#favorites').empty();
    // Create a for-loop to iterate through the letters array.
    for( let i = 0; i < beerList.length; i++ ) {
console.log('one');
      //Create a variable named "beerBtn" equal to $("<button>");
      const beerBtn = $('<button>');

      //Then give each "beerBtn" the following classes: "beer-button" "beer" "beer-button-color" "brewery, ABV, and score".
      beerBtn.addClass('beer-button beer beer-button-color brewery abv score');

      //Then give each "beerBtn" an attribute called "beer-name", and "beer-type" with a value eqaual to "beerList[i] array"
      beerBtn.attr('beer-name', beerList[i].name);
      beerBtn.attr('beer-type', beerList[i].type);

      //Then give each "beerBtn" a text equal to "beertList[i]" - this is what is listed on the button face.
      beerBtn.text(beerList[i].name);
console.log('AAAA');
      //Append each "beerBtn" to the "#favorites" div ( to be provided) and these buttons increment favorites score in array.
      $('#favorites').append(beerBtn);
     
    }
  }
  console.log('call render next');
  render();

  //  ATTACH ON-CLICK EVENTS TO "favorites" BUTTONS
  
  const incrementScore = function() {
    
    // Inside the on-click event...  to increment the "score" for that particular beer
   
    let beerName = '';
    
    // 10. Then chain the following code onto the "task" variable: .text($(this).attr("data-beer"))
    
    beerName = $(this).attr("beer-name");

  if (beerList.includes(beerName)) {
    // increment beer name in beerList array to (score+1)--- to be built**********************************************to be built

      }

  }

  // Create an "on-click" event attached to the ".beer-button" class to push incremental score up by one when pressed.
  $('#inventory').on('click', '.beer-button', incrementScore);
  
 





//the two sections below -- add button, and beerInfo need tobe compressed into single process and function -- have duplicate as both built as test samples
//*********************************************************888  to be built  */



// This function handles events where add a beer button is clicked (submit) -- this portion is only to generate the new button and add it to available list

const addButton = function(event) {

  // event.preventDefault() prevents the form from trying to submit itself.
  // Using a form so that the user can hit enter instead of clicking the button if they want
  event.preventDefault();

  // This line will grab the text from the input box and trim off any white space
  const beerInput = $('#beer-input').val().trim();


  // The beer from the textbox is then added to our array
  beerList.push(beerInput);////// push additional data form API calls to beerList array*************************to be built
  
  // Deletes the contents of the input field
  $('#beer-input').val('');

  // calling renders which handles the processing of our beerList array and regenerates beer buttons
  render();
}


//below is the test process to get input beer name and call untapped to get details on the beer -- working but excessive data and data clensing issues
const beerInfo = function(event) {  
  event.preventDefault();

  const beerName = $('#beerInput').val().trim(); // grab beer from input field and assign to variable beerName
  const clientID = '57E8159A820EF24D970F8FF3DA35FA786E6CD22B'
  const clientSecret = '5DA2FE5752A0B5BF39DC21A323EF78AC587B57BD'
  //const testURL = `https://api.untappd.com/v4/search/beer?q=${beerName}&sort=name&client_id=${clientID}&client_secret=${clientSecret}`
  const testURL = `https://api.untappd.com/v4/beer/info?BID=3942&sort=name&client_id=${clientID}&client_secret=${clientSecret}`    
    $.ajax({
        url: testURL,
        method: 'GET'
      }).then(function(response3) {
          console.log(response3);
      })

    }

    $('#addBeer').on('click', beerInfo);





  });