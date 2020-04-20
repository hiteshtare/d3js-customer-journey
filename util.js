// Channel Type - Effort Weight
const Weights = Object.freeze({
  Meeting: 10,
  Facebook: 8,
  Email: 5,
  SMS: 3
});
// Nodes Config
const Nodes = {
  Raduis: 5, // Raduis of the node
  Meeting: {
    color: `#5BC236`
  },
  Facebook: {
    color: `#3b5998`
  },
  Email: {
    color: `orange`
  },
  SMS: {
    color: `black`
  }
};
let last_Rotate_Value = 0;
const svg_config = {
  width: 600,
  height: 600
};

function calculateRadius_NodeOrigin(p_circle_config) {
  console.warn(`calculateRadius_NodeOrigin`);

  const raduis = p_circle_config.Meeting * Weights.Meeting + p_circle_config.Facebook * Weights.Facebook +
    p_circle_config.Email * Weights.Email + p_circle_config.SMS * Weights.SMS;

  console.log(`Raduis: ${raduis}`);

  p_circle_config.raduis = raduis;

  p_circle_config.nodeOriginX = p_circle_config.originX + ((p_circle_config.raduis) * Math.sin(0));
  p_circle_config.nodeOriginY = p_circle_config.originY - ((p_circle_config.raduis) * Math.cos(0));

  p_circle_config.totalNodes = p_circle_config.Meeting + p_circle_config.Facebook +
    p_circle_config.Email + p_circle_config.SMS;

  console.warn(`Total Nodes: ${p_circle_config.totalNodes}`);
}

function renderCircle(p_circle_config) {
  //Container for Circle A
  let circleA_svg =
    d3.select("#viz")
    .append("svg")
    .attr("width", svg_config.width)
    .attr("height", svg_config.height);

  //Create dash circumference for Circle A
  circleA_svg.append("g").append("circle").attr({
    cx: p_circle_config.originX,
    cy: p_circle_config.originY,
    opacity: 100,
    r: p_circle_config.raduis,
    fill: "none"
    // to set color for Dash-Circumference 
  }).style("stroke", "#007fff").style("stroke-dasharray", "5,5");
  //Add text at the center
  circleA_svg.append("text")
    .attr("x", p_circle_config.originX)
    .attr("y", p_circle_config.originY)
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .text(p_circle_config.Text);

  return circleA_svg;
}

function renderEmailNodes(p_circle_svg, p_circle_config) {
  console.warn(`renderEmailNodes :${p_circle_config.Email}`);

  for (let index = 0; index < p_circle_config.Email; index++) {
    let email = p_circle_svg.append("circle").attr({
      cx: p_circle_config.nodeOriginX,
      cy: p_circle_config.nodeOriginY,
      opacity: 100,
      r: Nodes.Raduis,
      fill: Nodes.Email.color
    });

    // To check first item of Email Node as its origin is as 0,300,300 i.e. angel,origin,origin
    if (index !== 0) {
      last_Rotate_Value = Nodes.Raduis * index;

      email.attr("transform", `rotate(${last_Rotate_Value}, ${p_circle_config.originX},${p_circle_config.originY})`);
    }
  }

  return p_circle_svg;
}

function renderFacebookNodes(p_circle_svg, p_circle_config) {
  console.warn(`renderFacebookNodes :${p_circle_config.Facebook}`);

  for (let index = 0; index < p_circle_config.Facebook; index++) {

    let facebook = p_circle_svg.append("circle").attr({
      cx: p_circle_config.nodeOriginX,
      cy: p_circle_config.nodeOriginY,
      opacity: 100,
      r: Nodes.Raduis,
      fill: Nodes.Facebook.color
    });

    // To check first item of Email Node as its origin is as 0,300,300 i.e. angel,origin,origin
    last_Rotate_Value = last_Rotate_Value + Nodes.Raduis;

    facebook.attr("transform", `rotate(${last_Rotate_Value}, ${p_circle_config.originX},${p_circle_config.originY})`);
  }

  return p_circle_svg;
}

