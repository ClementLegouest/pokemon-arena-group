
import { BattleService } from './battle.service';
import { Game } from './game';
import { Pokemon } from '../models/pokemon.model';


describe('Test game.ts', () => {

    test('Game winner', () => {
        const ratata = new Pokemon('ratata', 200, 20, 20);
        const pika = new Pokemon('pika', 100, 20, 20);
        // rounds
        const fight1 = new BattleService(ratata, pika);
        const fight2 = new BattleService(ratata, pika);
        const fight3 = new BattleService(ratata, pika);
        // game
        const game = new Game(fight1, fight2, fight3);
        expect(game.gameWinner()).toBe('ratata');

    });

});
