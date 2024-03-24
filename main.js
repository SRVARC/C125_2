
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

   
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background("#ADD8E6");

    textSize(difference);
    fill('#F90093');
    text('Parth', 100, 100);
}

function modelLoaded()
{
    console.log("PoseNet is Iniatialized");
}

function gotPoses(results,error)
{
    if(error)
    {
        console.error(error);
    }
   if(results.lenght >0)
   {
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);

    
   }
}