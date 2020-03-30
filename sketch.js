let e1, e2;
let img;
var annSound;
let flag = false;

function preload() 
{
    annSound = loadSound("img/HEYGUYS2.mp3");
}

function setup() 
{
    setTimeout(hideLoader, 4928);
    createCanvas(1480, 1200);
    noStroke();
    e1 = new Eye(524, 595, 220);
    e2 = new Eye(780, 550, 220);
}

function draw() 
{
    e1.update(mouseX, mouseY);
    e2.update(mouseX, mouseY);
    e1.display();
    e2.display();
}

function Eye(tx, ty, ts) 
{
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0;
    this.update = function(mx, my)  
    {
        this.angle = atan2(my - this.y, mx - this.x);
    };

    this.display = function() 
    {
        push();
        translate(this.x, this.y);
        fill(255);
        ellipse(0, 0, this.size, this.size);
        rotate(this.angle);
        fill(0);
        ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
        pop();
    };
}

function hideLoader() 
{
    document.getElementById("loading").remove();
}

function mousePressed(event) 
{
    if((mouseX > "590" && mouseX < "840") && 
        (mouseY > "725" && mouseY < "975"))   
    { 
        if(flag === false)
        {
            document.getElementById("jaw").style.top = "770px";
            annSound.play();
        }
        else
        {
            document.getElementById("jaw").style.top = "730px";
            annSound.pause();
        }

        flag = !flag;             
    }
    else
    {
        return;
    }  
}
