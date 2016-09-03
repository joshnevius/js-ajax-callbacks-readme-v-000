$(document).ready(function(){
  $.get("this_doesnt_exist.html", function(data) {
    doSomethingGood();
  }).fail(function(error) {
  console.log('Something went wrong: ' + error);
  });
});
