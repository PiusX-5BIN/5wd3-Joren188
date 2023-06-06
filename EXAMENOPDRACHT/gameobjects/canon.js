class canon extends GameObject { // klasse kanon
    constructor(x,y){
        super(x,y+400,Settings.GridSize,Settings.GridSize);
        this.SetDefaultCollider();
    }

    Update(){
        // tekent kanon
        fill("green")

        rect(0, 0, this.Width, this.Height);
        this.Shoot()
    }
    
    Move(x, y) {
        this.MoveTo(this.Position.x +(x * Settings.GridSize),
        this.Position.y + (y * Settings.GridSize)
        );
    }

    MoveTo(x, y) {
        let oldPosition = this.Position.copy();

        this.Position.x = x;
        this.Position.y = y;

      
       
    }

    Shoot() {
        if(keyIsDown(UP_ARROW) === true){
         new bullet(this.Position.x, this.Position.y)
        }
     }
}