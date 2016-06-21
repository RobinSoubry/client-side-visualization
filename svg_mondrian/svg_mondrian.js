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

});