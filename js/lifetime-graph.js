const w = 500;
const h = 200;
var path;
var roundResults;

d3.json('../dummyData/roundResults.json', function (error, results) {

  if (error) return console.warn(error);
  roundResults = results.roundResults;

  // roundResults.forEach(function (d) {
  //   var formatTime = d3.timeFormat("%d/%m");
  //   d.date = formatTime(d.date);
  //   console.log(d.date)
  // });

  path = d3
    .select('#lifetime-results-page__lifetime-graph')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .append('g')
    .append('path')

  var dates = roundResults.map(function(a) {return a.date});
  var scores = roundResults.map(function(a) {return a.score});

  var x = d3.scaleTime()
    .domain(d3.extent(dates))
    .range([0, w]);

  var y = d3.scaleLinear()
    .domain([0, 100])
    .range([h, 0]);

  var line = d3.line()
    .x(function (d) {
      return x(d.date);
    })
    .y(function (d) {
      return y(d.score);
    })

  path
    .datum(roundResults)
    .attr('d', line);

});
