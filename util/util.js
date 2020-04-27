// Channel Type - Effort Weight
const Weights = Object.freeze({
  Meeting: 10,
  Facebook: 8,
  Email: 5,
  SMS: 3
});
// Nodes Config
const Nodes = {
  Raduis: 7, // Raduis of the node
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
let isMaxBoundary = false;

const svg_config = {
  width: 650,
  height: 650
};

function calculateRadius_NodeOrigin(p_circle_config) {
  console.warn(`calculateRadius_NodeOrigin`);

  p_circle_config.totalNodes = p_circle_config.Meeting + p_circle_config.Facebook +
    p_circle_config.Email + p_circle_config.SMS;

  console.log(`Total Nodes: ${p_circle_config.totalNodes} for ${p_circle_config.id}`);

  const raduis = p_circle_config.Meeting * Weights.Meeting + p_circle_config.Facebook * Weights.Facebook +
    p_circle_config.Email * Weights.Email + p_circle_config.SMS * Weights.SMS;

  p_circle_config.raduis = raduis;
  console.log(`Raduis: ${raduis} for ${p_circle_config.id}`);

  p_circle_config.nodeOriginX = p_circle_config.originX + ((p_circle_config.raduis) * Math.sin(0));
  p_circle_config.nodeOriginY = p_circle_config.originY - ((p_circle_config.raduis) * Math.cos(0));
}

function renderCircle(p_circle_config) {

  const doesCircleExist = document.getElementById(`${p_circle_config.id}`);

  if (doesCircleExist === null) {
    //Container for Circle
    let circle_svg =
      d3.select("#viz")
      .append("svg")
      .attr("width", p_circle_config.svg_width)
      .attr("height", p_circle_config.svg_height).attr("id", p_circle_config.id);

    //Create dash circumference for Circle
    circle_svg.append("g").append("circle").attr({
      cx: p_circle_config.originX,
      cy: p_circle_config.originY,
      opacity: 100,
      r: p_circle_config.raduis,
      fill: "none"
      // to set color for Dash-Circumference 
    }).style("stroke", "#007fff").style("stroke-dasharray", "5,5");
    //Add text at the center
    circle_svg.append("text")
      .attr("x", p_circle_config.originX)
      .attr("y", p_circle_config.originY)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text(p_circle_config.Text).attr("class", "segment-text");

    return circle_svg;
  } else {
    //Container for Circle
    let circle_svg = d3.select(`#${p_circle_config.id}`);

    //Create dash circumference for Circle
    circle_svg.append("g").append("circle").attr({
      cx: p_circle_config.originX,
      cy: p_circle_config.originY,
      opacity: 100,
      r: p_circle_config.raduis,
      fill: "none"
      // to set color for Dash-Circumference 
    }).style("stroke", "#007fff").style("stroke-dasharray", "5,5");
    //Add text at the center
    circle_svg.append("text")
      .attr("x", p_circle_config.originX)
      .attr("y", p_circle_config.originY)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text(p_circle_config.Text);

    return circle_svg;
  }
}

function renderEmailNodes(p_circle_svg, p_circle_config) {
  console.warn(`renderEmailNodes :${p_circle_config.Email}`);

  for (let index = 0; index < p_circle_config.Email; index++) {
    let email = p_circle_svg.append("circle").attr({
      cx: p_circle_config.nodeOriginX,
      cy: p_circle_config.nodeOriginY,
      opacity: 100,
      r: Nodes.Raduis,
      fill: Nodes.Email.color,
      class: 'nodes'
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
      fill: Nodes.Facebook.color,
      class: 'nodes'
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
      fill: Nodes.Meeting.color,
      class: 'nodes'
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
      fill: Nodes.SMS.color,
      class: 'nodes'
    });

    // To check first item of Email Node as its origin is as 0,300,300 i.e. angel,origin,origin
    last_Rotate_Value = last_Rotate_Value + Nodes.Raduis;

    sms.attr("transform", `rotate(${last_Rotate_Value}, ${p_circle_config.originX},${p_circle_config.originY})`);

  }

  return p_circle_svg;
}

function renderMaxBoundary(p_circle_svg, p_circle_config) {
  console.warn(`renderMaxBoundary`);
  console.debug(`last_Rotate_Value: ${last_Rotate_Value}`);

  if (last_Rotate_Value > 350) {
    console.warn(`Max boundary`);
    isMaxBoundary = true;
  } else {
    isMaxBoundary = false;
  }

  const redCircle = document.getElementById('max-boundary');

  if (isMaxBoundary) {
    redCircle.style.display = 'block';
  } else {
    redCircle.style.display = 'none';
  }


}

function renderLegends(p_circle_svg, p_circle_config) {
  console.warn(`renderLegends`);
  //---------------------EMAIL---------------------//
  p_circle_svg.append("circle").attr({
    cx: p_circle_config.nodeOriginX - 220,
    cy: p_circle_config.nodeOriginY - 65,
    opacity: 100,
    r: Nodes.Raduis,
    fill: Nodes.Email.color
  });
  p_circle_svg.append("text")
    .attr("x", (p_circle_config.nodeOriginX + 30) - 220)
    .attr("y", p_circle_config.nodeOriginY - 60)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text(`Email`);
  //---------------------EMAIL---------------------//

  //---------------------FACEBOOK---------------------//
  p_circle_svg.append("circle").attr({
    cx: p_circle_config.nodeOriginX - 150,
    cy: p_circle_config.nodeOriginY - 65,
    opacity: 100,
    r: Nodes.Raduis,
    fill: Nodes.Facebook.color
  });
  p_circle_svg.append("text")
    .attr("x", (p_circle_config.nodeOriginX + 35) - 110)
    .attr("y", p_circle_config.nodeOriginY - 60)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Facebook Message");
  //---------------------FACEBOOK---------------------//

  //---------------------MEETING---------------------//
  p_circle_svg.append("circle").attr({
    cx: p_circle_config.nodeOriginX,
    cy: p_circle_config.nodeOriginY - 65,
    opacity: 100,
    r: Nodes.Raduis,
    fill: Nodes.Meeting.color
  });
  p_circle_svg.append("text")
    .attr("x", p_circle_config.nodeOriginX + 40)
    .attr("y", p_circle_config.nodeOriginY - 60)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Meeting");
  //---------------------MEETING---------------------//

  //---------------------SMS---------------------//
  p_circle_svg.append("circle").attr({
    cx: p_circle_config.nodeOriginX + 100,
    cy: p_circle_config.nodeOriginY - 65,
    opacity: 100,
    r: Nodes.Raduis,
    fill: Nodes.SMS.color
  });
  p_circle_svg.append("text")
    .attr("x", p_circle_config.nodeOriginX + 130)
    .attr("y", p_circle_config.nodeOriginY - 60)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("SMS");
  //---------------------SMS---------------------//
}

function renderAllNodes(p_circle_svg, p_circle_config) {
  console.warn(`renderAllNodes for ${p_circle_config.id}`);

  renderEmailNodes(p_circle_svg, p_circle_config);
  renderFacebookNodes(p_circle_svg, p_circle_config);
  renderMeetingNodes(p_circle_svg, p_circle_config);
  renderSMSNodes(p_circle_svg, p_circle_config);

}

function rangeSliderForNodes(circle_svg, p_circle_config) {
  console.warn(`rangeSliderForNodes`);

  //---------------------EMAIL---------------------//
  var sliderRange_Email = document.getElementById("rangeEmail");
  var spanEmail = document.getElementById("spanEmail");
  sliderRange_Email.value = p_circle_config.Email;
  spanEmail.innerHTML = `` + p_circle_config.Email;

  sliderRange_Email.oninput = function () {
    console.log(`Range Slider for Email is updated`);

    //Assigned slider value for DOM
    spanEmail.innerHTML = this.value;
    //Update value for email in Circle Config
    p_circle_config.Email = +this.value;

    // To remove all nodes for the current SVG circle
    d3.select(`#${p_circle_config.id}`).html('');

    //Calculate raduis and Node Origin for Circle A
    calculateRadius_NodeOrigin(p_circle_config);

    // To render circle if it does not exists in DOM
    const circleA_svg = renderCircle(p_circle_config);
    //Re-render graph for updated values
    renderAllNodes(circleA_svg, p_circle_config);

    renderSettingsforCircleA(circleA_svg, p_circle_config)
  }
  //---------------------EMAIL---------------------//

  //---------------------FACEBOOK---------------------//
  var sliderRange_Facebook = document.getElementById("rangeFacebook");
  var spanFacebook = document.getElementById("spanFacebook");
  sliderRange_Facebook.value = p_circle_config.Facebook;
  spanFacebook.innerHTML = `` + p_circle_config.Facebook;

  sliderRange_Facebook.oninput = function () {
    console.log(`Range Slider for Facebook is updated`);

    //Assigned slider value for DOM
    spanFacebook.innerHTML = this.value;
    //Update value for email in Circle Config
    p_circle_config.Facebook = +this.value;

    // To remove all nodes for the current SVG circle
    d3.select(`#${p_circle_config.id}`).html('');

    //Calculate raduis and Node Origin for Circle A
    calculateRadius_NodeOrigin(p_circle_config);

    // To render circle if it does not exists in DOM
    const circleA_svg = renderCircle(p_circle_config);
    //Re-render graph for updated values
    renderAllNodes(circleA_svg, p_circle_config);

    renderSettingsforCircleA(circleA_svg, p_circle_config)
  }
  //---------------------FACEBOOK---------------------//

  //---------------------MEETING---------------------//
  var sliderRange_Meeting = document.getElementById("rangeMeeting");
  var spanMeeting = document.getElementById("spanMeeting");
  sliderRange_Meeting.value = p_circle_config.Meeting;
  spanMeeting.innerHTML = `` + p_circle_config.Meeting;

  sliderRange_Meeting.oninput = function () {
    console.log(`Range Slider for Meeting is updated`);

    //Assigned slider value for DOM
    spanMeeting.innerHTML = this.value;
    //Update value for email in Circle Config
    p_circle_config.Meeting = +this.value;

    // To remove all nodes for the current SVG circle
    d3.select(`#${p_circle_config.id}`).html('');

    //Calculate raduis and Node Origin for Circle A
    calculateRadius_NodeOrigin(p_circle_config);

    // To render circle if it does not exists in DOM
    const circleA_svg = renderCircle(p_circle_config);
    //Re-render graph for updated values
    renderAllNodes(circleA_svg, p_circle_config);

    renderSettingsforCircleA(circleA_svg, p_circle_config)
  }
  //---------------------MEETING---------------------//

  //---------------------SMS---------------------//
  var sliderRange_SMS = document.getElementById("rangeSMS");
  var spanSMS = document.getElementById("spanSMS");
  sliderRange_SMS.value = p_circle_config.SMS;
  spanSMS.innerHTML = `` + p_circle_config.SMS;

  sliderRange_SMS.oninput = function () {
    console.log(`Range Slider for SMS is updated`);

    //Assigned slider value for DOM
    spanSMS.innerHTML = this.value;
    //Update value for email in Circle Config
    p_circle_config.SMS = +this.value;

    // To remove all nodes for the current SVG circle
    d3.select(`#${p_circle_config.id}`).html('');

    //Calculate raduis and Node Origin for Circle A
    calculateRadius_NodeOrigin(p_circle_config);

    // To render circle if it does not exists in DOM
    const circleA_svg = renderCircle(p_circle_config);
    //Re-render graph for updated values
    renderAllNodes(circleA_svg, p_circle_config);

    renderSettingsforCircleA(circleA_svg, p_circle_config)
  }
  //---------------------SMS---------------------//
}

function addClickEventsforNodes(p_circle_config) {
  console.warn(`addClickEventsforNodes`);

  d3.selectAll(`#${p_circle_config.id}`).selectAll("circle.nodes").on("click", function () {
    var win = window.open(`${p_circle_config.url}`, '_self');
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
    }
  });

  d3.selectAll(`#${p_circle_config.id}`).selectAll("text.segment-text").on("click", function () {
    var win = window.open(`pages/customer.html?segment=${p_circle_config.id}`, '_self');
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
    }
  });
}

