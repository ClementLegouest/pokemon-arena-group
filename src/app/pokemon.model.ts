export class Pokemon {
  public name: string;
  public hp: number;
  public speed: number;
  public attack: number;

  constructor(name: string, hp: number, speed: number, attack: number) {
    this.name = name;
    this.hp = hp;
    this.speed = speed;
    this.attack = attack;
  }

  attackPokemon(receiver: Pokemon) {

    const attacklist = ['simple', 'special'];
    // fais un random entre 0 et 1 pour choisir la case du tableau
    const typeattack = this.getRandomInt(1);

    if (attacklist[typeattack] === 'simple') {
      receiver.hp = receiver.hp - this.attack;
    } else {
      receiver.hp = receiver.hp - this.attack * 2;
    }

    return this.name + ' attaque ' + receiver.name + ' avec ' + attacklist[typeattack]
      + ' , ' + receiver.name + ' a maintenant ' + receiver.hp + ' hp ';

  }

  showPokemon() {

    return this.name + ' Point de vie: ' + this.hp + ' speed: ' + this.speed + ' Attack: ' + this.attack;

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
