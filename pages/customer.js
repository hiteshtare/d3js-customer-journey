const customer_config = [{
  Meeting: 4,
  Facebook: 10,
  Email: 10,
  SMS: 4,
  Text: 'Customer 1',
  id: 'customer1',
  url: '../pages/bubble.html?segment=circleA&&customer=customer1',
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
  Facebook: 8,
  Email: 8,
  SMS: 7,
  Text: 'Customer 2',
  id: 'customer2',
  url: '../pages/bubble.html?segment=circleA&&customer=customer2',
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
  Meeting: 6,
  Facebook: 10,
  Email: 10,
  SMS: 7,
  Text: 'Customer 3',
  id: 'customer3',
  url: '../pages/bubble.html?segment=circleA&&customer=customer3',
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
  Facebook: 10,
  Email: 10,
  SMS: 4,
  Text: 'Customer 4',
  id: 'customer4',
  url: '../pages/bubble.html?segment=circleB&&customer=customer4',
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
  Facebook: 8,
  Email: 8,
  SMS: 7,
  Text: 'Customer 5',
  id: 'customer5',
  url: '../pages/bubble.html?segment=circleB&&customer=customer5',
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
  Meeting: 6,
  Facebook: 10,
  Email: 10,
  SMS: 7,
  Text: 'Customer 6',
  id: 'customer6',
  url: '../pages/bubble.html?segment=circleB&&customer=customer6',
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
  Facebook: 8,
  Email: 8,
  SMS: 7,
  Text: 'Customer 7',
  id: 'customer7',
  url: '../pages/bubble.html?segment=circleB&&customer=customer7',
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
  Facebook: 10,
  Email: 10,
  SMS: 4,
  Text: 'Customer 8',
  id: 'customer8',
  url: '../pages/bubble.html?segment=circleC&&customer=customer8',
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
  Facebook: 8,
  Email: 8,
  SMS: 7,
  Text: 'Customer 9',
  id: 'customer9',
  url: '../pages/bubble.html?segment=circleC&&customer=customer9',
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
  Meeting: 6,
  Facebook: 10,
  Email: 10,
  SMS: 7,
  Text: 'Customer 10',
  id: 'customer10',
  url: '../pages/bubble.html?segment=circleC&&customer=customer10',
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
  Facebook: 10,
  Email: 10,
  SMS: 4,
  Text: 'Customer 11',
  id: 'customer11',
  url: '../pages/bubble.html?segment=circleC&&customer=customer11',
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
  Facebook: 8,
  Email: 8,
  SMS: 7,
  Text: 'Customer 12',
  id: 'customer12',
  url: '../pages/bubble.html?segment=circleC&&customer=customer12',
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
  Meeting: 6,
  Facebook: 0,
  Email: 0,
  SMS: 0,
  Text: 'Customer 13',
  id: 'customer13',
  url: '../pages/bubble.html?segment=circleC&&customer=customer13',
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

//Customer drodown change
function renderGraphOnChange() {
  const value = document.getElementById("selCustomer").value;

  const filtered_config = customer_config.find((element) => {
    return element.id === value;
  })

  //Calculate raduis and Node Origin 
  calculateRadius_NodeOrigin(filtered_config);
  //Container for Customer
  const circle_svg = renderCircleforCustomer(filtered_config);
  //Render all Node types
  renderAllNodes(circle_svg, filtered_config)

  //To add click event for all Nodes to navigate for Circle A
  addClickEventsforNodes(filtered_config);
}