function etchGen(unit = 16){
  var funcCall = 0;
  var containNum = 0;
  var etchNum = 0;
  var unitLength = 960/unit + "px";
  console.log(unitLength);
  //set height and width of etch divs
  //generate container and etc divs
  for (i = 0; i < unit; i++) {
    var contText = '<div class="container"></div>';
    var etchText = '<div class=" color etch"></div>';
    $(".frame").append(contText);
    for (j = 0; j < unit; j++){
      var etchId = "unit" + j;
      $(".container:last").append(etchText);
      $(".etch:last").prop("id", etchId);
    }
  }

  $(".etch").css({
    "height":unitLength,
    "width":unitLength});
    funcCall++;
    console.log(funcCall);
}/*
function rollColor() {
  var red = Math.floor(Math.random()*256);
  var green = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);
  var color = "rbg(" + red + "," + green + "," + blue + ")";
  console.log(color);
  return color;
}*/
function draw() {
  $("div.etch").hover(function() {
    var eventID = $(this).attr("id");
    console.log("event id is " + eventID);
    $(this).css({"background-color": "purple"});
}) //end hover
}//end draw

function clearFrame(){
  $(".container").remove();
} //end clear frame

// reset frame
function reset(){
  var response = prompt("Please enter a grid size from 1-100");
  response = parseInt(response);
  //check response is valid number
  if (isNaN(response) === true || response < 1 || response > 100) {
    response = prompt("I'm sorry, but that was not a valid response. Please be sure to enter a grid size from 1-100");
    response = parseInt(response);
  }
  var unit = response;
  //clear frame
  clearFrame();
  etchGen(unit);
  draw();
} // end reset

// Document ready
$(document).ready(function() {

  etchGen();
  draw();
  $("#reset").click(function() {
    reset();
  });
  });

//function for creating container and etch divs
