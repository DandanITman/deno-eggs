export function filterAll<T>(funcs: Array<(value: T, index: number, array: T[]) => unknown>, list: T[]): T[] {
  return funcs.reduce<T[]>(
    (remaining, func) => remaining.filter(func),
    list);
}
