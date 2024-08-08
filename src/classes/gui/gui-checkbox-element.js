class GUICheckboxElement extends GUIElement {
    constructor({position, id, checked, style}) {
        super({position, id, interactable: true});
        this.checked = checked;
        this.style = style;
        this.aabb = new AABB({position: this.position, size: this.style.checkbox_size});
        
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

        if (this.pressed) {
            this.pressed = false;
            this.checked = !this.checked;
        }


        ctx.fillStyle = this.style.checkbox_color;
        


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

        //ctx.fillRect(x, y, this.aabb.size.x*scale, this.aabb.size.y*scale);
        //drawText({position: new Vector2(x,y).add(this.style.text_padding.multNum(scale)), text: this.text, color: this.style.text_color, size: this.style.text_size*scale});


        
        ctx.fillRect(x, y, this.aabb.size.x*scale, this.aabb.size.y*scale);
        if (this.checked) {
            ctx.fillStyle = this.style.checkbox_inner_color;
            ctx.fillRect(x+this.style.checkbox_inner_padding.x*scale, y+this.style.checkbox_inner_padding.y*scale, this.style.checkbox_inner_size.x*scale, this.style.checkbox_inner_size.y*scale);
        }
        
        
    }
}