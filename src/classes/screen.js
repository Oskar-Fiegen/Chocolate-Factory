class Screen {
    Screen() {

    }

    update() {

    }

    draw() {

    }

}



class MainMenuScreen extends Screen {
    MainMenuScreen() {
        
        
          
    }

    setup() {
        this.GUI = new GUIRenderer({
            elements: [
                
                
                new GUIButtonElement({position: new Vector2( 0, 50), id: 2, text: " ", style: new GUIStyle({button_size: new Vector2(130, 130), image_scale_x: 3, image_scale_y: 3, centered_x: true, centered_y: true, button_sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(0,32,45,45), isWorldSpace: false })})}),
                
                new GUIButtonElement({position: new Vector2( 20, 20), id: 2, text: " ", style: new GUIStyle({image_scale_x: 3, image_scale_y: 3, button_size: new Vector2(48, 48), button_sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(32,0,16,16), isWorldSpace: false })})}),
                
                new GUIImageElement({position: new Vector2(0,10), id: 2, style: new GUIStyle({centered_x: true, image_scale_x: 3, image_scale_y: 3}), sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(48,0,112,32), isWorldSpace: false })}),
                
                            
                new GUIImageElement({position: new Vector2(0,50), id: 2, style: new GUIStyle({centered_x: true, image_scale_x: 3, image_scale_y: 3, centered_y: true}), sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(0,0,7,13), isWorldSpace: false })}),

                new GUIButtonElement({position: new Vector2( 20, 220), id: 2, text: "Hello", style: new GUIStyle({image_scale_x: 3, image_scale_y: 3, button_size: new Vector2(48, 48), button_sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(16,0,16,16), isWorldSpace: false })})}),
                //new GUIImageElement({position: new Vector2(20,220), id: 2, style: new GUIStyle({image_scale_x: 3, image_scale_y: 3}), sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(16,0,16,16), isWorldSpace: false })}),

                new GUITextElement({position: new Vector2(0,0), id: 2, text: "No Error", style: new GUIStyle({text_size_: 10, text_color: rgb(0,0,0)})})
            
            ],
            id: 1
          });
    }

    update() {

    }

    draw() {
        
        ctx.fillStyle = rgb(0, 80, 150);
        ctx.fillRect(0,0, canvas.width, canvas.height);
        
        //if (test_var == undefined) {this.GUI.elements[5].text = "Error"} else {this.GUI.elements[5].text = test_var}
        if (this.GUI.elements[0].pressed) {console.log("Start"); currentScreen = gs; this.GUI.elements[0].pressed = false}
        
        if (this.GUI.elements[1].pressed) {window.location.reload();}
        if (this.GUI.elements[4].pressed) {console.log("Start"); currentScreen = ss; this.GUI.elements[4].pressed = false}
        
        
        this.GUI.draw();

        for (const i of touch.lastActions) {
            if (i[1] == 1 && i[0] == "Press" && i[2] == "Canvas") {
              tilemap_pressed = true;
              
        
            }
            if (i[0] == "Release") {
              console.log(touch.lastActions)
            }
        }
        touch.clearActions();
    }
}

class SettingsScreen extends Screen {
    SettingsScreen() {
        
        
          
    }

