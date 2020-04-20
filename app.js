//================================CIRCLE A================================//
//Config  for Circle A - Nodes Count
const circleA_config = Object({
  Meeting: 5,
  Facebook: 10,
  Email: 11,
  SMS: 6,
  Text: 'Segment A',
  originX: 300,
  originY: 300,
  //Below values are Calculated
  raduis: 0,
  nodeOriginX: 0,
  nodeOriginY: 0,
  totalNodes: 0
});
//Calculate raduis and Node Origin for Circle A
calculateRadius_NodeOrigin(circleA_config);
//Container for Circle A
const circleA_svg = renderCircle(circleA_config);

renderAllNodes(circleA_svg, circleA_config);

//To render graph legends
renderLegends(circleA_svg, circleA_config);
//================================CIRCLE A================================//
//================================CIRCLE B================================//
//Config  for Circle B - Nodes Count
const circleB_config = Object({
  Meeting: 5,
  Facebook: 6,
  Email: 6,
  SMS: 15,
  Text: 'Segment B',
  originX: 300,
  originY: 300,
  //Below values are Calculated
  raduis: 0,
  nodeOriginX: 0,
  nodeOriginY: 0,
  totalNodes: 0
});
//Calculate raduis and Node Origin for Circle B
calculateRadius_NodeOrigin(circleB_config);
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
  SMS: 5,
  Text: 'Segment C',
  originX: 300,
  originY: 300,
  //Below values are Calculated
  raduis: 0,
  nodeOriginX: 0,
  nodeOriginY: 0,
  totalNodes: 0
});
//Calculate raduis and Node Origin for Circle C
calculateRadius_NodeOrigin(circleC_config);
//Container for Circle C
const circleC_svg = renderCircle(circleC_config);

renderAllNodes(circleC_svg, circleC_config);
//================================CIRCLE C================================//