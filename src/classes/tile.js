class Tile {
    constructor({name, position, variants}) {
        this.name = name
        this.position = position;
        this.currentVariant = 0;
        this.variants = variants;
        this.con_update_variant = true;
        
    }
    update_variant(Tiles) {
        for (let i = 0; i < this.variants.length; i++) {
            let is_fitting = true;
            //if (this.name != 'water') { break;}
            
            if (this.position.x > 0 && this.position.y > 0) {if (Tiles[this.position.y-1][this.position.x-1].name != this.variants[i].env[0][0] && this.variants[i].env[0][0] != "any") {is_fitting = false;}}
            if (this.position.y > 0) {if (Tiles[this.position.y-1][this.position.x].name != this.variants[i].env[0][1] && this.variants[i].env[0][1] != "any") {is_fitting = false;}}
            if (this.position.x < Tiles[0].length-1 && this.position.y > 0) {if (Tiles[this.position.y-1][this.position.x+1].name != this.variants[i].env[0][2] && this.variants[i].env[0][2] != "any") {is_fitting = false;}}

            if (this.position.x > 0) {if (Tiles[this.position.y][this.position.x-1].name != this.variants[i].env[1][0] && this.variants[i].env[1][0] != "any") {is_fitting = false;}}
            //if (this.position.y > 0) {if (Tiles[this.position.y-1][this.position.x].name != this.variants[i].env[0][1] && this.variants[i].env[1][1] != "any") {is_fitting = false;}}
            if (this.position.x < Tiles[0].length-1) {if (Tiles[this.position.y][this.position.x+1].name != this.variants[i].env[1][2] && this.variants[i].env[1][2] != "any") {is_fitting = false;}}

            if (this.position.x > 0 && this.position.y < Tiles.length-1) {if (Tiles[this.position.y+1][this.position.x-1].name != this.variants[i].env[2][0] && this.variants[i].env[2][0] != "any") {is_fitting = false;}}
            if (this.position.y < Tiles.length-1) {if (Tiles[this.position.y+1][this.position.x].name != this.variants[i].env[2][1] && this.variants[i].env[2][1] != "any") {is_fitting = false;}}
            if (this.position.x < Tiles[0].length-1 && this.position.y < Tiles.length-1) {if (Tiles[this.position.y+1][this.position.x+1].name != this.variants[i].env[2][2] && this.variants[i].env[2][2] != "any") {is_fitting = false;}}

            if (is_fitting == true) {
                this.currentVariant = i;
                
                break;
            }
            
            

        }
        
        
    }

    update(newDate) {
        this.variants[this.currentVariant].update(newDate)
    }
    draw() {
        this.variants[this.currentVariant].draw();
    }
}

class EmptyTile {
    constructor() {

    }
    draw() {

    }
    update() {

    }
    update_variant() {}
}

class TileVariant {
    constructor({frames, env, facing}) {
        this.frames = frames;
        this.facing = facing;
        this.currentFrame = 0;
        this.lastDate = new Date();
        this.env = env;
    }
    update(newDate) {
        var timeDiff = newDate - this.lastDate;
        
        if(timeDiff > this.frames[this.currentFrame].duration) {
            
            this.lastDate = newDate;
            this.currentFrame += 1;
            if (this.currentFrame == this.frames.length) {
                this.currentFrame = 0;
            }
        }
    }
    draw(newDate) {
        
        this.frames[this.currentFrame].draw();
    }
}

class TileFrame {
    constructor({sprite, duration}) {
        this.sprite = sprite;
        this.duration = duration;
    }

    draw() {
        this.sprite.draw();
    }
}


function createTileFromName(name, pos, tileset) {
    let currentTileRef 
    for (const i of tileset["tiles"]) {
        if (i.name == name) {
            currentTileRef = i
        }
    }
    if (currentTileRef == undefined) {console.log(name);return undefined; }

    let variants = []

    for (const i of currentTileRef['variants']) {
        let frames = []
        for (const n of i['frames']) {
            frames.push(new TileFrame({
                sprite: new Sprite({
                    position: new Vector2(pos.x*tileDefinistions.tileSize.x, pos.y*tileDefinistions.tileSize.y),
                    imageSrc: tileset["textures"][currentTileRef['texture']],
                    area: new Vector4(n['texture-coordinate']['x']*tileDefinistions.tileSize.x, n['texture-coordinate']['y']*tileDefinistions.tileSize.y, n['texture-coordinate']['x']*tileDefinistions.tileSize.x + tileDefinistions.tileSize.x, n['texture-coordinate']['y']*tileDefinistions.tileSize.y + tileDefinistions.tileSize.y),
                    isWorldSpace: true,
                }), 
                duration: n['duration']}))
        }
        variants.push(new TileVariant({frames: frames, env: i['env']}))
    }

    return new Tile({position: pos, variants: variants, name: name})
}
