import fs from "fs";
export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(`${__dirname}/../${this.filename}`, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((item: string): string[] => item.split(","));
  }
}
