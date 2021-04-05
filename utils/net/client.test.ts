import { Options, assert } from "../../deps.ts";
import { Client } from "./client.ts";
import { assertExists } from "../../deps.ts";

class MockClient extends Client {
    run() {
        return this.post("", )
    }
}

class TestClient extends Client {

  constructor() {
    super({})
  }

  async run() {
    const result = await this.post("hello");
    const result2 = await this.post("hello", {}, () => true);
    const result3 = await this.postRaw("hello", undefined, () => true);
    return result;
  }
}

Deno.test('should instantiate', () => {
    const opts: Options = {};
    // const client = new MockClient(opts, () => true);
    
    // assertExists(client)
});

// Deno.test('should handle error', () => {
//     const opts: Options = {};
//     const client = new MockClient(opts, ());
//     assertExists(client)
// })