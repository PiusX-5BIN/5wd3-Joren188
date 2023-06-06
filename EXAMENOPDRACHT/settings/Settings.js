class Settings {
    static GameClass = canongame;
    
    static Layers = {
        PLAYER: 0,
        GROUND: 1
    };

    static LayerInteractions = {
        [Settings.Layers.PLAYER]: [Settings.Layers.GROUND]
    };

    static BackgroundColor = "#add8e6";

    static GameWidth = 1000;
    static GameHeight = 800;

    static Debug = true;
    static ShowStats = true;
    static ShowGrid = true;
    static GridSize = 50;
}
