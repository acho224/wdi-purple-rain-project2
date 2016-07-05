$(document).ready(function() {

  const $searchbody   = $('#searchpage');
  const $ul     = $('<ul>')
  const $button = $('#search-btn')

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
            let $newPark = $('<li class="parkItem">').html('<div><h4>'+ parkName +'</h4><p>'+parkAddress+'</p><p class="parkId">Park ID: '+parkID+'</p><p><a href="#">Reviews</a> <span class="nav-spacing">|</span> <a href="#">Leave a Comment</a></p></div>');
            $ul.append($newPark);
          }
          $searchbody.append($ul);
        })
      }


    })
  })
})
