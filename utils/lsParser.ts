export class LsParser {
  static get(key: string) {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }
  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  static removeItem(key: string) {
    localStorage.removeItem(key)
  }
}
