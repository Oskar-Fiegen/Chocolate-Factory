class GUIRenderer {
    constructor({elements, id}) {
        this.elements = elements;
        this.id = id

    }

    
    draw() {
        for (const i of this.elements) {
            i.draw();
        }
    }
}