var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 400 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom
var roundResults;

d3.json("../dummyData/roundResults.json", function (error, results) {

  if (error) return console.warn(error);

  roundResults = results.roundResults;

  var dates = roundResults.map(function(a) {return a.date});

  // roundResults.forEach(function (d) {
  //   var formatTime = d3.timeFormat("%d/%m");
  //   d.date = formatTime(d.date);
  //   console.log(d.date)
  // });

  var xScale = d3.scaleTime()
    .domain(d3.extent(dates))
    .range([0, width]);

  var yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

  var line = d3.line()
    .x(function (d) {
      return xScale(d.date);
    })
    .y(function (d) {
      return yScale(d.score);
    })


  // Create zoom event

  var zoom = d3.zoom()
    .scaleExtent([1, 1])
    .translateExtent([[-20, -20], [width + 20, height + 20]])
    .on("zoom", zoomed);

  function zoomed() {
    svg.attr(
      "transform",
      `translate(${d3.event.transform.x}, 0)`
    )}

  // Create chart instance

  var svg = d3
    .select("#lifetime-results-page__lifetime-graph")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .call(zoom)
    .append("g")
      .attr("transform", `translate(${margin.left},${margin.top},${margin.right},${margin.bottom})`)

  // Add line chart

  svg.append("path")
    .datum(roundResults)
    .attr("d", line);

  // Create data points on line chart

  svg.selectAll("dot")
      .data(roundResults)
    .enter().append("circle")
      .attr("class", "lifetime-graph__dots")
      .attr("r", 8)
      .attr("cx", function(d) { return xScale(d.date); })
      .attr("cy", function(d) { return yScale(d.score); });

});
