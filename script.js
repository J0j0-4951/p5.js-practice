function setup() //called once when the program starts
{
createCanvas(400,400);
background(220);

}

function draw() //this runs in a loop to update the display
{
    point(150,250);
    

    point(0,400,0,400)
    rect(0,0,100,100);
    rect(100,100,100,100);
    rect(200,200,100,100);
    rect(300,300,100,100);
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