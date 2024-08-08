class GUIDeadspace {
    constructor({size}) {
      this.deadspaceCSS = document.querySelector(':root');
      this.size = size;
    }
    
    draw() {
        ctx.strokeStyle  = "red";
        ctx.lineWidth = 5;
        ctx.strokeRect(window.innerWidth/2 - this.size.w/2, window.innerHeight/2 - this.size.h /2, this.size.w, this.size.h)
    }
  }


function CDPTSP(vec2){ //convertDeadspacePostionToScreenPos
  return new Vector2(vec2.x + (screenW-deadspace.size.w)/2, vec2.y  + (screenH-deadspace.size.h)/2 )
}

function CSPTDP(vec2){ //convertScreenPosPostionToDeadspace
  return new Vector2(vec2.x - (screenW-deadspace.size.w)/2, vec2.y  - (screenH-deadspace.size.h)/2 )
}
