class GUITextElement extends GUIElement {
    constructor({position, id, text, style}) {
        super({position, id, interactable: false});
        this.text = text;
        this.style = style; 
    }

    draw() {
        let x = 0;
        let y = 0;
        if (this.style.centered_x == true) {
            x = screenW/2 + (this.position.x*scale)
        }
        else {
            x = CDPTSP(this.position.multNum(scale)).x
        }
        if (this.style.centered_y == true) {
            y = screenH/2 + (this.position.y*scale )
        }
        else {
            y = CDPTSP(this.position.multNum(scale)).y
        }


        drawText({position: new Vector2(x,y), text: this.text, color: this.style.text_color, size: this.style.text_size*scale});
    }
}