var canvasW = 0.0;
var canvasH = 0.0;
var screenW = 0.0;
var screenH = 0.0;

function resizeCanvas() {
    const ratio = Math.ceil(window.devicePixelRatio);
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvasW = canvas.width;
    canvasH = canvas.height;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    screenW = window.innerWidth;
    screenH = window.innerHeight;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);


    console.log("resize");
    scale = window.innerHeight/10/tileSize;


    deadspace.size.w = window.innerWidth * 90 / 100

    deadspace.size.h = window.innerHeight * 90 / 100

}