class player extends GameObject {
    #cannon = null;
    #bullet = null;
    
    constructor(x,y,){
        super(0,0,0,0)
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 4 
        this.#cannon = new canon(this.x,this.y)
       
    }

  

    Update(){

    }  

    Move(richting) { // Beweging kanon

        this.#cannon.Move(richting.x, richting.y);
    }
}