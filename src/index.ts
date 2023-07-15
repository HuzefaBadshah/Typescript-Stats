// to use any library inside node standard library with typescript install type definition:
// npm install @types/node
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log("match is =============> ", matchReader.matches);



console.log("count ------------>", count);
