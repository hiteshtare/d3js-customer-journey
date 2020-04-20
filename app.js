const svg = d3.select("#viz")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000);

//Config  for Circle A - Nodes Count
const circleA_config = Object.freeze({
  Meeting: 5,
  Facebook: 10,
  Email: 11,
  SMS: 6
});
//Center for Circle A
const circleA_originX = 300;
const circleA_originY = 300;
const circleA_radius = calculateRadius(circleA_config); //Raduis for Circle A
const circleA_text = "Alan Kaufman";

var circleBRadius = 150;
var circleCRadius = 100;
var circleDRadius = 60;

var circleA = svg.append("g").append("circle").attr({
  cx: circleA_originX,
  cy: circleA_originY,
  opacity: 100,
  r: circleA_radius,
  fill: "none"
  // to set color for Dash-Circumference 
}).style("stroke", "#007fff").style("stroke-dasharray", "5,5");

svg.append("text")
  .attr("x", circleA_originX)
  .attr("y", circleA_originY)
  .attr("text-anchor", "middle")
  .style("font-size", "20px")
  .text(circleA_text);

var nodeOriginX = circleA_originX + ((circleA_radius) * Math.sin(0));
var nodeOriginY = circleA_originY - ((circleA_radius) * Math.cos(0));

var emailA0 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5, //to-do: dynamic
  fill: "orange" //to-do: dynamic
});

var emailA1 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "orange"
});

var emailA2 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "orange"
});

var emailA3 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "orange"
});

var emailA4 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "orange"
});

var emailA5 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "orange"
});

var emailA6 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "orange"
});

var emailA7 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "orange"
});

var emailA7 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "orange"
});

var emailA8 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "orange"
});

var emailA9 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "orange"
});

var emailA10 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "orange"
});

var fbA1 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA2 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA3 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA4 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA5 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA6 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA7 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA8 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA9 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var fbA10 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

var meetingA1 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#5BC236"
});

var meetingA2 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#5BC236"
});

var meetingA3 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#5BC236"
});

var meetingA4 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#5BC236"
});

var meetingA5 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "#5BC236"
});

var smsA1 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "black"
});

var smsA2 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "black"
});

var smsA3 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "black"
});

var smsA4 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "black"
});

var smsA5 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "black"
});

var smsA6 = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY,
  opacity: 100,
  r: 5,
  fill: "black"
});


/*
var randomA1 = svg.append("rect").attr({
    x: nodeOriginX,
    y: nodeOriginY-5,
    width: 10,
    height: 10,
    opacity: 100,		
    fill: "red"
  });
*/

//emailA0 is not transformed as its origin is at 0,300,300
emailA1.attr("transform", "rotate(5, 300, 300)"); //to-do: dynamic - (angle,x,y)
emailA2.attr("transform", "rotate(10, 300, 300)");
emailA3.attr("transform", "rotate(15, 300, 300)");
emailA4.attr("transform", "rotate(20, 300, 300)");
emailA5.attr("transform", "rotate(25, 300, 300)");
emailA6.attr("transform", "rotate(30, 300, 300)");
emailA7.attr("transform", "rotate(35, 300, 300)");
emailA8.attr("transform", "rotate(40, 300, 300)");
emailA9.attr("transform", "rotate(45, 300, 300)");
emailA10.attr("transform", "rotate(50, 300, 300)");
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


var emailLabel = svg.append("circle").attr({
  cx: nodeOriginX - 120,
  cy: nodeOriginY - 65,
  opacity: 100,
  r: 5,
  fill: "orange"
});

svg.append("text")
  .attr("x", 210)
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("Email");

var fbLabel = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY - 65,
  opacity: 100,
  r: 5,
  fill: "#3b5998"
});

svg.append("text")
  .attr("x", 375)
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("Facebook Message");

var meetingLabel = svg.append("circle").attr({
  cx: nodeOriginX - 120,
  cy: nodeOriginY - 45,
  opacity: 100,
  r: 5,
  fill: "#5BC236"
});

svg.append("text")
  .attr("x", 217)
  .attr("y", 60)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("Meeting");

var smsLabel = svg.append("circle").attr({
  cx: nodeOriginX,
  cy: nodeOriginY - 45,
  opacity: 100,
  r: 5,
  fill: "black"
});

svg.append("text")
  .attr("x", 330)
  .attr("y", 60)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("SMS");

/*
var randomLabel = svg.append("rect").attr({
    x: nodeOriginX,
    y: nodeOriginY-5,
    width: 10,
    height: 10,
    opacity: 100,
    fill: "red"
  });

var circleB = svg.append("circle").attr({
cx: originX + 200,
cy: originY,
opacity: 100,
r: circleBRadius,
fill: "none",
stroke: "black"
});

var circleBOriginX = originX + 200 + ((80) * Math.sin(0));
var circleBOriginY = originY - ((80) * Math.cos(0));

var circleb1 = svg.append("circle").attr({
cx: circleBOriginX,
cy: circleBOriginY,
opacity: 100,
r: 5,
fill: "orange"
});

var circleb2 = svg.append("circle").attr({
cx: circleBOriginX,
cy: circleBOriginY,
opacity: 100,
r: 5,
fill: "orange"
});

var squareb2 = svg.append("circle").attr({
cx: circleBOriginX,
cy: circleBOriginY,
opacity: 100,
r: 5,
fill: "#3b5998"
});

circleb2.attr("transform", "rotate(10, 400, 200)");
squareb2.attr("transform", "rotate(20, 400, 200)");

var circleC = svg.append("circle").attr({
cx: originX + 200 + 200,
cy: originY,
opacity: 100,
r: circleCRadius,
fill: "none",
stroke: "black"
});

var circleCOriginX = originX + 200 + 200 + ((80) * Math.sin(0));
var circleCOriginY = originY - ((80) * Math.cos(0));

var circleb1 = svg.append("circle").attr({
cx: circleCOriginX,
cy: circleCOriginY,
opacity: 100,
r: 5,
fill: "orange"
});

var circleC2 = svg.append("circle").attr({
cx: circleCOriginX,
cy: circleCOriginY,
opacity: 100,
r: 5,
fill: "orange"
});

var squareb2 = svg.append("circle").attr({
cx: circleBOriginX,
cy: circleBOriginY,
opacity: 100,
r: 5,
fill: "#3b5998"
});

circleb2.attr("transform", "rotate(10, 400, 200)");
squareb2.attr("transform", "rotate(20, 400, 200)");
*/