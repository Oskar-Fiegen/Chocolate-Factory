class AABB {
    constructor({position, size}) {
        this.position = position
        this.size = size;
    }
}


function convertAABBtoDeadspace(aabb) {
    return new AABB({position: new Vector2(aabb.position.x + ((screenW-deadspace.size.w)/2), aabb.position.y  + ((screenH-deadspace.size.h)/2)), size: aabb.size})
}


function checkIfPointIsInAABB(vec2,aabb) {
    
    if (vec2.x > aabb.position.x &&
        vec2.x < aabb.position.x + aabb.size.x &&
        vec2.y > aabb.position.y &&
        vec2.y < aabb.position.y + aabb.size.y
    ) return true;
    return false;
}