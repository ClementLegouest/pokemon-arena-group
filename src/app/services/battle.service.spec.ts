import { TestBed } from '@angular/core/testing';

import { BattleService } from './battle.service';
import { Pokemon } from '../models/pokemon.model';

describe('BattleService', () => {
  it('FightingWinner', () => {
    const service: BattleService = new BattleService();
    expect(service.fightWinner(new Pokemon('ratata', 20, 40, 20, 'image'),
      new Pokemon('pika', 100, 20, 20, 'image'))).toBe('Combat en cours');
  });
});

describe('get random int', () => {
  it('get int', () => {
    const ratata = new Pokemon('ratata', 100, 20, 20, 'image');
    expect(ratata.getRandomInt(2)).toBeLessThan(2);
  });
});

describe('Sort by speed', () => {
  it('Speed', () => {
    const service1: BattleService = new BattleService();
    expect(service1.sortBySpeed(new Pokemon('ratata', 20, 40, 20, 'image'),
    new Pokemon('pika', 100, 20, 20, 'image'))).toBe('ratata');
  });
});

