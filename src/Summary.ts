import { MatchData } from "./MatchData";
import { WinTeamAnalysis } from "./analyzers/WinTeamAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHtmlReport(team: string) {
        const winTeamAnalyzer = new WinTeamAnalysis(team);
        const htmlReport = new HtmlReport('report.html');
        const summary = new Summary(winTeamAnalyzer, htmlReport);
        return summary
    }
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]) {
      const output = this.analyzer.run(matches);
      this.outputTarget.print(output);
    }
}