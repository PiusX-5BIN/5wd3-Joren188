class cloud extends GameObject { // klasse van de wolk
    constructor(x, y) {
        super(x, y, 50, 50)
    }

    Update() { 
        
        
        this.tekenwolken(0, 0 );
        

    }
    tekenwolken(x, y) {
        noStroke();               // tekening wolk
        fill(255, 255, 255)
        ellipse(x - 150, y - 150, 60, 50);
        ellipse(x - 130, y - 160, 60, 50);
        ellipse(x - 70, y - 150, 60, 50);
        ellipse(x - 130, y - 140, 60, 50);
        ellipse(x - 90, y - 135, 60, 50);
    
    }
}