//all Cards class
class Card {
  constructor(name, color, set, cardType, playCost) {
    this.name = name;
    this.color =  color;
    this.set = set;
    this.cardType = cardType; //digimon, option, tamer
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
let jb = new Tamer("JB", "Green", "BT7-089", 3, "bla", "blaa");
alert(jb.secEff);
