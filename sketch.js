const TEAMS = ['TRIP TO THE MTNS', 'TRAIN RIDE', '4 Course French Restaraunt date', 'BEACH TRIP', 'APEX COACHING'] 
let randomIndex, logo, y, isWinner;
let selectedTeam;
let isRunning;
let initText = "CLICK TO ROLL THEM DICE LOVE."

function preload() {
  logo = loadImage("bday-box.png")
  font = loadFont("PressStart2P-Regular.ttf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(13)
  textSize(32);
  textAlign(CENTER, CENTER)
  textFont(font)
  imageMode(CENTER)
  isRunning = false
  fill("blue");
  selectedTeam = initText
  y=0;
  isWinner = false;
}

function draw() {
  if (isWinner == true) {
   background(random(255), random(255), random(255))
    selectedTeam ='11,700 APEX COINS'
     text("I love you catrina cortes", width/2, height * .75)
  } else {
    background('yellow')
  }
  
  if (selectedTeam == initText) {
    textSize(15)
    } else {
    textSize(28)
  }
  
  if (isRunning) {
    isWinner = false;
    randomIndex = floor(random(TEAMS.length))
    selectedTeam = TEAMS[randomIndex]
    text(selectedTeam, width/2, height/2)
    if (y < height/2) {
    ellipse(width/2, y, 10, 10)
    text(selectedTeam, width/2, height/2)
    // text(selectedTeam, width/2, height/2)
    y+=5 
    } else {
      y=-10;
      isWinner=true
      isRunning = false;
      TEAMS.splice(randomIndex)
    }
  } else {
    // text(selectedTeam, width/2, height/2)
  }
  text(selectedTeam, width/2, height/2)
  image(logo, width/2, height * .87);
  logo.resize(125, 105)
}

function mousePressed() {
  isRunning = !isRunning
}