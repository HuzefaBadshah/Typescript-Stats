// to use any library inside node standard library with typescript install type definition:
// npm install @types/node
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinTeamAnalysis } from "./analyzers/WinTeamAnalysis";
import { ConsoleReports } from "./reportTargets/ConsoleReports";
import { HtmlReport } from "./reportTargets/HtmlReport";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const winTeamAnalyzer = new WinTeamAnalysis('Man United');
const consoleReport = new ConsoleReports();
const htmlReport = new HtmlReport('report.html');
const summary = new Summary(winTeamAnalyzer, htmlReport);

summary.buildAndPrintReport(matchReader.matches);


// console.log("match is =============> ", matchReader.matches);