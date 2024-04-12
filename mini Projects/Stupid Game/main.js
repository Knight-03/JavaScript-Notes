var moveButton = document.querySelector(".move");
var staticButton = document.querySelector(".btn");
var animationPaused  = false;
var lastTranformValue = "";


staticButton.addEventListener("click", function() {

  if (!animationPaused) {

    var computedStyle = window.getComputedStyle(moveButton);
    // console.log(computedStyle);
    lastTranformValue = computedStyle.getPropertyValue("transform");
    // console.log(lastTranformValue);
    moveButton.style.animationPlayState = "paused";
    animationPaused = true;
    staticButton.textContent = "Start";
  } 
  else {
 
    moveButton.style.animationPlayState = "running";
    moveButton.style.animation = "moveRight 10s infinite";
    moveButton.style.transform = lastTranformValue;
    animationPaused = false;
    staticButton.textContent = "Stop";
  }
});