function renderMeetingNodes(p_circle_svg, p_circle_config) {
  console.warn(`renderMeetingNodes :${p_circle_config.Meeting}`);

  for (let index = 0; index < p_circle_config.Meeting; index++) {

    let meeting = p_circle_svg.append("circle").attr({
      cx: p_circle_config.nodeOriginX,
      cy: p_circle_config.nodeOriginY,
      opacity: 100,
      r: Nodes.Raduis,
      fill: Nodes.Meeting.color
    });

    // To check first item of Email Node as its origin is as 0,300,300 i.e. angel,origin,origin
    last_Rotate_Value = last_Rotate_Value + Nodes.Raduis;

    meeting.attr("transform", `rotate(${last_Rotate_Value}, ${p_circle_config.originX},${p_circle_config.originY})`);
  }

  return p_circle_svg;
}

function renderSMSNodes(p_circle_svg, p_circle_config) {
  console.warn(`renderSMSNodes :${p_circle_config.SMS}`);

  for (let index = 0; index < p_circle_config.SMS; index++) {

    let sms = p_circle_svg.append("circle").attr({
      cx: p_circle_config.nodeOriginX,
      cy: p_circle_config.nodeOriginY,
      opacity: 100,
      r: Nodes.Raduis,
      fill: Nodes.SMS.color
    });

    // To check first item of Email Node as its origin is as 0,300,300 i.e. angel,origin,origin
    last_Rotate_Value = last_Rotate_Value + Nodes.Raduis;

    sms.attr("transform", `rotate(${last_Rotate_Value}, ${p_circle_config.originX},${p_circle_config.originY})`);
  }

  return p_circle_svg;
}

function renderLegends(p_circle_svg, p_circle_config) {
  //---------------------EMAIL---------------------//
  p_circle_svg.append("circle").attr({
    cx: p_circle_config.nodeOriginX - 120,
    cy: p_circle_config.nodeOriginY - 65,
    opacity: 100,
    r: Nodes.Raduis,
    fill: Nodes.Email.color
  });
  p_circle_svg.append("text")
    .attr("x", 210)
    .attr("y", 40)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text(`Email`);
  //---------------------EMAIL---------------------//

  //---------------------FACEBOOK---------------------//
  p_circle_svg.append("circle").attr({
    cx: p_circle_config.nodeOriginX,
    cy: p_circle_config.nodeOriginY - 65,
    opacity: 100,
    r: Nodes.Raduis,
    fill: Nodes.Facebook.color
  });
  p_circle_svg.append("text")
    .attr("x", 375)
    .attr("y", 40)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Facebook Message");
  //---------------------FACEBOOK---------------------//

  //---------------------MEETING---------------------//
  p_circle_svg.append("circle").attr({
    cx: p_circle_config.nodeOriginX - 120,
    cy: p_circle_config.nodeOriginY - 45,
    opacity: 100,
    r: Nodes.Raduis,
    fill: Nodes.Meeting.color
  });
  p_circle_svg.append("text")
    .attr("x", 217)
    .attr("y", 60)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Meeting");
  //---------------------MEETING---------------------//

  //---------------------SMS---------------------//
  p_circle_svg.append("circle").attr({
    cx: p_circle_config.nodeOriginX,
    cy: p_circle_config.nodeOriginY - 45,
    opacity: 100,
    r: Nodes.Raduis,
    fill: Nodes.SMS.color
  });
  p_circle_svg.append("text")
    .attr("x", 330)
    .attr("y", 60)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("SMS");
  //---------------------SMS---------------------//
}

function renderAllNodes(p_circle_svg, p_circle_config) {
  renderEmailNodes(p_circle_svg, p_circle_config);
  renderFacebookNodes(p_circle_svg, p_circle_config);
  renderMeetingNodes(p_circle_svg, p_circle_config);
  renderSMSNodes(p_circle_svg, p_circle_config);

}

function rangeSliderForNodes(circle_svg, p_circle_config) {
  var slider = document.getElementById("rangeEmail");
  var output = document.getElementById("spanEmail");
  output.innerHTML = slider.value;
  output.innerHTML = `` + p_circle_config.Email;

  slider.oninput = function () {
    output.innerHTML = this.value;
    p_circle_config.Email = +this.value;

    renderAllNodes(circle_svg, p_circle_config);
  }

}