//all Cards class
let playArea = document.getElementById("playArea");
let hoverArea = document.getElementById("hoverOverCards");
document.getElementById("firstOrSecond").style.display= "none";

window.addEventListener("load",
  (event) => {
    playArea.hidden=true;
    hoverArea.hidden=false;
  })
class PlayerDeck {
  constructor() {
    this.deck = [];
    let playerCards = ["BT12-088", "BT12-088", "BT12-088", "BT12-088", "BT4-098", "BT4-098", "BT4-098", "BT12-017", "BT12-017", "BT12-017", "BT12-017", "BT12-009", "BT12-009", "BT7-081", "BT7-081", "BT12-013", "BT12-013", "BT12-013", "BT1-090", "BT12-012", "BT12-012","BT12-012", "BT12-012","BT8-097", "BT8-097", "BT8-097","BT7-014", "BT7-014", "BT7-014", "BT7-014", "BT14-009", "BT14-009", "BT14-009", "BT7-011", "BT7-011", "BT7-011", "BT7-080", "BT7-080", "BT4-009", "BT5-008", "BT5-008", "BT5-008", "BT5-008", "BT7-008", "BT7-008", "BT7-008", "BT7-085", "BT7-085", "BT7-085", "BT7-085"];
    for (let i =0; i < playerCards.length; i++) {
      this.deck.push(playerCards[i]);
    }
    //console.log(this.deck);
  }
}
   // this.deck = ["BT12-088", "BT12-088", "BT12-088", "BT12-088", "BT4-098", "BT4-098", "BT4-098", "BT12-017", "BT12-017", "BT12-017", "BT12-017", "BT12-009", "BT12-009", "BT7-081", "BT7-081", "BT12-013", "BT12-013", "BT12-013", "BT1-090", "BT12-012", "BT12-012","BT12-012", "BT12-012","BT8-097", "BT8-097", "BT8-097","BT7-014", "BT7-014", "BT7-014", "BT7-014", "BT14-009", "BT14-009", "BT14-009", "BT7-011", "BT7-011", "BT7-011", "BT7-080", "BT7-080", "BT4-009", "BT5-008", "BT5-008", "BT5-008", "BT5-008", "BT7-008", "BT7-008", "BT7-008", "BT7-085", "BT7-085", "BT7-085", "BT7-085"];

class PlayerHand {
  constructor() {
    this.hand = [];

  }
}
class Card {
  constructor(name, color, set, cardType, playCost) {
    this.name = name;
    this.color =  color;
    this.set = set;
    this.cardType = cardType; //digimon, option, tamer, digi-egg
    this.playCost = playCost;
  }
}
//inheriting parent class
class Digimon extends Card {
  constructor(name, color, set, playCost, level, dp, dvCost, form, attr, type) {
    //call in the super class constructor and pass in the name variable
    super(name, color, set, playCost);
    //overriding the name
    this.level = level;
    this.dp = dp;
    this.dvCost = dvCost;
    this.form = form;
    this.attr = attr;
    this.type = type;
  }
}
//tamer caRD INHERITTING cARD
class Tamer extends Card {
  constructor(name, color, set, playCost, inheritEff, secEff) {
    super(name, color, set, playCost);
    this.inheritEff = inheritEff;
    this.secEff = secEff;
  }
}
class DigiEgg extends Card {
  constructor(name, color, set, level, inheritEff) {
    super(name, color, set);
    this.level = level;
    this.inheritEff = inheritEff;
  }
}
let koromon = new DigiEgg("koromon", "Red", "BT14-001", 2, "bla");
/*UNSUSPEND, DRAW, BREEDING, MAIN ENDTURN*/
function determineFirst() {
  //determine who goes first

}
function unSuspend() {
  ''
}
function Draw() {

}
function breedPhase() {

}
function main() {
  //most logic goes here
}
let playerEggDeck = ["BT14-001", "BT14-001", "BT14-001", "BT14-001"];
let cpuEggDeck = ["BT11-006", "BT11-006", "BT11-006", "BT11-006"];
let cpuDeck = ["EX3-004", "EX3-004", "EX3-004", "EX3-004", "BT11-075", "BT11-075", "BT11-075", "BT11-075", "BT8-110", "BT8-110", "BT10-074", "BT10-074", "BT10-074", "BT10-074", "BT10-079", "BT10-079", "BT10-079", "BT10-079", "EX3-055", "EX3-055","EX3-055","EX3-055", "EX3-003", "EX3-003", "EX3-003", "EX3-003", "BT8-108", "BT8-108", "EX3-010", "EX3-010", "EX3-010", "EX3-010", "EX3-061", "EX3-061", "EX3-061", "EX3-061", "EX3-008", "EX3-008", "EX3-008", "EX3-008", "BT11-079", "BT11-079", "EX3-063", "EX3-063", "EX3-058", "EX3-058", "EX3-058", "EX3-058", "BT11-079", "BT11-079"];
let veemonDeck = document.getElementById("veemonDna");
let redHybridDeck = document.getElementById("redHybrid");

function pickRedHybrid() {
  veemonDeck.style.opacity = "0.3";
  redHybridDeck.style.opacity = "1.0";
  document.getElementById("firstOrSecond").style.display= "block";

}
function pickDNAVeemon() {
  redHybridDeck.style.opacity = "0.3";
  veemonDeck.style.opacity = "1.0";
  document.getElementById("firstOrSecond").style.display= "block";

}
function startGame() {
  playArea.hidden=false;
  hoverArea.hidden=true;
  // Select all inputs with name="example"
  let whoStarts = document.querySelector('input[name="whoStarts"]:checked').value;
// Use Array.forEach to add an event listener to each radio element.
  if (whoStarts == 1) {
    alert("Draw 5");
    let myHand = new PlayerHand();
    let myDeck = new PlayerDeck();
    for (let i = 0; i < 5; i++) {
      myDeck[]

    }
    console.log("My hand is " + myHand[0]);
  } else if (whoStarts ==2) {
    alert("Draw 6");
  }
}
//stuff i can do on unsuspend phase
function unsuspend() {

}
//stuff i can do in draw phase
function draw() {

}
//stuff i can do in breeding phase
function moveToBattle() {

}
function doNothing() {

}
function digivolve() {

}
