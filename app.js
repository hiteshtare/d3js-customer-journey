//Config  for Circle A - Nodes Count
const circleA_config = Object({
  Meeting: 5,
  Facebook: 10,
  Email: 11,
  SMS: 6,
  Text: 'Alan Kaufman',
  originX: 300,
  originY: 300,
  raduis: 0,
  nodeOriginX: 0,
  nodeOriginY: 0
});
//Calculate raduis for Circle A
circleA_config.raduis = calculateRadius(circleA_config);
//Calculate Node Origin for Circle A
circleA_config.nodeOriginX = circleA_config.originX + ((circleA_config.raduis) * Math.sin(0));
circleA_config.nodeOriginY = circleA_config.originY - ((circleA_config.raduis) * Math.cos(0));

//Container for Circle A
const circleA_svg = d3.select("#viz")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000);
//Create dash circumference for Circle A
circleA_svg.append("g").append("circle").attr({
  cx: circleA_config.originX,
  cy: circleA_config.originY,
  opacity: 100,
  r: circleA_config.raduis,
  fill: "none"
  // to set color for Dash-Circumference 
}).style("stroke", "#007fff").style("stroke-dasharray", "5,5");
//Add text at the center
circleA_svg.append("text")
  .attr("x", circleA_config.originX)
  .attr("y", circleA_config.originY)
  .attr("text-anchor", "middle")
  .style("font-size", "20px")
  .text(circleA_config.Text);


renderEmailNodes(circleA_svg, circleA_config);
renderFacebookNodes(circleA_svg, circleA_config);
renderMeetingNodes(circleA_svg, circleA_config);
renderSMSNodes(circleA_svg, circleA_config);


var emailLabel = circleA_svg.append("circle").attr({
  cx: circleA_config.nodeOriginX - 120,
  cy: circleA_config.nodeOriginY - 65,
  opacity: 100,
  r: 5,
  fill: "orange"
});

circleA_svg.append("text")
  .attr("x", 210)
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text(`Email`);

var fbLabel = circleA_svg.append("circle").attr({
  cx: circleA_config.nodeOriginX,
  cy: circleA_config.nodeOriginY - 65,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

circleA_svg.append("text")
  .attr("x", 375)
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("Facebook Message");

var meetingLabel = circleA_svg.append("circle").attr({
  cx: circleA_config.nodeOriginX - 120,
  cy: circleA_config.nodeOriginY - 45,
  opacity: 100,
  r: 5,
  fill: "#5BC236"
});

circleA_svg.append("text")
  .attr("x", 217)
  .attr("y", 60)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("Meeting");

var smsLabel = circleA_svg.append("circle").attr({
  cx: circleA_config.nodeOriginX,
  cy: circleA_config.nodeOriginY - 45,
  opacity: 100,
  r: 5,
  fill: "black"
});

circleA_svg.append("text")
  .attr("x", 330)
  .attr("y", 60)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("SMS");



/*
var randomLabel = circleA_svg.append("rect").attr({
    x: circleA_config.nodeOriginX,
    y: circleA_config.nodeOriginY-5,
    width: 10,
    height: 10,
    opacity: 100,
    fill: "red"
  });

var circleB = circleA_svg.append("circle").attr({
cx: originX + 200,
cy: originY,
opacity: 100,
r: circleBRadius,
fill: "none",
stroke: "black"
});

var circleBOriginX = originX + 200 + ((80) * Math.sin(0));
var circleBOriginY = originY - ((80) * Math.cos(0));

var circleb1 = circleA_svg.append("circle").attr({
cx: circleBOriginX,
cy: circleBOriginY,
opacity: 100,
r: 5,
fill: "orange"
});

var circleb2 = circleA_svg.append("circle").attr({
cx: circleBOriginX,
cy: circleBOriginY,
opacity: 100,
r: 5,
fill: "orange"
});

var squareb2 = circleA_svg.append("circle").attr({
cx: circleBOriginX,
cy: circleBOriginY,
opacity: 100,
r: 5,
fill: "#3b5998"
});

circleb2.attr("transform", "rotate(10, 400, 200)");
squareb2.attr("transform", "rotate(20, 400, 200)");

var circleC = circleA_svg.append("circle").attr({
cx: originX + 200 + 200,
cy: originY,
opacity: 100,
r: circleCRadius,
fill: "none",
stroke: "black"
});

var circleCOriginX = originX + 200 + 200 + ((80) * Math.sin(0));
var circleCOriginY = originY - ((80) * Math.cos(0));

var circleb1 = circleA_svg.append("circle").attr({
cx: circleCOriginX,
cy: circleCOriginY,
opacity: 100,
r: 5,
fill: "orange"
});

var circleC2 = circleA_svg.append("circle").attr({
cx: circleCOriginX,
cy: circleCOriginY,
opacity: 100,
r: 5,
fill: "orange"
});

var squareb2 = circleA_svg.append("circle").attr({
cx: circleBOriginX,
cy: circleBOriginY,
opacity: 100,
r: 5,
fill: "#3b5998"
});

circleb2.attr("transform", "rotate(10, 400, 200)");
squareb2.attr("transform", "rotate(20, 400, 200)");
*/