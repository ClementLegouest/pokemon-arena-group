import { BattleService } from './battle.service';


export class Game {
    fight1;
    fight2;
    fight3;
    constructor(fight1: BattleService, fight2: BattleService, fight3: BattleService) {
        this.fight1 = fight1;
        this.fight2 = fight2;
        this.fight3 = fight3;
    }

    gameWinner() {
        if (this.fight1.fightWinner() === this.fight2.fightWinner() || this.fight2.fightWinner() === this.fight3.fightWinner()
            || this.fight1.fightWinner() === this.fight3.fightWinner()) {
            return this.fight1.fightWinner();
        } else {
            return this.fight2.fightWinner();
        }
    }

}
