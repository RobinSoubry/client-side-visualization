document.addEventListener("DOMContentLoaded", function(e) { 

  var dataArray = [20, 40, 50, 60]; // Data to load in chart
  var width = 500;
  var height = 500;

  var widthScale = d3.scale.linear() // scale is a methods that has a subset of opstions (linear scale, logarithmic etc…)
                    .domain([0, 60]) // Domain is the range from your smallest to greatest element in the data to show.
                    .range([0,width]); // We make full use of the canvas by setting the range to the width of the container.

  var color = d3.scale.linear()
                .domain([0,60])
                .range(['red','blue'])

  var canvas = d3.select('body')
              .append('svg')
              .attr('width',width)
              .attr('height',height)
              .append('g') // g: stands for 'group', which makes it easy to manipulate elements in a group.
              .attr('transform','translate(50,50)'); // translate the position to a position you desire (x,y)

  var bars = canvas.selectAll('rect') // selectAll selects all 'rect' elements. --> Empty selection to connect data to.
                  .data(dataArray) // Bind actual data, pulled from the dataArray to the empty selection.
                  .enter() // Returns placeholders for each element for which there are no corresponding DOM elements on the page. (This will return 4 placeholders, one for each datapoint in dataArray)
                      .append('rect')
                      .attr('width', function(d) { return widthScale(d); })
                          // Width is not a hard-coded value, but the actual value of the data-point | argument 'd' stands for each data-element.
                          // Scales are functions that also have methods available:
                            // You take an input range and transform the range to one that fits within our desired range.
                      .attr('height', 50)
                      .attr('fill', function(d) { return color(d) }) // The color is determined by the value of the data-point in a range from 'red' to 'blue'
                      .attr('y', function(d,i) { return i * 100 }); // d: data, i: index

});