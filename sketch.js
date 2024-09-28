function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(173, 216, 230);
  //set text properties
  textSize(10 );
  fill(0); //text color black
  textAlign(CENTER, CENTER);
  //display text
  text("Welcome to NAME , our mission is to create a safe space for you to journal and rant about anything", width / 2 , 200 );

  text("that has been bothering you. This website interacts with the keys you press and the words you type" , width / 2 , 220 );
  text("to create a unique piece of artwork. We strive to transform the emotions you are feeling and whatever you" , width / 2 , 240 );
  text("are going through into something beautiful. Begin typing to start and whenever you are done press ___" , width / 2 , 260 );
}
