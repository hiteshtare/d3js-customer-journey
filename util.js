// Channel Type - Effort Weight
const Weights = Object.freeze({
  Meeting: 10,
  Facebook: 8,
  Email: 5,
  SMS: 3
});
const Nodes = {
  Meeting: {
    raduis: 5,
    color: `#5BC236`
  },
  Facebook: {
    raduis: 5,
    color: `#3b5998`
  },
  Email: {
    raduis: 5,
    color: `orange`
  },
  SMS: {
    raduis: 5,
    color: `black`
  }
};
let last_Rotate_Value = 0;

function calculateRadius(p_circle_config) {
  console.warn(`calculateRadius`);

  const raduis = p_circle_config.Meeting * Weights.Meeting + p_circle_config.Facebook * Weights.Facebook +
    p_circle_config.Email * Weights.Email + p_circle_config.SMS * Weights.SMS;

  console.log(`Raduis: ${raduis}`);

  return raduis;
}

function renderEmailNodes(p_circleA_svg, p_circle_config) {
  console.warn(`renderEmailNodes :${p_circle_config.Email}`);

  for (let index = 0; index < p_circle_config.Email; index++) {
    let email = p_circleA_svg.append("circle").attr({
      cx: p_circle_config.nodeOriginX,
      cy: p_circle_config.nodeOriginY,
      opacity: 100,
      r: Nodes.Email.raduis,
      fill: Nodes.Email.color
    });

    // To check first item of Email Node as its origin is as 0,300,300 i.e. angel,origin,origin
    if (index !== 0) {
      last_Rotate_Value = 5 * index;

      email.attr("transform", `rotate(${last_Rotate_Value}, 300, 300)`);
    }
  }

  return p_circleA_svg;
}

function renderFacebookNodes(p_circleA_svg, p_circle_config) {
  console.warn(`renderFacebookNodes :${p_circle_config.Facebook}`);

  for (let index = 0; index < p_circle_config.Facebook; index++) {

    let facebook = p_circleA_svg.append("circle").attr({
      cx: p_circle_config.nodeOriginX,
      cy: p_circle_config.nodeOriginY,
      opacity: 100,
      r: Nodes.Facebook.raduis,
      fill: Nodes.Facebook.color
    });

    // To check first item of Email Node as its origin is as 0,300,300 i.e. angel,origin,origin
    last_Rotate_Value = last_Rotate_Value + 5;

    facebook.attr("transform", `rotate(${last_Rotate_Value}, 300, 300)`);
  }

  return p_circleA_svg;
}

function renderMeetingNodes(p_circleA_svg, p_circle_config) {
  console.warn(`renderMeetingNodes :${p_circle_config.Meeting}`);

  for (let index = 0; index < p_circle_config.Meeting; index++) {

    let meeting = p_circleA_svg.append("circle").attr({
      cx: p_circle_config.nodeOriginX,
      cy: p_circle_config.nodeOriginY,
      opacity: 100,
      r: Nodes.Meeting.raduis,
      fill: Nodes.Meeting.color
    });

    // To check first item of Email Node as its origin is as 0,300,300 i.e. angel,origin,origin
    last_Rotate_Value = last_Rotate_Value + 5;

    meeting.attr("transform", `rotate(${last_Rotate_Value}, 300, 300)`);
  }

  return p_circleA_svg;
}

function renderSMSNodes(p_circleA_svg, p_circle_config) {
  console.warn(`renderSMSNodes :${p_circle_config.SMS}`);

  for (let index = 0; index < p_circle_config.SMS; index++) {

    let sms = p_circleA_svg.append("circle").attr({
      cx: p_circle_config.nodeOriginX,
      cy: p_circle_config.nodeOriginY,
      opacity: 100,
      r: Nodes.SMS.raduis,
      fill: Nodes.SMS.color
    });

    // To check first item of Email Node as its origin is as 0,300,300 i.e. angel,origin,origin
    last_Rotate_Value = last_Rotate_Value + 5;

    sms.attr("transform", `rotate(${last_Rotate_Value}, 300, 300)`);
  }

  return p_circleA_svg;
}