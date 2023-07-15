import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinTeamAnalysis implements Analyzer {
    constructor(public team: string){}

    run(matches: MatchData[]): string {
        const count = matches.reduce((acc: number, match): number => {
            if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
              return ++acc;
            } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
              return ++acc;
            }
            return acc;
          }, 0);

          return `Team ${this.team} won ${count} games`;
    }
}