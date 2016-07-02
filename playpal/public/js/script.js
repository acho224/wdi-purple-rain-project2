$(document).ready(function() {

const $body   = $('body');
const $ul     = $('<ul>')
const $button = $('#search-dogs')


$button.click(function(){
  $searchValue = $('#zip-code').val();
    console.log($searchValue)

    var dataObj = {};

    if ($('#zip-code').val() != ""){
      dataObj = {z: $('#zip-code').val()}
    }

    $.ajax({

      url:('/api'),
      method:'GET',
      dataType:'json',
      data: dataObj,
      success:


    })
  })
})
