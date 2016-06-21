document.addEventListener('DOMContentLoaded', function(e) { 
  // Step 1: Create a canvas to draw the svg on.
  var canvas = d3.select('#mondrian') // We use the #mondrian as a selector, to easily center the div on page.
                  .append('svg')
                  .attr('width',700)
                  .attr('height',800);

  var frame = canvas.append('rect')
                    .attr('width',550)
                    .attr('height',650)
                    .attr('x',75)
                    .attr('y',75)
                    .attr('fill', 'none')
                    .attr('stroke','black')
                    .attr('stroke-width',10);

  var red = canvas.append('rect')
                    .attr('width',370)
                    .attr('height',435)
                    .attr('x',250)
                    .attr('y',80)
                    .attr('fill', 'red');

  var blue = canvas.append('rect')
                    .attr('width',170)
                    .attr('height',200)
                    .attr('x',80)
                    .attr('y',520)
                    .attr('fill', 'blue');

  var yellow = canvas.append('rect')
                    .attr('width',80)
                    .attr('height',100)
                    .attr('x',540)
                    .attr('y',620)
                    .attr('fill', 'yellow');

});