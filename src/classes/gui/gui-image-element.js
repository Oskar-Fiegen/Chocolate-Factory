class GUIImageElement extends GUIElement {
    constructor({position, id, style, sprite}) {
        super({position, id, interactable: false});
        
        this.style = style;
        
        
        this.sprite = sprite
    }

    draw() {
        


        
        
        let x = 0;
        let y = 0;
        if (this.style.centered_x == true) {
            x = (screenW/2 + (this.position.x*scale) - (this.sprite.area.w/2*this.style.image_scale_x*scale))/scale
        }
        else {
            x = CDPTSP(this.position.multNum(scale)).x/scale
        }
        if (this.style.centered_y == true) {
            y = (screenH/2 + (this.position.y*scale)- (this.sprite.area.h/2*this.style.image_scale_y*scale))/scale
        }
        else {
            y = CDPTSP(this.position.multNum(scale)).y/scale
        }
        this.sprite.scale_x = this.style.image_scale_x
        this.sprite.scale_y = this.style.image_scale_y
        this.sprite.position.x = x
        this.sprite.position.y = y
        this.sprite.draw();
    }
}