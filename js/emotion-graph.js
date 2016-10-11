d3.json("../dummyData/emotionResults.json", function (error, results) {

  if (error) return console.warn(error);
  
  const emotionResult = results['happiness']
  const margin = {top: 10, right: 10, bottom: 10, left: 10};
  const width = 300 - margin.left - margin.right;
  const height = 200 - margin.top - margin.bottom;
  
  const domainMax = emotionResult.reduce((acc, el) => {
    return Math.max(acc, el.score);
  }, 0);

  const lineData = [{y: 50, x: 0}, {y: 50, x: domainMax / 2}, {y: 50, x: domainMax}]

  const xScale = d3.scaleLinear()
    .domain([0, domainMax])
    .range([0, width]);
  const yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

  const line = d3.line()
    .x(function (d) {
      return xScale(d.x);
    })
    .y(function (d) {
      return yScale(d.y);
    });

  const svg = d3.select("#happiness")
    .append("svg")
    .attr("width", '100%')
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("path")
    .datum(lineData)
    .attr("d", line)

  svg.selectAll("dot")
      .data(emotionResult)
    .enter().append("circle")
      .attr("class", "lifetime-graph__dots")
      .attr("r", 8)
      .attr("cx", function(d) { return xScale(d.score); })
      .attr("cy", function(d) { return yScale(50); });
});