function renderCircleforCustomer(p_circle_config) {
  //To remove svgs rendered
  d3.selectAll(`svg`).remove();

  //Container for Circle
  let circle_svg =
    d3.select("#viz")
    .append("svg")
    .attr("width", p_circle_config.svg_width)
    .attr("height", p_circle_config.svg_height).attr("id", p_circle_config.id);

  //Create dash circumference for Circle
  circle_svg.append("g").append("circle").attr({
    cx: p_circle_config.originX,
    cy: p_circle_config.originY,
    opacity: 100,
    r: p_circle_config.raduis,
    fill: "none"
    // to set color for Dash-Circumference 
  }).style("stroke", "#007fff").style("stroke-dasharray", "5,5");
  //Add text at the center
  circle_svg.append("text")
    .attr("x", p_circle_config.originX)
    .attr("y", p_circle_config.originY)
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .text(p_circle_config.Text).attr("class", "segment-text");

  return circle_svg;
}

function renderRedCircle(circle_svg, p_circle_config) {
  //Create dash circumference for Circle
  circle_svg.append("g").append("circle").attr({
    cx: p_circle_config.originX,
    cy: p_circle_config.originY,
    opacity: 100,
    r: 250,
    fill: "none",
    id: "max-boundary"
    // to set color for Dash-Circumference 
  }).style("display", "none").style("stroke", "red").style("stroke-width", "2px").style("stroke-dasharray", "5,5");
}

function renderSettingsforCircleA(circle_svg, circle_config) {
  //To handles sliders for Circle A
  rangeSliderForNodes(circle_svg, circle_config);

  //To add click event for all Nodes to navigate for Circle A
  addClickEventsforNodes(circle_config);

  //To add max red boundary for Circle A
  renderRedCircle(circle_svg, circle_config);

  renderMaxBoundary(circle_svg, circle_config)
}