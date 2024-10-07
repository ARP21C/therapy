let state = 0;
let gui;

//variable for dismiss button
let b;

function setup(){
  createCanvas(1300, 725);
  rectMode(CENTER,CENTER);

  gui = createGui();

  //create dismiss button
  b = createButton("Dismiss", 800, 300,100,30);
}

function draw() {
  background(173, 216, 230);

  switch (state) {
    case 0:
      //do state 0 stuff

      background(173, 216, 230);

      drawGui();

      //add white rect behind text
      fill(255);
      rect(width/2, 240, 500, 100);

      //styling "welcome to" text
      textSize(10 );
      fill(0); //text color black
      textAlign(CENTER, CENTER);

      //typing "welcome to" text
      text("Welcome to NAME , our mission is to create a safe space for you to journal and rant about anything", width / 2 , 200 );
      text("that has been bothering you. This website interacts with the keys you press and the words you type" , width / 2 , 220 );
      text("to create a unique piece of artwork. We strive to transform the emotions you are feeling and whatever you" , width / 2 , 240 );
      text("are going through into something beautiful. Press dismiss and begin typing to start and when you are done" , width / 2 , 260 );
      text("press submit." , width / 2 , 280 );
     
      //pressing dismiss button goes to state 1
      if (b.isPressed) state = 1;
      break;
    case 1:
      //do state 1 stuff
      

  }
}