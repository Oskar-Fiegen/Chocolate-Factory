class Vector2 {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    add(vec2) {
        return new Vector2(this.x + vec2.x, this.y + vec2.y)
    }
    sub(vec2) {
        return new Vector2(this.x - vec2.x, this.y - vec2.y)
    }
    multNum(num) {
        return new Vector2(this.x*num, this.y*num)
    }

    divNum(num) {
        return new Vector2(this.x/num, this.y/num)
    }
    
}


class Vector4 {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    add(vec2) {
        return new Vector4(this.x + vec4.x, this.y + vec4.y, this.w + vec4.w, this.h + vec4.h)
    }
    sub(vec2) {
        return new Vector4(this.x - vec4.x, this.y - vec4.y, this.w - vec4.w, this.h - vec4.h)
    }
    

    divNum(num) {
        return new Vector4(this.x/num, this.y/num, this.w/num, this.h/num)
    }
}


function calcDiff(start, end) {
    return new Vector2((start.x - end.x), (start.y - end.y));
}

function calcAverage(arr) {
    let result = new Vector2(0,0);
    for (const i of arr){
        result = result.add(i);
        
    }
    
    
    return result.divNum(arr.length);

}


