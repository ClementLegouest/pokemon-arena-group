
import { BattleService } from './battle.service';
import { Game } from './game';
import { Pokemon } from '../models/pokemon.model';


describe('Test game.ts', () => {

    test('Game winner', () => {
        const ratata = new Pokemon('ratata', 200, 20, 20, 'image');
        const pika = new Pokemon('pika', 0, 20, 20, 'image');
        // game
        const game = new Game();
        expect(game.gameWinner(ratata.name, pika.name, pika.name)).toBe('ratata');

    });

});
