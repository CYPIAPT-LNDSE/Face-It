function lifeTimeResults (roundResults) {
  var margin = {top: 35, right: 5, bottom: 35, left: 60};
  var height = 250 - margin.top - margin.bottom;
  var roundResultsDateRound = roundResults.map(function(el){
    return Object.assign(el, {
      date: el.date - (el.date % (3600 * 24000)) + 1
    })
  });
  var dates = roundResultsDateRound.map(function(a) {
    return a.date
  });
  var roundResultsDailyAverage = roundResultsDateRound.reduce(function(acc, el) {
    const x = acc.map(function(element) {
      return element.date === el.date
    }).indexOf(true) 
    if (x > -1) {
      acc[x].score = (parseInt(acc[x].score) + parseInt(el.score)).toString();
      acc[x].count += 1;
      acc[x].dayScore = acc[x].score / acc[x].count;
      return acc; }
    return acc.concat(Object.assign(el, {count: 1, dayScore: el.score}))
  }, [])

  var dataLength = roundResultsDailyAverage.length;
  var width = dataLength * 50 - margin.left - margin.right;
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
      return yScale(d.dayScore);
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

  let chart = svg.append("g")
    .attr("class", "lifetime-graph__chart")

  // Append axis

  svg.append("g")
    .attr("transform", "translate(-60, 0)")
    .attr("class", "lifetime-graph__axis")
    .call(yAxis);

  // Create path and append to chart

  chart.append("path")
    .datum(roundResultsDailyAverage)
    .attr("d", line)

  // Create data points and append to chart

  var datapoint = chart.selectAll("g")
    .data(roundResultsDailyAverage)

  var datapointEnter = datapoint.enter()
    .append("g")
    .attr("x", function(d) { return xScale(d.date); })
    .attr("y", function(d) { return yScale(d.dayScore); })

  var circle = datapointEnter.append("circle")
    .attr("class", "lifetime-graph__dots")
    .attr("r", 12)
    .attr("cx", function(d) { return xScale(d.date); })
    .attr("cy", function(d) { return yScale(d.dayScore); })

  datapointEnter.append("rect")
    .attr("class", "lifetime-graph__tooltip--bg")
    .attr("x", function(d) { return (xScale(d.date) - 15); })
    .attr("y", function(d) { return (yScale(d.dayScore) - 31); })
    .attr("fill", "#F5F5F5")
    .attr("width", 32)
    .attr("height", 17);

  datapointEnter.append("text")
    .attr("class", "lifetime-graph__tooltip")
    .attr("x", function(d) { return (xScale(d.date) - 12); })
    .attr("y", function(d) { return (yScale(d.dayScore) - 18); })
    .text(function(d){ return formatTime(d.date) })

}
