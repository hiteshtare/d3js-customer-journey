const customer_config = [{
  Meeting: 4,
  Facebook: 10,
  Email: 10,
  SMS: 4,
  Text: 'Customer 1',
  id: 'customer1',
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
calculateRadius_NodeOrigin(customer_config[0]);
//Container for Circle A
const circle_svg = renderCircle(customer_config[0]);

renderAllNodes(circle_svg, customer_config[0])

function renderGraphOnChange() {
  const value = document.getElementById("selCustomer").value;

  const filtered_config = customer_config.find((element) => {
    return element.id === value;
  })

  calculateRadius_NodeOrigin(filtered_config);

  //Container for Customer
  const circle_svg = renderCircleforCustomer(filtered_config);

  renderAllNodes(circle_svg, filtered_config)
}