import { BattleService } from './battle.service';


export class Game {
    round1;
    round2;
    round3;
    constructor(round1: BattleService, round2: BattleService, round3: BattleService) {
        this.round1 = round1;
        this.round2 = round2;
        this.round3 = round3;
    }

    gameWinner() {
        if (this.round1.fightWinner() === this.round2.fightWinner() || this.round2.fightWinner() === this.round3.fightWinner()
            || this.round1.fightWinner() === this.round3.fightWinner()) {
            return this.round1.fightWinner();
        } else {
            return this.round2.fightWinner();
        }
    }

}
