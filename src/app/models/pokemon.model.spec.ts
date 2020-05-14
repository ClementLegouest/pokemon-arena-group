import { Pokemon } from './pokemon.model';

describe('Pokemon', () => {
  it('should create an instance', () => {
    expect(new Pokemon('ratata', 100, 20, 20)).toBeTruthy();
  });
});

describe('show pokemon', () => {
  it('should pokemon', () => {
    const ratata = new Pokemon('ratata', 100, 20, 20);
    expect(ratata.showPokemon()).toBe(ratata.name + '\n' + ' HP : ' + ratata.hp + '\n' +
     ' speed: ' + ratata.speed + '\n' + ' Attack: ' + ratata.attack);
  });
});

describe('attack', () => {
  it('should attack pokemon', () => {
    const pika = new Pokemon('pika', 100, 20, 20);
    const ratata = new Pokemon('ratata', 100, 20, 20);
    expect(ratata.attackPokemon(pika)).toContain(ratata.name + ' attaque ' + pika.name);
  });
});

describe('is Dead', () => {
  it('should pokemon life', () => {
    const ratata = new Pokemon('ratata', 100, 20, 20);
    expect(ratata.isDead()).toBe(false);
  });
});

describe('get random int', () => {
  it('get int', () => {
    const ratata = new Pokemon('ratata', 100, 20, 20);
    expect(ratata.getRandomInt(2)).toBeLessThan(2);
  });
});

