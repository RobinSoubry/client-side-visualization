document.addEventListener('DOMContentLoaded', function(e) { 
  // Step 1: Create a canvas to draw the svg on.
  var canvas = d3.select('#mondrian') // We use the #mondrian as a selector, to easily center the div on page.
                  .append('svg')
                  .attr('width',700)
                  .attr('height',800);

});