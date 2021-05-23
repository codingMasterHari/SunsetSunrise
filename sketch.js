const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, backgroundImg1, backgroundImg2;

var bg, bg1, bg2, hourC, minutes, hourI, hourL, minutes1, minutes2, minutes3;
var timeOfDay;

async function getBackgroundImg() {
    //fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Toronto");
    var response1 = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var response2 = await fetch("https://worldtimeapi.org/api/timezone/Europe/London");

    //change the data to JSON format
    var responseJSON = await response.json();
    var responseJSON1 = await response1.json();
    var responseJSON2 = await response2.json();

    // write code slice the datetime in Canada and India
    var datetime = responseJSON.datetime;
    hourC = datetime.slice(11, 13);
    minutes1 = datetime.slice(11, 16);


    var datetime1 = responseJSON1.datetime;
    hourI = datetime1.slice(11, 13);
    minutes2 = datetime1.slice(11, 16);

    var datetime2 = responseJSON2.datetime;
    hourL = datetime2.slice(11, 13);
    minutes3 = datetime2.slice(11, 16);


    // add conditions to change the background images from sunrise to sunset
    if(hourC >= 00 && hourC <= 02) {
        bg = "sunset12.png";
    } else if(hourC > 02 && hourC <= 04) {
        bg = "sunset11.png";
    } else if(hourC > 04 && hourC <= 06) {
        bg = "sunset10.png";
    } else if(hourC > 06 && hourC <= 08) {
        bg = "sunrise2.png";
    } else if(hourC > 08 && hourC <= 10) {
        bg = "sunrise3.png";
    } else if(hourC > 10 && hourC <= 12) {
        bg = "sunrise4.png";
    } else if(hourC > 12 && hourC <= 14) {
        bg = "sunrise5.png";
    } else if(hourC > 14 && hourC <= 16) {
        bg = "sunrise6.png";
    } else if(hourC > 16 && hourC <= 18) {
        bg = "sunset7.png";
    } else if(hourC > 18 && hourC <= 20) {
        bg = "sunset9.png";
    } else if(hourC > 20 && hourC <= 22) {
        bg = "sunset10.png";
    } else if(hourC > 22 && hourC < 00) {
        bg = "sunset11.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

    // add conditions to change the background images from sunrise to sunset
    if(hourL >= 00 && hourL <= 02) {
        bg1 = "sunset12.png";
    } else if(hourL > 02 && hourL <= 04) {
        bg1 = "sunset11.png";
    } else if(hourL > 04 && hourL <= 06) {
        bg1 = "sunset10.png";
    } else if(hourL > 06 && hourL <= 08) {
        bg1 = "sunrise2.png";
    } else if(hourL > 08 && hourL <= 10) {
        bg1 = "sunrise3.png";
    } else if(hourL > 10 && hourL <= 12) {
        bg1 = "sunrise4.png";
    } else if(hourL > 12 && hourL <= 14) {
        bg1 = "sunrise5.png";
    } else if(hourL > 14 && hourL <= 16) {
        bg1 = "sunrise6.png";
    } else if(hourL > 16 && hourL <= 18) {
        bg1 = "sunset7.png";
    } else if(hourL > 18 && hourL <= 20) {
        bg1 = "sunset9.png";
    } else if(hourL > 20 && hourL <= 22) {
        bg1 = "sunset10.png";
    } else if(hourL > 22 && hourL < 00) {
        bg1 = "sunset11.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg1 = loadImage(bg1);

    // add conditions to change the background images from sunrise to sunset
    if(hourI >= 00 && hourI <= 02) {
        bg2 = "sunset12.png";
    } else if(hourI > 02 && hourI <= 04) {
        bg2 = "sunset11.png";
    } else if(hourI > 04 && hourI <= 06) {
        bg2 = "sunset10.png";
    } else if(hourI > 06 && hourI <= 08) {
        bg2 = "sunrise2.png";
    } else if(hourI > 08 && hourI <= 10) {
        bg2 = "sunrise3.png";
    } else if(hourI > 10 && hourI <= 12) {
        bg2 = "sunrise4.png";
    } else if(hourI > 12 && hourI <= 14) {
        bg2 = "sunrise5.png";
    } else if(hourI > 14 && hourI <= 16) {
        bg2 = "sunrise6.png";
    } else if(hourI > 16 && hourI <= 18) {
        bg2 = "sunset7.png";
    } else if(hourI > 18 && hourI <= 20) {
        bg2 = "sunset9.png";
    } else if(hourI > 20 && hourI <= 22) {
        bg2 = "sunset10.png";
    } else if(hourI > 22 && hourI < 00) {
        bg2 = "sunset11.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg2 = loadImage(bg2);
}

function preload() {
    // create getBackgroundImg() here
    getBackgroundImg();

}

function setup(){
    createCanvas(1440,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    // add condition to check if any background image is there to add
    background("black");

    fill("red");
    textSize(30);

    // text(hourC+":00", 150, 400);
    // text("CANADA", 170, 430);

    // text(hourL+":00", 630, 400);
    // text("LONDON", 650, 430);

    // text(hourI+":00", 1100, 400);
    // text("INDIA", 1150, 430);

    if(backgroundImg)
        image(backgroundImg, 0, 0, width/3, height/2);
        Engine.update(engine);

        // write code to display time in correct format here
        text(minutes1, 150, 400);
        text("CANADA", 130, 430);

    if(backgroundImg1) 
        image(backgroundImg1, width/3, 0, width/3, height/2);
        Engine.update(engine);

        // write code to display time in correct format here
        text(minutes3, 630, 400);
        text("LONDON", 615, 430);

    if(backgroundImg2) 
        image(backgroundImg2, width/1.5, 0, width/3, height/2);
        Engine.update(engine);

        // write code to display time in correct format here
        text(minutes2, 1145, 400);
        text("TOKYO", 1135, 430);

}
