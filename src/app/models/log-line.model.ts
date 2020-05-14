export class LogLine {
  line: string;
  color: string;
  date: Date;

  constructor(line: string, color: string, date: Date) {
    this.line = line;
    this.color = color;
    this.date = date;
  }
}
