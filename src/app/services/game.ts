import { BattleService } from './battle.service';


export class Game {

    constructor() {
    }

    gameWinner(round1: string, round2: string, round3: string) {
        if (round1 === round2 || round2 === round3
            || round1 === round3) {
            return round1;
        } else {
            return round2;
        }
    }


}
