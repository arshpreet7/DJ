song1="";
song2="";
scorelw=0;
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
function preload()
{
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}
function setup()
{
canvas = createCanvas(700,700);
canvas.center();

video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("Model is loaded");
}
function gotPoses(results)
{
    if (results.length > 0) 
    {
        console.log(results);
        scorelw = results[0].pose.keypoints[9].score;
        console.log("score of left wrist= " + scorelw);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("left wrist x = " + leftwristX + "left wrist y = " + leftwristY);
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("right wrist x = "+ rightwristX + "right wrist y = " + rightwristY);
    }
}
function draw()
{
image(video, 0, 0, 700, 700);
fill("#FF0000");
stroke("#FF0000");
if (scorelw > 0.2) 
{
    circle(leftwristX, leftwristY, 20);
    InNumberleftwristy = Number(leftwristY);
    remove_decimal = floor(InNumberleftwristy);
    volume = remove_decimal/500;
    document.getElementById("hp").innerHTML = "Peter pan theme";
    loadSound("music.mp3");
}
}
