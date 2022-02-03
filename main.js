canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

nasa_mars_images_array=["nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg"];

random_number=Math.floor(Math.random()*4);
console.log(random_number);

background_image=nasa_mars_images_array[random_number];
rover_image="rover.png";

rover_x=10;
rover_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=upladrover;
    rover_imgTag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upladrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keyPress=e.keyCode;
    console.log(keyPress);

    if(keyPress == "38"){
        up();
        console.log("up");
    }

    if(keyPress == "37"){
        left();
        console.log("left");
    }

    if(keyPress == "40"){
        down();
        console.log("down");
    }

    if(keyPress == "39"){
        right();
        console.log("right");
    }
}

function up(){

    if(rover_y >= 0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed, X="+rover_x+ ", Y="+rover_y);
        uploadBackground();
        upladrover();
    }
}

function down(){

    if(rover_y <= 500){
    rover_y=rover_y+10;
    console.log("when down arrow is pressed, X="+rover_x+ ", Y="+rover_y);
    uploadBackground();
    upladrover();
    }
}

function left(){

    if(rover_x >= 0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, X="+rover_x+ ", Y="+rover_y);
        uploadBackground();
        upladrover();
    }
}

function right(){

    if(rover_x <= 700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed, X="+rover_x+ ", Y="+rover_y);
        uploadBackground();
        upladrover();
    }
}