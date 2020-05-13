import { Pokemon } from './pokemon.model';

describe('Pokemon', () => {
  it('should create an instance', () => {
    expect(new Pokemon('ratata', 100, 20, 20)).toBeTruthy();
  });
});
