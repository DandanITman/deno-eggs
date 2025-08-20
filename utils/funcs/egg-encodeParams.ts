export function encodeParams(base: string, params: { [id: string]: any; }): string {
  return base + '?'.concat(
    ...Object
      .keys(params)
      .map((key) => key + '=' + (params[key] as string))
  );
}
