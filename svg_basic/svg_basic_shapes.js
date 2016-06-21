document.addEventListener("DOMContentLoaded", function(e) { 
// Step 1: Create a canvas to draw the svg on.
  var canvas = d3.select("body") // We use the body as a selector, but virtually any div can be used.
                  .append("svg")
                  .attr("width",500)
                  .attr("height",500)

  // Step 2: Add a circle to the canvas
  var circle = canvas.append("circle")
                      .attr("cx",250) // c = center | x = horizontal axis => Similar to margin in css
                      .attr("cy",250)
                      .attr("r",50) // Give the circle a radius
                      .attr("fill","green") // Fill color of the object is an attribute, not a style


});