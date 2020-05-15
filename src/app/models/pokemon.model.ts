export class Pokemon {
  public name: string;
  public hp: number;
  public speed: number;
  public attack: number;
  public isSelected: boolean;

  constructor(name: string, hp: number, speed: number, attack: number) {
    this.name = name;
    this.hp = hp;
    this.speed = speed;
    this.attack = attack;
    this.isSelected = false;
  }

  attackPokemon(receiver: Pokemon) {

    const attacklist = ['simple', 'special'];
    // fais un random entre 0 et 1 pour choisir la case du tableau
    const typeattack = this.getRandomInt(2);

    if (attacklist[typeattack] === 'simple') {
      receiver.hp = (receiver.hp - this.attack >= 0 ? receiver.hp - this.attack : 0);
    } else {
      receiver.hp = (receiver.hp - this.attack * 2 >= 0 ? receiver.hp - this.attack * 2 : 0);
    }

    return this.name + ' attaque ' + receiver.name + ' avec une attaque ' + attacklist[typeattack]
      + ', ' + receiver.name + ' a maintenant ' + receiver.hp + ' hp ';

  }

  showPokemon() {
    return this.name + '\n' + ' HP : ' + this.hp + '\n' + ' speed: ' + this.speed + '\n' + ' Attack: ' + this.attack;
  }

  isDead() {
    if (this.hp <= 0) {
      return true;
    }
    return false;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
