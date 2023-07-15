import { OutputTarget } from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
    constructor(private filename: string) {}

    print(report: string): void {
        const data = `
            <main>
                <h1>Analysis Report</h1>
                <p>${report}</p>
            </main>
        `;
        fs.writeFileSync(`${__dirname}/${this.filename}`, data);
    }
}