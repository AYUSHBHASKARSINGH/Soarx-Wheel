let rotateClockwise = true;

function startRotation() {
  const outerCircle = document.querySelector('.outer-circle');
  outerCircle.style.transition = 'transform 0.3s ease-in-out';
  outerCircle.style.transform = 'rotate(45deg)';
  displayRotationMessage("Wheel is rotating!");
  updateHoverText("Wheel is rotating!");
}

function stopRotation() {
  const outerCircle = document.querySelector('.outer-circle');
  outerCircle.style.transition = 'transform 0.3s ease-in-out';
  outerCircle.style.transform = 'rotate(0deg)';
  displayRotationMessage("");
  updateHoverText("Hover to Rotate");
}

function toggleRotationDirection() {
  rotateClockwise = !rotateClockwise;
  startRotation();
}

function changeCircleSize(value) {
  const outerCircle = document.querySelector('.outer-circle');
  const innerCircle = document.querySelector('.inner-circle');

  outerCircle.style.width = `${value}px`;
  outerCircle.style.height = `${value}px`;

  const innerCircleSize = value / 2;
  innerCircle.style.width = `${innerCircleSize}px`;
  innerCircle.style.height = `${innerCircleSize}px`;
}

function displayRotationMessage(message) {
  const rotationMessage = document.getElementById('rotationMessage');
  rotationMessage.textContent = message;
}

function updateHoverText(text) {
  const hoverText = document.getElementById('hoverText');
  hoverText.textContent = text;
}
