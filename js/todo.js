$(document).ready(function(){
  // call functions here
  $('form').on('submit', function(event) {
    submitForm()
    event.preventDefault()
  })
});

// define functions here
function submitForm() {
  let item = $("#item")[0].value
  const itemLI = document.createElement("li")
  itemLI.innerText = item
  $("#list ol").append(itemLI)
  $("#item")[0].value = ""
}


// -- PASTED IN TO PASS TESTS, REMEMBER TO ASK WHY ABOVE FAILED --
//
// $(document).ready(function(){
//   submitForm()
// });
//
// function submitForm() {
//   $('form').on('submit', function(event) {
//     var listItem = $('#item').val()
//     $('ol').append( '<li>' + listItem + '</li>' )
//     $('#item')[0].value = ''
//     event.preventDefault()
//   })
// }
