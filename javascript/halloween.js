 let huidigeFrame = 0;

function setup() {
    createCanvas(900,600);
}

function draw() {
    background(200);
    if (huidigeFrame == 0) {
        TekenStripkader1();
    }
   else if (huidigeFrame == 1) {
        TekenStripkader2();
    }
    else if (huidigeFrame == 2) {
        TekenStripkader3();
    }
    else if (huidigeFrame == 3) {
        TekenStripkader4();
    } 
    else if (huidigeFrame == 4) {
        TekenStripkader5();
    } 

}

function TekenStripkader1() {
    background(135,206,235);
    tekenrand()
    tekenspook(400, 450);
    TekenTekstballon(200, 350, 200, 50, .25, "Tring tring ");
    tekenhuis();
    tekenwolken(400,200);
    tekenwolken(600,200);
    tekenwolken(800,300)
    Tekenzon(100,100)
    


}
function TekenStripkader2() {
    background(135,206,235);
    tekenrand()
    tekenspook(600,450)
    Tekenzon(100,100)
    tekenhuis();
    TekenTekstballon(450, 400, 200, 50, .25, "Hey spook wat wil je gaan doen ? ");
    TekenTekstballon(700, 350, 200, 50, .25, " We gaan mensen laten verschieten. ");
    tekenpompoen(250,450);
    tekenwolken(400,200);
    tekenwolken(600,200);
    tekenwolken(800,300);



}
function TekenStripkader3() {
    background(0, 0, 139);
    tekenrand()
    tekenspook(650, 450);
    Tekenmaan(150,150)
     tekenhuis();
    TekenTekstballon(450, 400, 200, 50, .25, "Zie je dat huis  ");
    TekenTekstballon(700, 350, 200, 50, .25, " Ja kom we gaan er naartoe. ");
    tekenpompoen(250,450);
    


}
function TekenStripkader4() {
    background(0, 0, 139);
    tekenrand()
    tekenspook(200, 300);
    Tekenmaan(150,150);
    tekenhuis();
    TekenTekstballon(300, 200, 200, 50, .25, "  Booooooeeeee ");
    TekenTekstballon(400, 400, 200, 50, .25, " Klop klop   ");
    tekenpompoen(200,450);
   
    


}
function TekenStripkader5() {
    background(0, 0, 139);
    tekenrand()
    Tekenmaan(150,150)
    tekenspook(200, 300);
     tekenhuis();
    TekenTekstballon(400, 400, 200, 50, .25, " Die was echt super hard verschoten    ");
    tekenpompoen(200,450);
    TekenBallon2(0,150)

}



/**
 * Tekent een pizza met een gezicht.
 * @param {number} x : de x-positie van de voorwerpen 
 * @param {number} y : de y-positie van de pizza

 */
 


function tekenwolken(x, y ){
    noStroke();
    fill(255,255,255)
    ellipse(x-150,y-150,60,50);
    ellipse(x-130,y-160,60,50);
    ellipse(x-70,y-150,60,50);
    ellipse(x-130,y-140,60,50);
    ellipse(x-90,y-135,60,50);
}





function tekenrand(){
    
    noFill();
    strokeWeight(10);
    stroke(51);
    rect(0, 0, 900, 600);
    strokeWeight()
}



