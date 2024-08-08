class TileMap {

    constructor({size}) {

        this.size = size;
        this.tiles = []
        
        console.log("test")
        //console.log(createTileFromName("grass", new Vector2(0,0)))
        
        
        /*for (let y = 0; y < this.size.y; y++) {
            this.tiles.push([])
            for (let x = 0; x < this.size.x; x++) {
                this.tiles[y].push(new Tile({position: new Vector2(x, y), sprite:  new Sprite({position: new Vector2(
                    x*32,
                    y*32
                ),
                  imageSrc: './assets/images/grass.png', isWorldSpace: true})}))
            }
        }*/
        //console.table(this.tiles)
    }
    update_variants() {
        if (this.tiles.length > 0) {
            for (let i of this.tiles) {
                for (let n of i) {
                    n.update_variant(this.tiles);
                }
            }
        }
    }

    draw() {
        if (this.tiles.length > 0) {
            let newDate = new Date()
            if (this.tiles == []) {return}
            for (let i of this.tiles) {
                for (let n of i) {
                    n.update(newDate);
                }
            }
            for (let y = Math.floor(currentCamera.position.y); y < Math.min(Math.floor(currentCamera.position.y) + currentCamera.screenTiles.h+1, this.size.y); y++) {
                if (y >= 0) {
                    for (let x = Math.floor(currentCamera.position.x); x < Math.min(Math.floor(currentCamera.position.x) + currentCamera.screenTiles.w+1, this.size.x); x++) {
                        
                        if (x>=0) this.tiles[y][x].draw();
                    }
                }
                
            }
        }
    }

    fillMap() {
        this.tiles = readMap()
        //this.size.x = 0
        //this.size.y = 0
        this.size.x = this.tiles[0].length
        this.size.y = this.tiles.length
        this.update_variants()
    }

    fillMapWithEmpty() {
        let tiles = []
        for (let y = 0; y < this.size.y; y++) {
            tiles.push([])
            for (let x = 0; x < this.size.x; x++) {
                //let currentTileRef// = tileMapping[lines[y+2].replace(/(\r\n|\n|\r)/gm, "").split(' ')[x]]
                
                tiles[y].push(new EmptyTile())
                
            }
        }
        this.tiles = tiles
    }
}



function readMap() {
    let tiles = []
    
    
    let lines = MapDataRaw.split('\n')
    console.log("Test")
    console.log(MapDataRaw)
    
    tilemapsize = new Vector2(Number(lines[0].split(' ')[0]), Number(lines[0].split(' ')[1]))


    for (let y = 0; y < tilemapsize.y; y++) {
        tiles.push([])
        for (let x = 0; x < tilemapsize.x; x++) {
            //let currentTileRef// = tileMapping[lines[y+2].replace(/(\r\n|\n|\r)/gm, "").split(' ')[x]]
            
            tiles[y].push(createTileFromName(lines[y+2].replace(/(\r\n|\n|\r)/gm, "").split(' ')[x],new Vector2(x,y), BackgroundTileData))
            
        }
    }



    console.log(tiles)
    return tiles;
}