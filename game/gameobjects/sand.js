class sand extends GameObject { // klasse zand
    constructor(x, y) {
        super(x, y, 50, 50)
    }

    Update() { 
        
        
        this.tekenzand(0, 0 );
        

    }
    tekenzand() {
        // tekent zand
        noStroke();
        fill(205, 170, 109)
        rect(100,400,1600,150)
    
    }
}