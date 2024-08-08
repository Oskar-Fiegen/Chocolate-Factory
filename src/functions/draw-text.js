function drawText({position, text, color, size}) {
    ctx.fillStyle = color;
    if (isFontLoaded) {
        ctx.font = size + "px PressStart2PFont";
        ctx.textBaseline = "top";
        //ctx.font  = "48px serif";
        ctx.fillText(text, position.x, position.y);
        
        //ctx.fillText(text, position.x * scale - currentCamera.position.x * scale * tileSize, position.y * scale - currentCamera.position.y * scale * tileSize)
    }
}