//================================Load JSON data================================//
$(function () {
  $.getJSON('./data/mock.json', function (data) {
    console.log('JSON loaded :)');
    const Customer_Level = data.Customer_Level;
    const Segment_Level = data.Segment_Level;

  }).error(function () {
    console.log('Unable to load JSON :(');
  });
});
//================================Load JSON data================================//

const circles_config = [{
  Meeting: 5,
  Facebook: 10,
  Email: 10,
  SMS: 6,
  Text: 'Segment A',
  id: 'circleA',
  url: 'https://observablehq.com/@d3/zoomable-circle-packing',
  originX: 300,
  originY: 300,
  svg_width: 650,
  svg_height: 650,
  //Below values are Calculated
  raduis: 0,
  nodeOriginX: 0,
  nodeOriginY: 0,
  totalNodes: 0
}, {
  Meeting: 4,
  Facebook: 7,
  Email: 7,
  SMS: 5,
  Text: 'Segment B',
  id: 'circleB',
  url: 'https://observablehq.com/@d3/zoomable-circle-packing',
  originX: 300,
  originY: 300,
  svg_width: 650,
  svg_height: 650,
  //Below values are Calculated
  raduis: 0,
  nodeOriginX: 0,
  nodeOriginY: 0,
  totalNodes: 0
}, {
  Meeting: 2,
  Facebook: 5,
  Email: 5,
  SMS: 3,
  Text: 'Segment C',
  id: 'circleC',
  url: 'https://observablehq.com/@d3/zoomable-circle-packing',
  originX: 300,
  originY: 300,
  svg_width: 650,
  svg_height: 650,
  //Below values are Calculated
  raduis: 0,
  nodeOriginX: 0,
  nodeOriginY: 0,
  totalNodes: 0
}];

//Calculate raduis and Node Origin for Circle A
calculateRadius_NodeOrigin(circles_config[0]);
//Container for Circle A
const circle_svg = renderCircle(circles_config[0]);
//Render all Node types
renderAllNodes(circle_svg, circles_config[0]);

//To handles sliders for Circle A
rangeSliderForNodes(circle_svg, circles_config[0]);

//To add click event for all Nodes to navigate for Circle A
addClickEventsforNodes(circles_config[0]);

//To add max red boundary for Circle A
renderRedCircle(circle_svg, circles_config[0]);

//Segment drodown change
function renderGraphOnChange() {
  const value = document.getElementById("selSegment").value;

  const filtered_config = circles_config.find((element) => {
    return element.id === value;
  })

  //Calculate raduis and Node Origin 
  calculateRadius_NodeOrigin(filtered_config);
  //Container for Customer
  const circle_svg = renderCircleforCustomer(filtered_config);
  //Render all Node types
  renderAllNodes(circle_svg, filtered_config)

  //To handles sliders for Circle A
  rangeSliderForNodes(circle_svg, filtered_config);

  //To add click event for all Nodes to navigate for Circle A
  addClickEventsforNodes(filtered_config);

  //To add max red boundary for Circle A
  renderRedCircle(circle_svg, filtered_config);
}