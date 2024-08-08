const tileDefinistions = {tileSize: new Vector2(32,32)};

const tileMapping = {
    "grassV1": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(0,0)},
    "grassV2": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(1,0)},
    "grassV3": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(1,1)},
    "grassV4": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(1,2)},

    "grassflowersV1": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(7,0)},
    "grassflowersV2": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(7,1)},
    "grassflowersV3": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(7,2)},
    "grassflowersV4": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(7,4)},


    "dirtc": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(19,1)}, //dirt center

    "dirtoctl": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(18,0)}, //dirt outercorner top left
    "dirtoctr": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(20,0)}, //dirt outercorner top right
    "dirtocbl": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(18,2)}, //dirt outercorner bottom left
    "dirtocbr": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(20,2)}, //dirt outercorner bottom right^

    "dirtictl": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(18,4)}, //dirt innercorner top left
    "dirtictr": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(20,4)}, //dirt innercorner top right
    "dirticbl": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(18,6)}, //dirt innercorner bottom left
    "dirticbr": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(20,6)}, //dirt innercorner bottom right


    "dirtst": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(19,0)}, //dirt straight top 
    "dirtsb": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(19,2)}, //dirt straight bottom 
    "dirtsl": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(18,1)}, //dirt straight left 
    "dirtsr": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(20,1)}, //dirt straight right


    "waterc": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(23,1)}, //water center
    
    "wateroctl": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(22,0)}, //water outercorner top left
    "wateroctr": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(24,0)}, //water outercorner top right
    "waterocbl": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(22,2)}, //water outercorner bottom left
    "waterocbr": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(24,2)}, //water outercorner bottom right^

    "waterictl": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(22,4)}, //water innercorner top left
    "waterictr": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(24,4)}, //water innercorner top right
    "watericbl": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(22,6)}, //water innercorner bottom left
    "watericbr": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(24,6)}, //water innercorner bottom right


    "waterst": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(23,0)}, //water straight top 
    "watersb": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(23,2)}, //water straight bottom 
    "watersl": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(22,1)}, //water straight left 
    "watersr": {filepath: "./assets/images/tiles/tiles.png", tileIndex: new Vector2(24,1)}, //water straight right

    
}