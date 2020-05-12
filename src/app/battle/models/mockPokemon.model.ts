export default class Pokemon {
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

  attackPokemon(receiver: Pokemon)
  {
    receiver.hp = receiver.hp - this.attack;
  }
}
