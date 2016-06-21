document.addEventListener("DOMContentLoaded", function(e) { 

  var dataArray = [20, 40, 50, 60];
  var width = 500;
  var height = 500;

  var widthScale = d3.scale.linear()
                    .domain([0, 60])
                    .range([0,width]);

  var color = d3.scale.linear()
                .domain([0,60])
                .range(['red','blue'])

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
                      .attr('fill', function(d) { return color(d) })
                      .attr('y', function(d,i) { return i * 100 });

});