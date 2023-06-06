class Pigeon extends GameObject { // klasse van de duif
  constructor(x , y) {
      super(x,y,Settings.GridSize,Settings.GridSize);
      this.SetDefaultCollider();
      this.speed = 4
     

  }
  Update(){
    this.tekenduif(0,0)

  }
  tekenduif(x,y){

  
    // Duif
     //lichaam  
    fill(51, 102, 0);
   // ellipse(200, 200, 100, 70);
    ellipse(x, y, 100, 70);
    //hood
    fill(255, 255, 0);
   // ellipse(200, 170, 70, 70);
   ellipse(x,y-30, 70, 70);

    
    
    // bek
    fill(255, 0, 0);
    triangle(x-20, y-30, x+20, y-30, x, y-50);
    // triangle(180, 170, 220, 170, 200, 150);

    //ogen
    fill(0);
    ellipse(x-10,y-40, 10, 10);
    ellipse(x+10, y-40, 10, 10);
   // ellipse(190, 160, 10, 10);
   // ellipse(210, 160, 10, 10);
      
    //benen
    fill(255, 0, 0);
    strokeWeight(4)
  //  line(180,220,150,270)
   // line(230,220,250,270)
    line(x-20,y+20,150,270)
    line(x+30,y+20,250,270)
    strokeWeight(1)
  }

  Move() {

    // Random positie duif
    let gridSizeX = Settings.GameWidth / Settings.GridSize;
    let gridSizeY = Settings.GameHeight/ Settings.GridSize;

    let gridlocationX = random(0,gridSizeX);
    gridlocationX = Math.floor(gridlocationX);

    let GridlocationY= random(0,gridSizeY);
    GridlocationY = Math.floor(GridlocationY);

    if (gridlocationX == gridSizeX){
      gridlocationX = gridlocationX-2
    }
    if (GridlocationY == gridSizeY){
        GridlocationY = GridlocationY -2
    }
    if (GridlocationY < 5){
        GridlocationY = 5
    }
    let positionX = (Settings.GridSize / 2 ) + (gridlocationX * Settings.GridSize)
    let positionY = (Settings.GridSize / 2 ) + (GridlocationY * Settings.GridSize)
    
        
    this.Position.x = positionX;
    this.Position.y = positionY;
    //this.MoveTo(this.Position.x +(x * Settings.GridSize),
    //this.Position.y + (y * Settings.GridSize)
    //);
  }

MoveTo(x, y) {
    let oldPosition = this.Position.copy();

    this.Position.x = x;
    this.Position.y = y;
  }
}

   