    setup() {
        this.GUI = new GUIRenderer({
            elements: [
                
                
                
                new GUIButtonElement({position: new Vector2( 20, 20), id: 2, text: " ", style: new GUIStyle({image_scale_x: 3, image_scale_y: 3, button_size: new Vector2(48, 48), button_sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(32,0,16,16), isWorldSpace: false })})}),
                
                new GUISliderElement({position: new Vector2( 0, 120), id: 2, value: 100, min_value: 0, max_value: 100, style: new GUIStyle({image_scale_x: 3, image_scale_y: 3, slider_size: new Vector2(255, 66), slider_color: rgb(255,255,255), handle_size: new Vector2(45,45), handle_color: rgb(0,0,0), handle_padding: new Vector2(10,0), centered_x: true, handle_sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(0,80,15,15), isWorldSpace: false }),slider_sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(0,96,85,23), isWorldSpace: false })})}),
                
            
            ],
            id: 1
          });
    }

    update() {

    }

    draw() {
        
        ctx.fillStyle = rgb(0, 80, 150);
        ctx.fillRect(0,0, canvas.width, canvas.height);
        
        
        if (this.GUI.elements[0].pressed) {window.location.reload();}
        
        
        this.GUI.draw();

        for (const i of touch.lastActions) {
            if (i[1] == 1 && i[0] == "Press" && i[2] == "Canvas") {
              tilemap_pressed = true;
              
        
            }
            if (i[0] == "Release") {
              console.log(touch.lastActions)
            }
        }
        touch.clearActions();

    }
}



class GameScreen extends Screen {
    GameScreen() {

    }

