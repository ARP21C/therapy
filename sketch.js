let textVisible = true; //variable to track text visibility
let gui;
let cb1;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
    //set text properties
    textSize(10 );
    fill(0); //text color black
    textAlign(CENTER, CENTER);
    gui = createGui();
    cb1 = createButton("Press", width / 2, 400,50,50);

}

function draw() {
  background(173, 216, 230);
//display text
if (textVisible) {
  text("Welcome to NAME , our mission is to create a safe space for you to journal and rant about anything", width / 2 , 200 );
  text("that has been bothering you. This website interacts with the keys you press and the words you type" , width / 2 , 220 );
  text("to create a unique piece of artwork. We strive to transform the emotions you are feeling and whatever you" , width / 2 , 240 );
  text("are going through into something beautiful. Begin typing to start and whenever you are done press ___" , width / 2 , 260 );
}
drawGui();
if (cb1.val) {
  textVisible = false;
}
}

  



//function to make text disappear when user begins typing
//function keyPressed() {
 // textVisible = false;
//}

