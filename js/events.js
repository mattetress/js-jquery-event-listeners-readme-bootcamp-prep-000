function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  } ) };

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })};

function pressIt() {
  $('input#typing').on('keydown', function(pressed) {
    if (pressed.key == "g" || pressed.key == "G") {
      alert("Hold up! You pressed the 'G' key!!");
    }
  })
};

function submitIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.");
  })
};

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
// call functions here

});
