class Camera {
    constructor({position, zoom}) {
      this.position = position;
      this.zoom = zoom;
      this.screenTiles = {w: Math.ceil(canvasW/(tileSize*scale)), h: 10}
      
  
    }
  
    update() {
      this.screenTiles = {w: Math.ceil(canvasW/(tileSize*scale)), h: 10}
      for (const i of touch.lastActions) {
        if (i[1] == 2 && i[0] == "Move" && i[2] == "Canvas") {
          
          currentCamera.position.x += i[4].x/scale/tileSize;
          currentCamera.position.y += i[4].y/scale/tileSize;

        }
      }
      
    }
  }