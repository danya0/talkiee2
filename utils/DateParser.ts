export class DateParser {
  static getDifferenceDays(firstDate: Date, secondDate: Date): number {
    const diff = Math.abs(+firstDate - +secondDate)
    return Math.floor(diff / (1000 * 60 * 60 * 24))
  }
}
