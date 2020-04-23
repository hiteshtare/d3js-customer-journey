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
  //Below values are Calculated
  raduis: 0,
  nodeOriginX: 0,
  nodeOriginY: 0,
  totalNodes: 0
}, {
  Meeting: 1,
  Facebook: 3,
  Email: 3,
  SMS: 2,
  Text: 'Segment D',
  id: 'circleD',
  url: 'https://observablehq.com/@d3/zoomable-circle-packing',
  originX: 300,
  originY: 300,
  //Below values are Calculated
  raduis: 0,
  nodeOriginX: 0,
  nodeOriginY: 0,
  totalNodes: 0
}];

circles_config.forEach((circle_config, index) => {
  //Calculate raduis and Node Origin for Circle A

  calculateRadius_NodeOrigin(circle_config);
  //Container for Circle A
  const circle_svg = renderCircle(circle_config);

  renderAllNodes(circle_svg, circle_config);

  //For index 0 i.e. first Circles render slider and add click for navigation
  if (index === 0) {
    //To handles sliders for Circle A
    rangeSliderForNodes(circle_svg, circle_config);

    //To add click event for all Nodes to navigate for Circle A
    addClickEventsforNodes(circle_config);

    //To add max red boundary for Circle A
    renderRedCircle(circle_svg, circle_config);
  }
});