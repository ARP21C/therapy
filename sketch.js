let textVisible = true; //variable to track text visibility
let gui;
let cb1;
let cb1Visible = true;

function setup() {
  createCanvas(1300, 725);
 
   
    gui = createGui();
    cb1 = createButton("Dismiss", 800, 300,100,30);
    
    rectMode(CENTER,CENTER);


}

function draw() {
  background(173, 216, 230);

//drawing created by rect
fill(255);
rect(210,680,300,20);
//created by text
textSize(10 );
   fill(0); //text color black
   textAlign(LEFT, LEFT);
text("Created by:Allison Pryor,Zoe,& Lindsay", 65,680);


//display text "welcome to"
if (textVisible) {
  fill(255);
  rect(width/2, 240, 500, 100);
   //set text properties
   textSize(10 );
   fill(0); //text color black
   textAlign(CENTER, CENTER);
  text("Welcome to NAME , our mission is to create a safe space for you to journal and rant about anything", width / 2 , 200 );
  text("that has been bothering you. This website interacts with the keys you press and the words you type" , width / 2 , 220 );
  text("to create a unique piece of artwork. We strive to transform the emotions you are feeling and whatever you" , width / 2 , 240 );
  text("are going through into something beautiful. Press dismiss and begin typing to start and when you are done" , width / 2 , 260 );
  text("press submit." , width / 2 , 280 );
}

//text buttone
if (cb1Visible) {
  drawGui();
  
  if (cb1.val) {
    textVisible = false;
  }
}
if (cb1.val) {
  cb1Visible = false;
}

}

  



