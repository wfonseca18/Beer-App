
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