    setup() {
        this.selected_item = 1;
        this.GUI = new GUIRenderer({
            /*elements: [
              new GUITextElement({position: new Vector2( 0, 0), id: 2, text: "Hello", style: new GUIStyle({text_size: 50, text_color: rgb(0,0,0)}) }),
              new GUIButtonElement({position: new Vector2( 0, 60), id: 2, text: "Hello", style: new GUIStyle({text_size: 50, text_color: rgb(0,0,0), button_size: new Vector2(255, 55), button_color: rgb(255,255,255), text_padding: new Vector2(5,5)})}),
              new GUISliderElement({position: new Vector2( 0, 120), id: 2, value: 100, min_value: 0, max_value: 100, style: new GUIStyle({slider_size: new Vector2(255, 55), slider_color: rgb(255,255,255), handle_size: new Vector2(45,45), handle_color: rgb(0,0,0), handle_padding: new Vector2(5,0), centered_x: true})}),
              new GUICheckboxElement({position: new Vector2( 0, 180), id: 2, checked: true, style: new GUIStyle({checkbox_size: new Vector2(55, 55), checkbox_color: rgb(255,255,255), checkbox_inner_size: new Vector2(45,45), checkbox_inner_color: rgb(0,0,0), checkbox_inner_padding: new Vector2(5,5)})}),
              new GUITextElement({position: new Vector2( 70, 185), id: 2, text: "Draw Tilemap", style: new GUIStyle({text_size: 50, text_color: rgb(0,0,0)}) }),
              //new GUISliderElement({position: {x: 0, y: 0}, id: 3, rendererId: 1, value: 50, textSize: 50, range: {min: 0, max: 100}, size: {w: 100, h:10}})
            ],*/
            elements: [
                new GUITextElement({position: new Vector2( 0, 0), id: 2, text: "Selected item: Conveyor Belt", style: new GUIStyle({text_size: 10, text_color: rgb(0,0,0)}) }),

                new GUIButtonElement({position: new Vector2(0,21), id: 2, text: "Conveyor Belt", style: new GUIStyle({text_size:9, text_color: rgb(0,0,0), button_size: new Vector2(135, 21), button_color: rgb(255,255,255), text_padding: new Vector2(8,6), image_scale_x: 3, image_scale_y: 3, button_sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(0,128,45,7), isWorldSpace: false }),})}),
                new GUIButtonElement({position: new Vector2(0,52), id: 2, text: "Water", style: new GUIStyle({text_size:9, text_color: rgb(0,0,0), button_size: new Vector2(135, 21), button_color: rgb(255,255,255), text_padding: new Vector2(8,6), image_scale_x: 3, image_scale_y: 3, button_sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(0,128,45,7), isWorldSpace: false }),})}),
                new GUIButtonElement({position: new Vector2(0,83), id: 2, text: "Grass", style: new GUIStyle({text_size:9, text_color: rgb(0,0,0), button_size: new Vector2(135, 21), button_color: rgb(255,255,255), text_padding: new Vector2(8,6), image_scale_x: 3, image_scale_y: 3, button_sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(0,128,45,7), isWorldSpace: false }),})}),
                new GUIButtonElement({position: new Vector2(0,114), id: 2, text: "Clear", style: new GUIStyle({text_size:9, text_color: rgb(0,0,0), button_size: new Vector2(135, 21), button_color: rgb(255,255,255), text_padding: new Vector2(8,6), image_scale_x: 3, image_scale_y: 3, button_sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(0,128,45,7), isWorldSpace: false }),})}),

                new GUIButtonElement({position: new Vector2( 20, 220), id: 2, text: " ", style: new GUIStyle({image_scale_x: 3, image_scale_y: 3, button_size: new Vector2(48, 48), button_sprite: new Sprite({position: new Vector2(0,0), imageSrc: "./assets/images/gui/icons.png", area: new Vector4(16,16,16,16), isWorldSpace: false })})}),

            ],
            id: 1
          });
        
        this.tilemap = new TileMap({size: {x: 50, y: 50}})
        this.tilemap.fillMap();
        this.foreground_tilemap = new TileMap({size: this.tilemap.size})
        this.foreground_tilemap.fillMapWithEmpty();
          
    }


    update() {

    }

    draw() {
        currentCamera.update();
        //if (this.GUI.elements[1].pressed) {this.GUI.elements[2].set_value(50);}
        //this.GUI.elements[0].text = "Value:" + Math.round(this.GUI.elements[2].value)

        //if (this.GUI.elements[3].checked) {tilemap.draw();}

        if (this.GUI.elements[1].pressed) {this.GUI.elements[0].text = "Selected item: Conveyor Belt"; this.selected_item = 1;}
        if (this.GUI.elements[2].pressed) {this.GUI.elements[0].text = "Selected item: Water"; this.selected_item = 2;}
        if (this.GUI.elements[3].pressed) {this.GUI.elements[0].text = "Selected item: Grass"; this.selected_item = 3;}
        if (this.GUI.elements[4].pressed) {this.foreground_tilemap.fillMapWithEmpty();}
        

        if (this.GUI.elements[5].pressed) {console.log("Start"); currentScreen = ms; this.GUI.elements[5].pressed = false}



        
        this.tilemap.draw();
        this.foreground_tilemap.draw();
        this.GUI.draw();



        for (const i of touch.lastActions) {
            if (i[1] == 1 && i[0] == "Press" && i[2] == "Canvas") {
              tilemap_pressed = true;
              
        
            }
            if (i[0] == "Release") {
              console.log(touch.lastActions)
            }
            if (i[1] == 1 && i[0] == "Release" && i[2] == "Canvas") {
                tilemap_pressed = false;
                let x = Math.floor(i[3][0].x/scale/tileSize + currentCamera.position.x)
                let y = Math.floor(i[3][0].y/scale/tileSize + currentCamera.position.y)
                if (this.selected_item == 1) {
                if (this.foreground_tilemap.tiles[y][x]) {
                    this.foreground_tilemap.tiles[y][x] = createTileFromName("conveyor_belt", new Vector2(x,y), ForegroundTileData)
                    this.foreground_tilemap.update_variants()
                }
                
                }
                else if (this.selected_item == 2) {
                    if (this.tilemap.tiles[y][x]) {
                        this.tilemap.tiles[y][x] = createTileFromName("water", new Vector2(x,y), BackgroundTileData)
                        this.tilemap.update_variants()
                    }
                }   
                else if (this.selected_item == 3) {
                    if (this.tilemap.tiles[y][x]) {
                        this.tilemap.tiles[y][x] = createTileFromName("grass", new Vector2(x,y), BackgroundTileData)
                        this.tilemap.update_variants()
                    }
                }   
                console.log(x);
                console.log(y);
            }
          }
        
        
        
          
        touch.clearActions();
    }
}
