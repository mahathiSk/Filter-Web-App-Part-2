function preload(){
}

function setup() {
canvas1=createCanvas(300,300)
canvas1.center();
video= createCapture(VIDEO);
video.size(300, 300);
video.hide();

posenet= ml5.poseNet(video,modelLoaded)
posenet.on('pose' ,gotPoses);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    console.log("nose-x =" + results[0].pose.nose.x);
    console.log("nose-y =" + results[0].pose.nose.y);
    }
    }
    
    function modelLoaded() {
    console.log("Posent Is Intialized");
    }
    
    function snapshot() {
        save("clown_nose_image.png");
    }

    function snapshot() {
        save("clown_nose_image.png");
    }
    
    function draw() {
        image(video, 0, 0, 300, 300);
    }




