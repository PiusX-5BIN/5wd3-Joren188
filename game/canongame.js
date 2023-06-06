class canongame extends Game { 
    // Game klasse zorgt ervoor dat alles op beeld komt en een plaats krijgt
    #cloud = null;   
    #movingpigeon = null;
    #pigeon1 = null;
    #pigeon2 = null;
    #pigeon3 = null;
    #palmtree = null;
    #fish = null;
    #player = null;
    #timer = 0;
    #movement = null;
    #sand = null;
    



    constructor () {
        super();
      
            
        this.#cloud = new cloud(300,250);
        this.#cloud = new cloud(800,250);
        this.#cloud = new cloud(1200,250);
        this.#sand = new sand(300,300)
        this.#player = new player(300,300);
        
   
    }
    Update(){

        this.#timer += deltaTime;
        if (this.#timer < 100) {
            return;
        }
        this.#timer = 0;


        if(keyIsDown(LEFT_ARROW) === true){       // User input
            this.#movement = createVector(-1, 0)
            this.#player.Move(this.#movement);
        } 
        if(keyIsDown(RIGHT_ARROW) === true){
            this.#movement = createVector(1, 0) // User input
            this.#player.Move(this.#movement);
        }
        
        if (this.#pigeon1 === null) {
            this.#pigeon1 = this.GeneratePigeon();
        }
        if (this.#pigeon2 === null) {
        
        this.#pigeon2 = this.GeneratePigeon();
        }
        if (this.#pigeon3 === null) {
        this.#pigeon3 = this.GeneratePigeon();
        }
        if (this.#movingpigeon === null) {
        this.#movingpigeon = this.GeneratePigeon();
        }

        this.#movingpigeon.Move();

        
    }

    GeneratePigeon() {
        let gridSizeX = Settings.GameWidth / Settings.GridSize;
        let gridSizeY = (Settings.GameHeight/ Settings.GridSize);

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
        
        
        
        let pigeon = new Pigeon(
            positionX,
            positionY
        );

            return pigeon;
        
    }
}