class Sprite {
    constructor({position, imageSrc,area, isWorldSpace}) {
      this.position = position;
      this.image = new Image();
      this.image.onload = () => {this.loaded = true;}
      this.area = area
      this.scale_x = 1
      this.scale_y = 1
      this.image.src = imageSrc;
      this.isWorldSpace = isWorldSpace;
      this.loaded = false;
    }
    draw() {
      
      if (!this.loaded) return;
      if (this.isWorldSpace == true) ctx.drawImage(this.image,this.area.x, this.area.y, this.area.w-this.area.x, this.area.h-this.area.y, this.position.x * scale - currentCamera.position.x * scale * tileSize, this.position.y * scale - currentCamera.position.y * scale * tileSize, (this.area.w-this.area.x) * scale + 0.2, (this.area.h-this.area.y) * scale + 0.2);
      else ctx.drawImage(this.image, this.area.x, this.area.y, this.area.w, this.area.h, this.position.x * scale, this.position.y * scale, this.area.w * this.scale_x * scale, this.area.h * this.scale_y * scale );
      
    }
  }
  