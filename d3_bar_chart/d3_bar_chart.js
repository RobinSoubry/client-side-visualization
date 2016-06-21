document.addEventListener("DOMContentLoaded", function(e) { 

  var dataArray = [20, 40, 50, 60];
  var width = 500;
  var height = 500;

  var canvas = d3.select('body')
              .append('svg')
              .attr('width',width)
              .attr('height',height);

  var bars = canvas.selectAll('rect')
                  .data(dataArray)
                  .enter()
                      .append('rect')
                      .attr('width', function(d) { return widthScale(d); })
                      .attr('height', 50)
                      .attr('fill', 'blue')
                      .attr('y', function(d,i) { return i *100 });

});