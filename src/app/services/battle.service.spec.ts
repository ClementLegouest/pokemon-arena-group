import { TestBed } from '@angular/core/testing';

import { BattleService } from './battle.service';
import { Pokemon } from '../models/pokemon.model';

describe('BattleService', () => {
  it('FightingWinner', () => {
    const service: BattleService = new BattleService(new Pokemon('ratata', 20, 40, 20), new Pokemon('pika', 100, 20, 20));
    expect(service.fightWinner()).toBe('Combat en cours');
  });
});

describe('get random int', () => {
  it('get int', () => {
    const ratata = new Pokemon('ratata', 100, 20, 20);
    expect(ratata.getRandomInt(2)).toBeLessThan(2);
  });
});

describe('Sort by speed', () => {
  it('Speed', () => {
    const service1: BattleService = new BattleService(new Pokemon('ratata', 20, 40, 20), new Pokemon('pika', 100, 20, 20));
    expect(service1.sortBySpeed()).toBe('ratata');
  });
});

