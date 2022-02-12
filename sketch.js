const TEAMS = ['TRIP TO THE MTNS', 'TRAIN RIDE','A barrage of puppies', 'Bida Manda Date', 'BEACH TRIP', 'Big Gigantic Poos', 'A few corn off the cob', 'An actual viking ship'] 
let randomIndex, logo, y, isWinner, isRunning;
let selectedTeam;
let pic2, pic4, pic5, pic6;
let ghost;
let initText = "CLICK TO ROLL THEM DICE LOVE."
let ghostX;
function preload() {
  logo = loadImage("bday-box.png")
  font = loadFont("PressStart2P-Regular.ttf")
  ghost = loadImage("pacman-ghost.png")
  pic4 = loadImage("pic4.jpg")
  pic6 = loadImage("pic6_.jpg") 
  pic2 = loadImage("pic2.jpg") 
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
  ghostX=0
}

function draw() {
  if (isWinner == true) {
   background(random(255), random(255), random(255))
   fill("yellow")
   image(pic2, width/2, height/2 );
   image(pic4, 235, height/2);
   image(pic6, width -200, height/2 );
    selectedTeam ='11,700 APEX COINS'
      text("QJTKX-D64HQ-H3F2W-CM6RK-R79QZ", width/2, height/3)
     textSize(12)
     text("Getting to know you has been the best part of the last 12 years of my life", width/2, height * .75)
     text("And hopefully the next 12 too", width/2, height * .95)
     text("I love you catrina cortes", width/2, height -20)
  } else {
    background('yellow')
  }
  
  if (selectedTeam == initText) {
    textSize(15)
    } else {
    textSize(28)
  }
  
  if (isRunning) {
    image(logo, width/2, height * .87);
    image(ghost, ghostX, 120);
    isWinner = false;
    textSize(12)
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
  ghost.resize(50,50)
  ghostX+=8
}

function mousePressed() {
  isRunning = !isRunning
}