let aSlider;
let aValue;
let bSlider;
let bValue;
let cSlider;
let cValue;
//var data;

const socket = io();

function setup () {
  noCanvas();
  aSlider = createSlider(0,100,50);
  aSlider.input(aSlide);
  bSlider = createSlider(0,100,50);
  bSlider.input(bSlide);
  cSlider = createSlider(0,100,50);
  cSlider.input(cSlide);
}

function aSlide (){
  aValue = float(aSlider.value());
    socket.emit("aValue", {
      aValue 
    })
    console.log("sending: " +aValue);
  }

function bSlide (){
  bValue = float(bSlider.value());
    socket.emit("bValue", {
      bValue 
    })
    console.log("sending: " +bValue);
  }

function cSlide (){
  cValue = float(cSlider.value());
    socket.emit("cValue", {
      cValue 
    })
    console.log("sending: " +cValue);
  }