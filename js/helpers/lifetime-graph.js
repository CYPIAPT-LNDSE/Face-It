function lifeTimeResults (roundResults) {
  
  var dataLength = roundResults.length;

  var margin = {top: 35, right: 5, bottom: 35, left: 60};
  var height = 250 - margin.top - margin.bottom;
  var width = dataLength * 100 - margin.left - margin.right;
  var dates = roundResults.map(function(a) {return a.date});
  var formatTime = d3.timeFormat("%d/%m");

  // Create scales

  var xScale = d3.scaleTime()
    .domain(d3.extent(dates))
    .range([0, width]);

  var yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

  // Create axis

  var yAxis = d3.axisRight(yScale)
    .ticks(1)
    .tickFormat(function(d) { return d + "%"; });

  // Create path

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
    .translateExtent([[0, -10], [width + 80, height]])
    .on("zoom", zoomed);

  function zoomed() {
    chart.attr(
      "transform", `translate(${d3.event.transform.x}, 0)`
    )}

  // Append SVG to div

  var svg = d3
    .select("#lifetime-results-page__lifetime-graph")
    .append("svg")
    .attr("width", "100%")
    .attr("height", height + margin.top + margin.bottom)
    .call(zoom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Append chart to SVG

  chart = svg.append("g")
    .attr("class", "lifetime-graph__chart")

  // Append axis

  svg.append("g")
    .attr("transform", "translate(-60, 0)")
    .attr("class", "lifetime-graph__axis")
    .call(yAxis);

  // Create path and append to chart

  chart.append("path")
    .datum(roundResults)
    .attr("d", line)

  // Create data points and append to chart

  var datapoint = chart.selectAll("g")
    .data(roundResults)

  var datapointEnter = datapoint.enter()
    .append("g")
    .attr("x", function(d) { return xScale(d.date); })
    .attr("y", function(d) { return yScale(d.score); })

  var circle = datapointEnter.append("circle")
    .attr("class", "lifetime-graph__dots")
    .attr("r", 12)
    .attr("cx", function(d) { return xScale(d.date); })
    .attr("cy", function(d) { return yScale(d.score); })

  datapointEnter.append("rect")
    .attr("class", "lifetime-graph__tooltip--bg")
    .attr("x", function(d) { return (xScale(d.date) - 15); })
    .attr("y", function(d) { return (yScale(d.score) - 31); })
    .attr("fill", "#F5F5F5")
    .attr("width", 32)
    .attr("height", 17);

  datapointEnter.append("text")
    .attr("class", "lifetime-graph__tooltip")
    .attr("x", function(d) { return (xScale(d.date) - 12); })
    .attr("y", function(d) { return (yScale(d.score) - 18); })
    .text(function(d){ return formatTime(d.date) })

}
