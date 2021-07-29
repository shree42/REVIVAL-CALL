var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;                        //C41// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles; // C41//SA
var cars = [];

var house,houseImg;
var p1,p2,p3,p4,p5,p6,p7,p8
 var c1,c2,c3,c4,c5;

 var moj;

  


function preload() {
  backgroundImage = loadImage("./assets/bg.jpg");
  car1_img = loadImage("./assets/ambulance.png");
  car2_img = loadImage("./assets/ambulance.png");
  track = loadImage("./assets/track2.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png"); // C41//SA
  obstacle2Image = loadImage("./assets/obstacle2.png"); // C41//SA

  moj=loadSound("assets/sound.mp3")


  houseImg=loadImage("assets/house1.png")

  p1=loadImage("assets/p9.png")
  p2=loadImage("assets/p10.png")
  p3=loadImage("assets/p10.png")
  p4=loadImage("assets/p4.png")
  p5=loadImage("assets/p5.png")
  //p6=loadImage("assets/p6.png")
  p7=loadImage("assets/p7.png")
  p8=loadImage("assets/p8.png")

  c1=loadImage("assets/c1.png")
  c2=loadImage("assets/c2.png")
  c3=loadImage("assets/c3.png")
  c4=loadImage("assets/c4.png")
  c5=loadImage("assets/c5.png")

  
 }

function setup() {
  canvas = createCanvas(windowWidth-400, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
