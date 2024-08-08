class TouchHandler {
    constructor() {
        this.lastActions = []
        this.lastTouchPostions = []
        var self = this;
        
        document.addEventListener("touchstart", function(e) {return self.touchstart(e);}, {passive:false});
        document.addEventListener("touchend", function(e) {return self.touchend(e);}, {passive:false});
        document.addEventListener("touchmove", function(e) {return self.touchmove(e);}, {passive:false});
        this.currentElement = undefined;
       
    }
    
    checkIfOnCanvas(vec2) {
        for (const i of currentScreen.GUI.elements) {
            
            if (i.interactable) {
                
                
                let aabb = convertAABBtoDeadspace(new AABB({position: i.aabb.position.multNum(scale), size: i.aabb.size.multNum(scale)}))
                console.log(aabb)
                if (i.style.centered_x) {aabb.position.x = screenW/2 + i.aabb.position.x * scale - (i.aabb.size.x/2)*scale}
                if (i.style.centered_y) {aabb.position.y = screenH/2 + i.aabb.position.y * scale - (i.aabb.size.y/2)*scale}
                console.log("test:" + aabb.position.y + ":" + aabb.size.y)
                //else {}
                console.log(vec2)
                if (checkIfPointIsInAABB(vec2, aabb )) {i.pressed = true; return false;}
            }
        }
        return true
    }

    touchstart(e) {
        if (e.touches) {
            
            let positions = []
            let onCanvas = true
            for (let i = 0; i < e.touches.length; i++) {
                positions.push(new Vector2(e.touches[i].pageX, e.touches[i].pageY))
                if (!this.checkIfOnCanvas(new Vector2(e.touches[i].pageX, e.touches[i].pageY))) {
                    onCanvas = false;
                }
            }
            if (onCanvas) {
                this.lastActions.push( [ "Press", e.touches.length, "Canvas", positions, undefined]);
                
                if (this.currentElement == undefined) this.currentElement = "Canvas" 
            }
            else {this.lastActions.push( [ "Press", e.touches.length, "GUI", positions, undefined]); if (this.currentElement == undefined) this.currentElement = "GUI"}
            
        }
        this.lastTouchPostions = [];
        for (const i of e.touches) {
            this.lastTouchPostions.push(new Vector2(i.pageX, i.pageY));
        }
        e.preventDefault();
    }
    touchmove(e) {
        if (e.touches) {
            if (this.lastTouchPostions.length > 0) {
                
                    if (e.touches.length == this.lastTouchPostions.length) {
                        let moves = []
                        let positions = []
                        let onCanvas = true;
                        for (let i = 0; i < this.lastTouchPostions.length; i++) {
                            moves.push(this.lastTouchPostions[i].sub(new Vector2(e.touches[i].pageX, e.touches[i].pageY)))
                            positions.push(new Vector2(e.touches[i].pageX, e.touches[i].pageY))
                            
                        }
                        
                        //var movT1 = this.lastTouchPostions[0].sub(new Vector2(e.touches[0].pageX, e.touches[0].pageY))
                        //var movT2 = this.lastTouchPostions[1].sub(new Vector2(e.touches[1].pageX, e.touches[1].pageY))
                        //this.lastActions.push( [ "Move", 2, "Canvas", [ new Vector2(e.touches[0].pageX, e.touches[0].pageY), new Vector2(e.touches[1].pageX, e.touches[1].pageY) ], calcAverage([movT1, movT2])]) 
                        
                        if (this.currentElement == "Canvas") this.lastActions.push( [ "Move", e.touches.length, "Canvas", positions, calcAverage(moves)])
                        else this.lastActions.push( [ "Move", e.touches.length, "GUI", positions, calcAverage(moves)]) 

                    }              
                
                
            }
            this.lastTouchPostions = [];
            for (const i of e.touches) {
                this.lastTouchPostions.push(new Vector2(i.pageX, i.pageY));
            }
                	                                                                                                                                                                                                                                                            
          }
          e.preventDefault();
    }
    touchend(e) {
        
        if (this.currentElement == "Canvas") this.lastActions.push( ["Release", this.lastTouchPostions.length, "Canvas", this.lastTouchPostions] )
        else this.lastActions.push( ["Release", this.lastTouchPostions.length, "GUI", this.lastTouchPostions] )
        this.lastTouchPostions = [];
        this.currentElement = undefined;
    }

    clearActions() {
        this.lastActions = [] //[Type, Amount of Fingers, Element on which the Action was performed, position, movement in relation to last pos ] //One Finger Touch //Two Finger Touch //Three Finger Touch???
    }
}