function tekenspook(x ,y ) { 
  
	noStroke(); // spook 
	fill(255, 0, 0);
	ellipse(x, y, 100, 100);
	rect(x-50, y, 100, 75);                                                    
	triangle(x-50, y+70, x-50, y+100, x-30, y+70);
	triangle(x-30, y+70, x-10, y+100, x+10, y+70);
	triangle(x, y+70, x+20, y+100, x+40, y+70);
	triangle(x+30, y+70, x+50, y+100, x+50, y+70);
// Ogen spook 
    fill(100,100,100)
  ellipse(x-20,y,30,30);
  fill(200,200,200)
  ellipse(x-20,y,20,20);
  
  fill(100,100,100)
  ellipse(x+20,y,30,30);
  fill(200,200,200)
  ellipse(x+20,y,20,20);
}
function tekenpompoen(x, y ) {
    // stengel 
    stroke(0, 160, 0);
    strokeWeight(20);
    line(x+50, y+30, x+70, y-50);

    // oranje
    fill(255, 100, 0);
    stroke(0, 100);
    strokeWeight(3);

    // pompoen vorm 
    ellipse(x+50, y+50, 200, 100);  
    // Ogen 
    fill(100,100,100)
    ellipse(x+15,y+30,30,30);
    fill(200,200,200)
    ellipse(x+15,y+30,20,20);
    
    fill(100,100,100)
    ellipse(x+70,y+30,30,30);
    fill(200,200,200)
    ellipse(x+70,y+30,20,20);
 }
 function tekenhuis() {

    // dak 
    stroke(0);
    fill(100,100,0);
    triangle(0, 400, 100, 400, 50, 300);
    
    // huis
    fill(0,255,0);
    rect(0,400,100,200);
    
    // deur
    fill(0,180,0);
    rect(25,500, 75,100);
    
    // door knop
    fill(255,255,0);
    noStroke();
    ellipse(75, 550, 10,10);
    
  

} 
function TekenBallon2(x,y) {
    //de omlijning van het aanhangsel
    fill("");
    strokeWeight(1);
    triangle(x + 180, y + 60, x + 220, y + 60, x + 220, y + 85);
    //de ballon
    rect(x + 110, y + 30, 110, 50, 10, 10, 0, 10);
    //het aanhangsel
    noStroke();
    triangle(x + 180, y + 60, x + 219, y + 60, x + 220, y + 85);
    //de tekst
    fill ("Black");
    textAlign(CENTER, CENTER);
    text("hahah  " ,x + 170, y + 50);
    text("" ,x + 168, y + 65);
}

function Tekenzon(x, y ) {

    noStroke();
    fill(255,255,0);
    ellipse(x,y,100,100);
    }
function Tekenmaan(x, y){
    noStroke();
    fill(255,255,0);
    arc(x-50, y- 50, 80, 80, 1.5, HALF_PI*3);
}
  
  
  


/**
 * Tekent een tekstballon.
 * @param {number} x: de x-positie van de tekstballon
 * @param {number} y: de y-positie van de tekstballon
 * @param {number} breedte: de breedte van de tekstballon. Dit bepaalt ook hoeveel ruimte er is voor de tekst.
 * @param {number} hoogte: de hoogte van de tekstballon. Dit bepaalt ook hoeveel ruimte er is voor de tekst.
 * @param {number} aanhangselOffset: waarde tussen 0 en 1, die zegt waar het aanhangsel naartoe wijst. 0 is links, 1 is rechts.
 * @param {string} tekst: de tekst die getoond wordt in de tekstballon.
 */
function TekenTekstballon(x, y, breedte, hoogte, aanhangselOffset, tekst) {
    // verander aanhangselOffset van een waarde tussen 0 en 1 naar een werkelijke pixel-waarde
    aanhangselOffset = breedte * (aanhangselOffset - .5) * -1;

    // teken de omtrek van het aanhangsel
    strokeWeight(1);
    stroke(0);
    noFill();
    triangle(x + 25, y, x - (aanhangselOffset), y + hoogte * 2/3, x - 25, y);
    
    // teken de ballon
    fill(255);
    textAlign(CENTER);
    ellipse(x, y, breedte, hoogte);

    // teken het aanhangsel zelf, zonder omtrek
    // op deze manier wordt de omtrek van de ballon onderbroken. Dit ziet er gewoon mooier uit.
    noStroke();
    fill(255);
    triangle(x + 25, y, x - (aanhangselOffset), y + hoogte * 2/3, x - 25, y);

    // teken de tekst.
    fill(0);
    text(tekst, x - breedte / 3, y - hoogte / 3, breedte * 2/3, hoogte * 2/3);
  }
