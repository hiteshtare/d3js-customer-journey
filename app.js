//================================CIRCLE A================================//
//Config  for Circle A - Nodes Count
const circleA_config = Object({
  Meeting: 5,
  Facebook: 5,
  Email: 5,
  SMS: 36,
  Text: 'Segment A',
  id: 'absoluteCircleA',
  url: 'http://stackoverflow.com/',
  originX: 300,
  originY: 300,
  //Below values are Calculated
  raduis: 0,
  nodeOriginX: 0,
  nodeOriginY: 0,
  totalNodes: 0
});
//Calculate raduis and Node Origin for Circle A
calculateRadius_NodeOriginForAbsolute(circleA_config);
//Container for Circle A
const circleA_svg = renderCircle(circleA_config);

renderAllNodes(circleA_svg, circleA_config);

//To render graph legends
renderLegends(circleA_svg, circleA_config);

//To handles sliders for Circle A
rangeSliderForNodes(circleA_svg, circleA_config);

//To add click event for all Nodes to navigate for Circle A
addClickEventsforNodes(circleA_config);
//================================CIRCLE A================================//
//================================CIRCLE B================================//
//Config  for Circle B - Nodes Count
const circleB_config = Object({
  Meeting: 5,
  Facebook: 6,
  Email: 6,
  SMS: 15,
  Text: 'Segment B',
  id: 'circleB',
  url: 'http://stackoverflow.com/',
  originX: 300,
  originY: 300,
  //Below values are Calculated
  raduis: 0,
  nodeOriginX: 0,
  nodeOriginY: 0,
  totalNodes: 0
});
//Calculate raduis and Node Origin for Circle B
calculateRadius_NodeOrigin(circleA_config, circleB_config);
//Container for Circle B
const circleB_svg = renderCircle(circleB_config);

renderAllNodes(circleB_svg, circleB_config);
//================================CIRCLE B================================//

//================================CIRCLE C================================//
//Config for Circle C - Nodes Count
const circleC_config = Object({
  Meeting: 10,
  Facebook: 11,
  Email: 6,
  SMS: 10,
  Text: 'Segment C',
  id: 'circleC',
  url: 'http://stackoverflow.com/',
  originX: 300,
  originY: 300,
  //Below values are Calculated
  raduis: 0,
  nodeOriginX: 0,
  nodeOriginY: 0,
  totalNodes: 0
});
//Calculate raduis and Node Origin for Circle C
calculateRadius_NodeOrigin(circleA_config, circleC_config);
//Container for Circle C
const circleC_svg = renderCircle(circleC_config);

renderAllNodes(circleC_svg, circleC_config);
//================================CIRCLE C================================//