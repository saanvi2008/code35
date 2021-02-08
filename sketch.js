var ball,position;

var database;

function setup(){
    //to set the database connection
    database = firebase.database();

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    console.log(database);

    //on function is used to read the data
    var ballpos = database.ref('ball/position');
    ballpos.on("value", readpos, showError);
    //it has 3 parameters 1 is the to read value 
    // second means function name and third is optional
    //ref is for reference

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    //set is for writing
    database.ref('ball/position').set({
    'x' : position.x + x,
    'y' : position.y + y
    })
}

function readpos(data){
    //val means to get the value
     position = data.val();
     console.log(position.x);

     ball.x = position.x;
     ball.y = position.y;
}
function showError(){
    console.log(showError);
}