export function unique(arr: any[]) {
  const toJson = arr.map((item) => JSON.stringify(item))
  const unq = [...new Set(toJson)]
  return unq.map((item) => JSON.parse(item))
}
