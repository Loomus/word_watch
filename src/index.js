import $ from 'jquery'

$(document).ready(() => {
  $.get("https://wordwatch-api.herokuapp.com/api/v1/top_word", function(data){
    document.querySelector('#demo').innerHTML = JSON.stringify(data.word)
  });
})
