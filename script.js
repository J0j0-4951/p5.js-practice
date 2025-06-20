function setup() //called once when the program starts
{
createCanvas(400,400);
background(220);
    translate(width/2, height/2); //move origin to cneter of canvas
    draw();
    drawAxesWithTicks(); //draws the axes
}

function draw() //this runs in a loop to update the display

{
    point(150,250);
     line(0,0,400,400); 
     
     if(mouseIsPressed)
     {
        ellipse(mouseX, mouseY, 100,100);
     }
     /*
    rect(0,0,100,100);
    rect(100,100,100,100);
    rect(200,200,100,100);
    rect(300,300,100,100);
*/
}

function drawAxes()
{
stroke(0);
strokeWeight(2);
line(-400, 0, 400);
line(0, -height / 2, 0, height / 2);

fill(0);
noStroke();
textSize(12);
textAlign(CENTER, CENTER);
}

for( let x= -400; x<= 400; x+= 10) {
stroke(0);
strokeWeight(1); //vertical lines
line(x,-5,x,5); //horizontal lines



}