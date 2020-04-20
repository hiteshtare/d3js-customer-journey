//Center for Circle A
const circleA_originX = 300;
const circleA_originY = 300;
//Config  for Circle A - Nodes Count
const circleA_config = Object.freeze({
  Meeting: 5,
  Facebook: 10,
  Email: 11,
  SMS: 6
});
const circleA_radius = calculateRadius(circleA_config); //Raduis for Circle A
const circleA_text = "Alan Kaufman";

const circleA_svg = d3.select("#viz")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000);

circleA_svg.append("g").append("circle").attr({
  cx: circleA_originX,
  cy: circleA_originY,
  opacity: 100,
  r: circleA_radius,
  fill: "none"
  // to set color for Dash-Circumference 
}).style("stroke", "#007fff").style("stroke-dasharray", "5,5");

circleA_svg.append("text")
  .attr("x", circleA_originX)
  .attr("y", circleA_originY)
  .attr("text-anchor", "middle")
  .style("font-size", "20px")
  .text(circleA_text);

var nodeOriginX = circleA_originX + ((circleA_radius) * Math.sin(0));
var nodeOriginY = circleA_originY - ((circleA_radius) * Math.cos(0));

renderEmailNodes(circleA_svg, circleA_config, nodeOriginX, nodeOriginY);

var fbA1 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA2 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA3 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA4 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA5 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA6 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA7 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA8 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA9 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA10 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var meetingA1 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#5BC236"
});

var meetingA2 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#5BC236"
});

var meetingA3 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#5BC236"
});

var meetingA4 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#5BC236"
});

var meetingA5 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#5BC236"
});

var smsA1 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "black"
});

var smsA2 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "black"
});

var smsA3 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "black"
});

var smsA4 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "black"
});

var smsA5 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "black"
});

var smsA6 = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "black"
});

var circleBRadius = 150;
var circleCRadius = 100;
var circleDRadius = 60;

/*
var randomA1 = circleA_svg.append("rect").attr({
    x: nodeOriginX,
    y: nodeOriginY-5,
    width: 10,
    height: 10,
    opacity: 100,		
    fill: "red"
  });
*/

fbA1.attr("transform", "rotate(55, 300, 300)");
fbA2.attr("transform", "rotate(60, 300, 300)");
fbA3.attr("transform", "rotate(65, 300, 300)");
fbA4.attr("transform", "rotate(70, 300, 300)");
fbA5.attr("transform", "rotate(75, 300, 300)");
fbA6.attr("transform", "rotate(80, 300, 300)");
fbA7.attr("transform", "rotate(85, 300, 300)");
fbA8.attr("transform", "rotate(90, 300, 300)");
fbA9.attr("transform", "rotate(95, 300, 300)");
fbA10.attr("transform", "rotate(100, 300, 300)");
meetingA1.attr("transform", "rotate(105, 300, 300)");
meetingA2.attr("transform", "rotate(110, 300, 300)");
meetingA3.attr("transform", "rotate(115, 300, 300)");
meetingA4.attr("transform", "rotate(120, 300, 300)");
meetingA5.attr("transform", "rotate(125, 300, 300)");
smsA1.attr("transform", "rotate(130, 300, 300)");
smsA2.attr("transform", "rotate(135, 300, 300)");
smsA3.attr("transform", "rotate(140, 300, 300)");
smsA4.attr("transform", "rotate(145, 300, 300)");
smsA5.attr("transform", "rotate(150, 300, 300)");
smsA6.attr("transform", "rotate(155, 300, 300)");

// randomA1.attr("transform", "rotate(160, 300, 300)");


var emailLabel = circleA_svg.append("circle").attr({
  cx: nodeOriginX - 120,
  cy: nodeOriginY - 65,
  opacity: 100,
  r: 5,
  fill: "orange"
});

circleA_svg.append("text")
  .attr("x", 210)
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("Email");

var fbLabel = circleA_svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY - 65,
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
  cx: nodeOriginX - 120,
  cy: nodeOriginY - 45,
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
  cx: nodeOriginX,
  cy: nodeOriginY - 45,
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
    x: nodeOriginX,
    y: nodeOriginY-5,
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