//all Cards class
class Card {
  constructor(name, color, set, type, playCost) {
    this.name = "Agumon";
    this.color =  "Red";
    this.set = set;
    this.type = type;
    this.playCost = playCost;
  }
}
//inheriting parent class
class Digimon extends Card {
  constructor(name, color, set, playCost, level) {
    //call in the super class constructor and pass in the name variable
    super(name, color, set, playCost);
    //overriding the name
    this.playCost = playCost;
  }
  
}
let agumon = new Digimon("Agumon", "Red", "BT-001", 3, 6);
alert(agumon.playCost);
