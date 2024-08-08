class GUIButtonElement extends GUIElement {
    constructor({position, id, text, style}) {
        super({position, id, interactable: true});
        this.text = text;
        this.style = style;
        this.aabb = new AABB({position: this.position, size: this.style.button_size});
        
        this.pressed = false;
    }

    draw() {
        for (const i of touch.lastActions) {
            if (i[1] == 1 && i[0] == "Press") {
                //if (checkIfPointIsInAABB(i[3][0], convertAABBtoDeadspace(this.aabb))) {this.pressed = true;}
            }
            if (i[0] == "Release") {
                this.pressed = false;
            }
        }


        if (!this.pressed) ctx.fillStyle = this.style.button_color;
        else ctx.fillStyle = rgb(255,255,0);
        
        let x = 0;
        let y = 0;
        if (this.style.centered_x == true) {
            x = screenW/2 + (this.position.x*scale) - ((this.aabb.size.x/2)*scale)
        }
        else {
            x = CDPTSP(this.position.multNum(scale)).x
        }
        if (this.style.centered_y == true) {
            y = screenH/2 + (this.position.y*scale )- ((this.aabb.size.y/2)*scale)
        }
        else {
            y = CDPTSP(this.position.multNum(scale)).y
        }

        if (this.style.invisible != true) {
            
            if (this.style.button_sprite != undefined) {
                
                this.style.button_sprite.scale_x = this.style.image_scale_x
                this.style.button_sprite.scale_y = this.style.image_scale_y
                this.style.button_sprite.position.x = x/scale
                this.style.button_sprite.position.y = y/scale
                this.style.button_sprite.draw();
            }
            else {
            
            ctx.fillRect(x, y, this.aabb.size.x*scale, this.aabb.size.y*scale);
            
            }
            if (this.style.text_padding && this.text &&  this.style.text_color && this.style.text_size) {
                drawText({position: new Vector2(x,y).add(this.style.text_padding.multNum(scale)), text: this.text, color: this.style.text_color, size: this.style.text_size*scale});
            }
        }
    }
}