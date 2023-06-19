// to use any library inside node standard library with typescript install type definition:
// npm install @types/node
import fs from "fs";

const matches = fs
  .readFileSync(`${__dirname}/../football.csv`, {
    encoding: "utf-8",
  })
  .split("\n")
  .map((item: string): string[] => item.split(","));

console.log("match is =============> ", matches);

// enum - enumeration
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

const count = matches.reduce((acc: number, match: string[]): number => {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    return ++acc;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    return ++acc;
  }
  return acc;
}, 0);

console.log("count ------------>", count);
