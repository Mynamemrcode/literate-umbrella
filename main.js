status="";
object=[];
function preload() {
    imagee = loadImage("dog_cat.jpg");
}
function setup() {
    canvas = createCanvas(800,500);
    canvas.center();

    obdt = ml5.objectDetector('cocossd', modload);
    document.getElementById("stat").innerHTML = "Status : Detecting Objects";
}

function modload() {
    console.log("Loaded");
    status=true;
    obdt.detect(imagee, gotit);
}

function gotit(result, error) {
    if(error) {
        console.log(error);
    }
    if(result) {
        console.log(result);
        object = result;
    }

}

function draw() {
    image(imagee, 0,0,800,500);
    if(status != "") {
        for(var i=0; i < object.length; i++){
            document.getElementById("stat").innerHTML = "Status : Detected And Drawing";
            fill("Blue");
            percentenator = floor(object[i].confidence * 100);
            console.log(object[i].confidence);
            text(object[i].label + percentenator + "%", object[i].x, object[i].y);
            noFill()
            stroke("Blue");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }

    }
}