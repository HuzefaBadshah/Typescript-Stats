// to use any library inside node standard library with typescript install type definition:
// npm install @types/node
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log("match is =============> ", matchReader.matches);

const count = matchReader.matches.reduce((acc: number, match): number => {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    return ++acc;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    return ++acc;
  }
  return acc;
}, 0);

console.log("count ------------>", count);
