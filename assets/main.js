function preload(){
    CANVAS_WIDTH = 1500;
    CANVAS_HEIGHT = 740;
    GROUND=540;
    score =0;
    c = new ball(200, 0, 20);
    b = [];
    tou=true;
    jumpcount=0;
}

function setup() {
    createCanvas(1500, 740);
    setInterval(function () {
        var pick = random(SAMPLE);
        b.push(new building(pick.x, pick.y));
        }, 1500);
    setInterval(function(){
        score++;
    },500);
    SAMPLE = [{
        x: 100,
        y: 20   
    }, {
        x: 100,
        y: 200
    }];
}    
function draw() {
    clear();
    strokeWeight(8);
    c.move();
    reduceLoad();
    ellipse(c.getX(), c.getY(), c.getRadius(), c.getRadius());
    line(0, GROUND, CANVAS_WIDTH, GROUND);
    textFont("Monospace");
    textSize(15);
    text("Score - "+score,1350,20);
}
function reset(){
    noLoop();
    stopped=true;
    b=[];
    textSize(30);
    text("    Game Over        \n\nYour Score is "+score,600,200); 
    score=0; 
    textSize(12);
    text("          Press Enter key to Restart",600,20);  
}
function keyPressed() {
    if(keyCode==32){
        if(c.getY()>500){
            tou=true;
            jumpcount=0;
        }
        if(tou){
            c.jump();
            jumpcount++;
        }
        if(jumpcount>=3){
                tou=false;
        }
    }else if(keyCode==ENTER){
        if(stopped){
                loop();
        }
    }
}



function reduceLoad() {
    for (let a of b) {
        rect(a.getX(), a.getY(), a.getWidth(), a.getHeight());
        a.move();
        if (a.getX() + a.getWidth() < 0) {
            b.shift();
        }
        hit = collideRectCircle(a.getX(),a.getY(),a.getWidth(),a.getHeight(),c.getX(),c.getY(),c.getRadius());
        if(hit){
            reset();
        }
    }
}
