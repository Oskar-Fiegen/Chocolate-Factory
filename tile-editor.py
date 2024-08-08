
import json

import msvcrt
import os
import sys
import colorama
import time
import PIL

colorama.just_fix_windows_console()

colorama.init(autoreset=True)


clear = lambda: os.system('cls')

def open_tileset():
    x = "./assets/tilesets/background-tiles.json"#input()

    f = open(x)


    data = json.load(f)


    print(data['name'])
    print("Version 1.0")
    print("Description")
    print("Author: PolyGoneAway")
    print("Textures [1]")
    print("Tile size: 32x32")
    print("Tiles [10]")

    f.close()
    return data

# Commands
# - help || Gives Help for the commands
# - vprop {property name} || Shows the properties of the tileset (like Tileset Name) if no property name is given all properties are shown
# - cprop {property name} {new value} || Changes the properties of the tileset (like Tileset Name)
# - vtex {tex index} || shows the texture
# - ctex {tex index} {tex path} || changes the texture path
# - rtex {tex index} || removes the texture
# - atex {tex path} || adds texture



#current_tileset_data = open_tileset()





def find(path, dict):
    d = dict
    for i in [int(x) if x.isnumeric() else x for x in path.split('.')]:
        d = d[i]
    return d





def edit(path, d, new_value):
    path_to_value = [int(x) if x.isnumeric() else x for x in path.split('.')]
    for key in path_to_value[:-1]:
        d = d[key]
    d[path_to_value[-1]] = new_value


def save_tileset(data):
    x = "./assets/tilesets/background-tiles.json"

    

    with open(x, 'w') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

selected_row = 0

data = open_tileset()
edit("tiles.0.name", data, "tile-name")
save_tileset(data)


current_screen = None

class Screen:
    def __init__(self, objects):
        self.objects = objects
        self.selection_ind = 0

        self.kbd_input_active = True
    
    def draw(self):
        for i, val in enumerate(self.objects):
            if i == self.selection_ind: print("> " + val.draw())
            else: print(val.draw())
    
    def kbd_input(self, key):
        
        if key == 27:    
            sys.exit()

        if self.kbd_input_active:
            if key == 224: #Special keys (arrows, f keys, ins, del, etc.)
                key = ord(msvcrt.getch())
                if key == 80: #Down arrow
                    self.selection_ind += 1
                elif key == 72: #Up arrow
                    self.selection_ind -= 1
                else:
                    pass
                #print("Special Key: " + str(pressedKey))
            else:
                if key == 13:
                    self.objects[self.selection_ind].interact(self)
                #print(pressedKey)
        else:
            if self.objects[self.selection_ind].kbd_input_active == True:
                self.objects[self.selection_ind].kbd_input(key, self)

class LabelField:
    def __init__(self, label):
        self.label = label
        
    
    def interact(self, screen):
        pass

    def draw(self):
        return self.label

class TextField:
    def __init__(self, label, value, data_path):
        self.label = label
        self.value = value
        self.data_path = data_path

        self.kbd_input_active = False
    
    def interact(self, screen):
        self.kbd_input_active = True
        screen.kbd_input_active = False

    def draw(self):
        return self.label + ": " + str(self.value)

    def kbd_input(self, key, screen):
        
        if key == 13:
                
            self.kbd_input_active = False
            screen.kbd_input_active = True
            edit(self.data_path, data, self.value)
            save_tileset(data)
            #print(data)
        elif key == 8:
            if isinstance(self.value, int):
                if str(self.value)[:-1] == '':
                    self.value = 0
                else: self.value = int(str(self.value)[:-1])
            else:
                self.value = str(self.value)[:-1]
            
        elif key == 224:
            pass
        else:
            if isinstance(self.value, int):
                if chr(key).isnumeric():
                    self.value = int(str(self.value) + chr(key))
            else:
                self.value += chr(key)

class LinkField:
    def __init__(self, label, screenlink):
        self.label = label
        self.screenlink = screenlink
    
    def interact(self, screen):
        global current_screen
        current_screen = self.screenlink
    
    def draw(self):
        return self.label

class TestKeyField:
    def _init_(self):
        self.kbd_input_active = False
    
    def interact(self, screen):
        self.kbd_input_active = True
        screen.kbd_input_active = False
    
    def draw(self):
        return "Test Key Input"

    def kbd_input(self, key, screen):
        if key == 13:
                
            self.kbd_input_active = False
            screen.kbd_input_active = True
        else:
            print(key)
            


class TileFrame():
    def __init__(self, tex_coord_x, tex_coord_y, duration):
        self.textureCoordinate = tex_coord_x, tex_coord_y
        self.duration = duration
        self.screen = None#Screen([TextField("X", str(self.textureCoordinate[0])), TextField("Y", str(self.textureCoordinate[1])), TextField("Duration", self.duration)])


class TileVariant():
    def __init__(self, frames, env):
        self.frames = frames
        self.env = env
        self.screen = Screen([LinkField("Frame", x.screen) for x in frames])

class Tile():
    def __init__(self, name, texture, variants, id):
        self.name = name
        self.id = id
        self.texture = texture
        self.variants = variants
        self.variantOverviewScreen = Screen([LinkField("Variant", x.screen) for x in self.variants])
        self.screen = Screen([LabelField("Tile"), TextField("Name", self.name, 'tiles.' + str(id) + '.name'), TextField("Texture", self.texture, 'tiles.' + str(id) + '.texture'), LinkField("Variants", self.variantOverviewScreen)])



def getTiles():
    Tiles = []
    for n,i in enumerate(data['tiles']):
        print(i)
        #ct = data['tiles'][i]
        
        Tiles.append(Tile(i['name'], i['texture'], [TileVariant([TileFrame(x['texture-coordinate']["x"],x['texture-coordinate']["y"],x['duration']) for x in n['frames']], "") for n in i['variants']], n))
    return Tiles
        
Tiles = getTiles()


    


def createTileOverviewScreen():
    objects = [LabelField("Tiles"),LabelField("")]
    tiles = getTiles()
    for i in tiles:
        objects.append(LinkField(i.name, i.screen))
    return Screen(objects)

def createTileDetailScreen():
    pass



current_screen = Screen([
    TextField("Name", data['name'], 'name'),
    TextField("Version", data['version'], 'version'), 
    TextField("Author", data['author'], 'author'),
    LinkField("Textures", None),
    TextField("Tile size X", data['tile-size']['x'], 'tile-size.x'),
    TextField("Tile size Y", data['tile-size']['y'], 'tile-size.y'),
    LinkField("Tiles", createTileOverviewScreen()),
    TestKeyField()])




clear()
try:
    while True:
        
        pressedKey = ord(msvcrt.getch())
        if pressedKey: 
            clear()
            current_screen.kbd_input(pressedKey)
            current_screen.draw()
            #print(find("tile-size.x", data))

        #for i, val in enumerate(lines):
        #    if i == selected_row:
        #        print(" - " + val)
        #    else:
        #        print(val)

        time.sleep(0.01)
except KeyboardInterrupt:
    print("Stop")