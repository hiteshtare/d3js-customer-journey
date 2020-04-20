// Channel Type - Effort Weight
const Weights = Object.freeze({
  Meeting: 10,
  Facebook: 8,
  Email: 5,
  SMS: 3
});

function calculateRadius(circle) {
  console.warn(`calculateRadius`);

  const raduis = circle.Meeting * Weights.Meeting + circle.Facebook * Weights.Facebook +
    circle.Email * Weights.Email + circle.SMS * Weights.SMS;

  console.log(`Raduis: ${raduis}`);

  return raduis;
}