var note1,note2,note3,note4,note5;
var note1Image,note2Image,note3Image,note4Image,note5Image; 
var note1Group,note2Group,note3Group,note4Group,note5Group,
note6Group,note7Group,note8Group,note9Group,note10Group,note11Group,note12Group,note13Group,note14Group,note15Group;
var check;
var num = 0;
var gameState;
var note1Sound,note2Sound,note3Sound,note4Sound,note5Sound,note6Sound,note7Sound;
var score = 100;
function preload(){
  note1Sound = loadSound("note1.mp3");
  note2Sound = loadSound("note2.mp3");
  note3Sound = loadSound("note3.mp3");
  note4Sound = loadSound("note4.mp3");
  note5Sound = loadSound("note5.mp3");
  note6Sound = loadSound("note6.mp3");
  note7Sound = loadSound("note7.mp3");
  note1Image  = loadImage("note1.jpg");
  note2Image  = loadImage("note2.jpg");
  note3Image  = loadImage("note3.jpg"); 
  note4Image  = loadImage("note4.jpg");
  note5Image  = loadImage("note5.jpg");
  note6Image  = loadImage("note6.jpg");
  note7Image  = loadImage("note7.jpg");
  note8Image  = loadImage("note8.jpg");
 note9Image  = loadImage("note9.jpg");
 note10Image  = loadImage("note10.jpg");
note11Image  = loadImage("note11.jpg");
 note12Image  = loadImage("note12.jpg");
 note13Image  = loadImage("note13.jpg");
 note14Image  = loadImage("note14.jpg");
 note15Image  = loadImage("note15.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  check = createSprite(0,0,10,10);
  check.shapeColor = "blue";
  note1Group = new Group();
   note2Group = new Group();
   note3Group = new Group();
   note4Group = new Group();
   note5Group = new Group();
   note6Group = new Group();
   note7Group = new Group();
   note8Group = new Group();
   note9Group = new Group();
   note10Group = new Group();
   note11Group = new Group();
    note12Group = new Group();
    note13Group = new Group();
    note14Group = new Group();
    note15Group = new Group();
}

function draw() {
  background("blue");
  fill("black");
 textSize("50");
  text("Score : "+score,displayWidth-200,20);
  

  check.x = mouseX;
  check.y = mouseY;

  image(note6Image, displayWidth -100,100,50,50);
  image(note3Image, displayWidth -100,200,50,50);
  image(note2Image, displayWidth -100,300,50,50);
  image(note1Image, displayWidth -100,400,50,50);
  image(note4Image, displayWidth -100,500,50,50);
  image(note11Image, displayWidth -100,600,50,50);
  image(note13Image, displayWidth -100,700,50,50);
  

 
  if(frameCount%5===0){
    var randomNote = Math.round(random(1,15));
    if(randomNote === 1){
      note1 = new Note(1);
      note1.draw();
    }
    else if(randomNote===2){
      var note2 = new Note(2);
      note2.draw();
    } else if(randomNote===3){
      var note3 = new Note(3);
      note3.draw();
    } 
    else if(randomNote===4){
      var note4 = new Note(4);
      note4.draw();
    } 
    else if(randomNote===5){
      var note5 = new Note(5);
      note5.draw();
    } 
    else if(randomNote===6){
      var note6 = new Note(6);
      note6.draw();
    } 
    else if(randomNote===7){
      var note7 = new Note(7);
      note7.draw();
    } 
    else if(randomNote===8){
      var note8 = new Note(8);
      note8.draw();
    } 
    else if(randomNote===9){
      var note9 = new Note(9);
      note9.draw();
    } 
    else if(randomNote===10){
      var note10 = new Note(10);
      note10.draw();
    } 
    else if(randomNote===11){
      var note11 = new Note(11);
      note11.draw();
    } 
    else if(randomNote===12){
      var note12 = new Note(12);
      note12.draw();
    } 
    else if(randomNote===13){
      var note13 = new Note(13);
      note13.draw();
    } 
    else if(randomNote===14){
      var note14 = new Note(14);
      note14.draw();
    } 
    else if(randomNote===15){
      var note15 = new Note(15);
      note15.draw();
    } 
  }

  if(note6Group.isTouching(check)&&num === 0) {
    note6Group.destroyEach();
    note1Sound.play();
    var cover = createSprite(displayWidth-80,120,70,70);
    cover.shapeColor = "blue";
    score = score+100;
    num =1;
  }
  else {
    if((note1Group.isTouching(check)||note2Group.isTouching(check)||note3Group.isTouching(check)||note4Group.isTouching(check)||
    note5Group.isTouching(check)||note7Group.isTouching(check)||note8Group.isTouching(check)||note9Group.isTouching(check)||note10Group.isTouching(check)||
    note11Group.isTouching(check)||note12Group.isTouching(check)||note13Group.isTouching(check)||note14Group.isTouching(check)||note15Group.isTouching(check))&& num ===0) {
      score = score-50;
    }
    
  }
  if(note3Group.isTouching(check)&&num === 1) {
    note3Group.destroyEach();
    var cover = createSprite(displayWidth-80,220,70,70);
    note2Sound.play();
    cover.shapeColor = "blue";
    score = score+100;
    num =2;
  }
  if(note2Group.isTouching(check)&&num === 2) {
    note2Group.destroyEach();
    var cover = createSprite(displayWidth-80,320,70,70);
    note3Sound.play();
    cover.shapeColor = "blue";
    score = score+100;
    num =3;
  }
  if(note1Group.isTouching(check)&&num === 3) {
    note1Group.destroyEach();
    var cover = createSprite(displayWidth-80,420,70,70);
    note4Sound.play();
    cover.shapeColor = "blue";
    score = score+100;
    num =4;
  }
  if(note4Group.isTouching(check)&&num === 4) {
    note4Group.destroyEach();
    note5Sound.play();
    var cover = createSprite(displayWidth-80,520,70,70);
    cover.shapeColor = "blue";
    score = score+100;
    num =5;
  }
  if(note11Group.isTouching(check)&&num === 5) {
    note11Group.destroyEach();
    note6Sound.play();
    var cover = createSprite(displayWidth-80,620,70,70);
    cover.shapeColor = "blue";
    score = score+100;
    num =6;
  }
  if(note13Group.isTouching(check)&&num === 6) {
    note13Group.destroyEach();
    note7Sound.play();
    var cover = createSprite(displayWidth-80,720,70,70);
    cover.shapeColor = "blue";
    score = score+100;
    num =7;
  }
 
  if(score===0){
    fill ("red");
    textSize(72);
    text("Game Over You LOSE",0,displayHeight/2-50)
     note1Group.destroyEach();
     note2Group.destroyEach();
     note3Group.destroyEach();
     note4Group.destroyEach();
     note5Group.destroyEach();
     note6Group.destroyEach();
     note7Group.destroyEach();
     note8Group.destroyEach();
     note9Group.destroyEach();
     note10Group.destroyEach();
     note11Group.destroyEach();
     note12Group.destroyEach();
     note13Group.destroyEach();
     note14Group.destroyEach();
     note15Group.destroyEach();
  }
  if(num===7){
    fill ("yellow");
    textSize(72);
    text("YOU WIN!!",0,100)
     note1Group.destroyEach();
     note2Group.destroyEach();
     note3Group.destroyEach();
     note4Group.destroyEach();
     note5Group.destroyEach();
     note6Group.destroyEach();
     note7Group.destroyEach();
     note8Group.destroyEach();
     note9Group.destroyEach();
     note10Group.destroyEach();
     note11Group.destroyEach();
     note12Group.destroyEach();
     note13Group.destroyEach();
     note14Group.destroyEach();
     note15Group.destroyEach();
  }


  drawSprites();
}