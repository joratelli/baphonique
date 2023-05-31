var slider;
var sliderGlobal;
function setup() {
    createCanvas(200, 200);
    slider = createSlider(10,100,65);
  }
  


  function draw() {
    background(0);
    fill(slider.value(),slider.value(),slider.value());
    rect(100, 100, 50, 50);
    sliderGlobal = slider.value();
  }