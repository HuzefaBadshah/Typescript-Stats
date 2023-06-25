// to use any library inside node standard library with typescript install type definition:
// npm install @types/node
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

// const matches = fs
//   .readFileSync(`${__dirname}/../football.csv`, {
//     encoding: "utf-8",
//   })
//   .split("\n")
//   .map((item: string): string[] => item.split(","));

const reader = new CsvFileReader("football.csv");
reader.read();

console.log("match is =============> ", reader.data);

const count = reader.data.reduce((acc: number, match): number => {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    return ++acc;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    return ++acc;
  }
  return acc;
}, 0);

console.log("count ------------>", count);
