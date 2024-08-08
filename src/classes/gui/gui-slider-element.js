class GUISliderElement extends GUIElement {
    constructor({position, id, style, value, min_value, max_value}) {
        super({position, id, interactable: true});
        this.style = style;
        this.aabb = new AABB({position: this.position, size: this.style.slider_size});
        this.value = value;
        this.min_value = min_value;
        this.max_value = max_value;
        this.handlePos = new Vector2(this.position.x,this.position.y);
        
        this.pressed = false;
        this.set_value(this.value)
    }

    set_value(value) {

        this.value = value
        let percentage = (value  - this.min_value) / (this.max_value-this.min_value) * 100
        this.handlePos.x = (percentage / 100 * (this.aabb.size.x*scale-this.style.handle_size.x*scale- this.style.handle_padding.x * 2 * scale)) + this.style.handle_size.x/2 * scale + this.style.handle_padding.x * scale + this.position.x * scale
        


       // percentage/ 100 *  = ((this.handlePos.x-this.style.handle_size.x/2*scale - this.style.handle_padding.x - this.position.x * scale) / (this.aabb.size.x*scale-this.style.handle_size.x*scale - this.style.handle_padding.x * 2 * scale ) * 100 )
// ((this.handlePos.x-this.style.handle_size.x/2*scale - this.style.handle_padding.x - this.position.x * scale) / (this.aabb.size.x*scale-this.style.handle_size.x*scale - this.style.handle_padding.x * 2 * scale ) * 100 )



        this.handlePos.x = Math.max(this.handlePos.x, this.style.handle_size.x/2 * scale + this.style.handle_padding.x * scale + this.position.x * scale )
        this.handlePos.x = Math.min(this.handlePos.x, this.style.slider_size.x * scale -this.style.handle_size.x/2 * scale - this.style.handle_padding.x * scale + this.position.x * scale)
    }

    update_value(touch_pos) {
        

        let offsetX = 0;
        let offsetY = 0;
        this.handlePos.x = CSPTDP(touch_pos).x

        if (this.style.centered_x == true) {
            console.log(screenW)
            offsetX = screenW/2 +  (this.position.x * scale) - ((this.aabb.size.x/2)*scale)+this.style.handle_size.x/2*scale 
            //console.log(canvasW)
            this.handlePos.x = CDPTSP(touch_pos).x
        }
        else {
            offsetX = this.position.x * scale
            
        }
        if (this.style.centered_y == true) {
            offsetY = screenH/2 + (this.position.y * scale ) - ((this.aabb.size.y/2)*scale)
        }
        else {
            offsetY = this.position.x * scale
            
        }




        
        //this.handlePos.x  = this.style.handle_padding.x * scale + this.style.handle_size.x/2 * scale //Math.max(this.handlePos.x, this.style.handle_padding.x * scale)
        console.log(this.style.handle_padding.x * scale + this.style.handle_size.x/2 * scale)
        this.handlePos.x = Math.max(this.handlePos.x, offsetX + this.style.handle_padding.x * scale + this.style.handle_size.x/2 * scale )
        this.handlePos.x = Math.min(this.handlePos.x, this.style.slider_size.x * scale - this.style.handle_size.x/2 * scale - this.style.handle_padding.x * scale + offsetX)
        
        let percentage = Math.floor( (this.handlePos.x-this.style.handle_size.x/2*scale - this.style.handle_padding.x - offsetX) / (this.aabb.size.x*scale-this.style.handle_size.x*scale - this.style.handle_padding.x * 2 * scale ) * 100 )
        this.value = Math.min(Math.max(this.min_value,(percentage * (this.max_value-this.min_value) / 100) + this.min_value), this.max_value)
    }


    draw() {
        for (const i of touch.lastActions) {
            if (i[1] == 1 && i[0] == "Move" && this.pressed || i[1] == 1 && i[0] == "Press" && this.pressed) {
                //if (checkIfPointIsInAABB(i[3][0], convertAABBtoDeadspace(this.aabb))) {
                    this.update_value(i[3][0]);
                    
                    
                //}
            }
            if (i[0] == "Release") {
                this.pressed = false;
            }
        }

        this.handlePos.y = this.position.y + this.aabb.size.y/2
        if (!this.pressed) ctx.fillStyle = this.style.slider_color;
        else ctx.fillStyle = rgb(255,255,0);



        let x = 0;
        let y = 0;
        let handleX = 0;
        let handleY = 0;
        if (this.style.centered_x == true) {

            x = screenW/2 + (this.position.x * scale) - ((this.aabb.size.x/2)*scale)
            handleX = this.handlePos.x - ((this.style.handle_size.x/2)*scale)//screenW/2 + 
            
        }
        else {
            x = CDPTSP(this.position.multNum(scale)).x
            handleX = CDPTSP(this.handlePos).x;
        }
        if (this.style.centered_y == true) {
            y = screenH/2 + (this.position.y * scale )- ((this.aabb.size.y/2)*scale)
        }
        else {
            y = CDPTSP(this.position.multNum(scale)).y
            handleY = CDPTSP(this.handlePos.multNum(scale)).y;
        }

        if (this.style.invisible != true) {
            
            if (this.style.slider_sprite != undefined) {
                
                this.style.slider_sprite.scale_x = this.style.image_scale_x
                this.style.slider_sprite.scale_y = this.style.image_scale_y
                this.style.slider_sprite.position.x = x/scale
                this.style.slider_sprite.position.y = y/scale
                this.style.slider_sprite.draw();
            }
            else {
            
                ctx.fillRect(x, y, this.aabb.size.x * scale, this.aabb.size.y * scale);
            }
            //ctx.fillRect(x, y, this.aabb.size.x * scale, this.aabb.size.y * scale);

            if (this.style.handle_sprite != undefined) {
                
                this.style.handle_sprite.scale_x = this.style.image_scale_x
                this.style.handle_sprite.scale_y = this.style.image_scale_y
                this.style.handle_sprite.position.x = (handleX - this.style.handle_size.x/2*scale)/scale
                this.style.handle_sprite.position.y = (handleY - this.style.handle_size.y/2*scale)/scale
                this.style.handle_sprite.draw();
            }
            else {
            
                ctx.fillStyle = this.style.handle_color;
                ctx.fillRect(handleX - this.style.handle_size.x/2*scale , handleY - this.style.handle_size.y/2 * scale , this.style.handle_size.x * scale, this.style.handle_size.y * scale);
            }

        }
        

        //ctx.fillStyle = this.style.handle_color;
        //ctx.fillRect(handleX - this.style.handle_size.x/2*scale , handleY - this.style.handle_size.y/2 * scale , this.style.handle_size.x * scale, this.style.handle_size.y * scale);
        //drawText({position: CDPTSP(this.position).add(this.style.text_padding), text: this.text, color: this.style.text_color, size: this.style.text_size});
    }
}