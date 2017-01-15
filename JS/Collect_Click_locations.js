var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc){
  //$(document).click() is a jQuery event handler on the page
  //loc is a jQuery event object that contains information about the click event.
  var x=loc.pageX;
  var y=loc.pageY;
  logClicks(x,y);
});
