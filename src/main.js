
var MapDataRaw = ""
var BackgroundTileData
var ForegroundTileData

const canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


const tileSize = 32;
var scale = 2;

window.addEventListener("resize", resizeCanvas);




currentCamera = new Camera({position: {x: 0.0, y:0.0}, zoom: 1});



var test_var = undefined;



const deadspace = new GUIDeadspace({size: {w: 100, h: 100}});




const touch = new TouchHandler;

let tilemap_pressed = false;








timesyncanimref = new Date()






async function readTileData() {
  try {
    const response = await fetch("./assets/tilesets/background-tiles.json");
    
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const text = await response.json();
    BackgroundTileData =  text
    
  } catch (e) {
    console.error(e);
  }
}

async function readForegroundTileData() {
  try {
    const response = await fetch("./assets/tilesets/foreground-tiles.json");
    
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const text = await response.json();
    ForegroundTileData =  text
    
  } catch (e) {
    console.error(e);
  }
}

async function readMapData() {
  
  try {
      const response = await fetch("./assets/maps/World_1.map");
      
      if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
      }
  
      const text = await response.text();
      MapDataRaw = text
      
  } catch (e) {
      console.error(e);
  }
}

let gs
let ms
let ss

async function main() {
  await readTileData()
  await readMapData()
  await readForegroundTileData();
  console.log(BackgroundTileData)
  resizeCanvas();
  gs = new GameScreen();
  gs.setup();
  ms = new MainMenuScreen();
  ms.setup();
  ss = new SettingsScreen();
  ss.setup();
  currentScreen = ms;
  

  animate()
}


function animate() {
  
  ctx.imageSmoothingEnabled = false;
  window.requestAnimationFrame(animate);
  ctx.fillStyle = 'white';
  ctx.fillRect(0,0, canvas.width, canvas.height);
  

  //gs.draw();
  currentScreen.draw();
  //drawText({position: {x:0,y:0}, text: "Hello World", color: 'black', size: 48});
  //deadspace.draw();


  
  
}


main();