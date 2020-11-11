export async function save(filename: string, serialized: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(serialized);
  await Deno.writeFile(filename, data);
}
