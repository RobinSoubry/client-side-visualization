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

  // Step 3: Add a rectangle to the canvas
  var rectangle = canvas.append("rect")
                      .attr("width",100)
                      .attr("height",50);

  // Step 4: Add a diagonal line to the canvas
  var line = canvas.append("line")
                      .attr("x1",0)
                      .attr("y1",100)
                      .attr("x2",400)
                      .attr("y2",400)
                      .attr("stroke","red")
                      .attr("stroke-width",5);

});