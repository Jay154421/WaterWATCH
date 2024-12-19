const currentMeterValue = document.getElementById("currentMeterValue");
const cubicMeterValue = document.getElementById("cubicMeterValue");
const currentMeterProgress = document.querySelector(
  ".current-meter .progress"
);

let isHolding = false;
let currentValue = 0;
let cubicValue = 0;

function updateMeterValues() {
  currentMeterValue.textContent = currentValue.toFixed(3);
  cubicMeterValue.textContent = cubicValue.toFixed(3);

  // Update the progress circle
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (currentValue / 100) * circumference;
  currentMeterProgress.style.strokeDasharray = `${
    circumference - offset
  } ${offset}`;

  // Reset currentValue if it exceeds 100
  if (currentValue >= 100) {
    currentValue = 0; // Reset to 0
  }
}

function incrementMeter() {
  if (isHolding) {
    currentValue += 0.1;
    cubicValue += 0.001;
    updateMeterValues();
    requestAnimationFrame(incrementMeter);
  }
}

function startHolding() {
  isHolding = true;
  incrementMeter();
}

function stopHolding() {
  isHolding = false;
  currentValue = 0;
  updateMeterValues();
}

// Touch events for mobile
document
  .querySelector(".current-meter")
  .addEventListener("touchstart", startHolding);
document
  .querySelector(".current-meter")
  .addEventListener("touchend", stopHolding);

// Mouse events for desktop
document
  .querySelector(".current-meter")
  .addEventListener("mousedown", startHolding);
document
  .querySelector(".current-meter")
  .addEventListener("mouseup", stopHolding);
document
  .querySelector(".current-meter")
  .addEventListener("mouseleave", stopHolding);

// Prevent default touch behavior to avoid scrolling while interacting with the meter
document
  .querySelector(".current-meter")
  .addEventListener("touchmove", (e) => e.preventDefault());