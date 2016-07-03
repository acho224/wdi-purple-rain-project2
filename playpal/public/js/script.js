$(document).ready(function() {

  const $body   = $('body');
  const $ul     = $('<ul>')
  const $button = $('#search-dogs')

  $button.click(function(){
    var dataObj = {};

    $searchValue = $('#zip-code').val();
    console.log($searchValue)

    if ($('#zip-code').val() !== ""){
      dataObj.zip = $searchValue;
    }

    $.ajax({

      url:('/api'),
      method:'GET',
      dataType:'json',
      data: dataObj,
      success: function(data){
        fullResults = data.response.groups[0].items;
        // firstResult = fullResults[0].venue.name;
        // console.log(firstResult);
        fullResults.forEach(function(park){
          if (park.venue.location.postalCode === $searchValue){
            var parkName = park.venue.name;
            var parkID   = park.venue.id;
            var parkAddress = park.venue.location.formattedAddress[0];
            console.log(parkName, parkID, parkAddress);
            let $name = $('<li>').text(parkName);
            let $address = $('<li>').text(parkAddress);
            let $id = $('<li>').text(parkID);
            $ul.append($name);
            $ul.append($address);
            $ul.append($id);
          }
          $body.append($ul);
        })
      }


    })
  })
})
