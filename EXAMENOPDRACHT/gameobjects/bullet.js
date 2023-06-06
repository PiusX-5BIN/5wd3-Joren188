    class bullet extends GameObject {

        constructor(x,y) {
            super(x,y-100,50,50);
            this.SetDefaultCollider();

        }
    Update(){
        fill("red");   // Tekent kogel
        rect(0,0,5,15);
        this.Position.y = this.Position.y - 10;
        if(this.Position.y <= 50){
            this.Remove();
        }
    }
    OnOverlap(othersprites){  // Zorgt dat het object verdwijnt
    for(let i = 0; i  < othersprites.length; i++){
    let geraaktobject = othersprites[i]
    if(geraaktobject instanceof Pigeon){
    geraaktobject.Remove();
    this.Remove();
    }
    else if (geraaktobject instanceof canon){
        return false;
    }
    }
    }
}

