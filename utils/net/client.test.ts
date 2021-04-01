import { Options, assert } from "../../deps.ts";
import { Client } from "./client.ts";
import { assertExists } from "../../deps.ts";

class MockClient extends Client {
    run() {
        return this.sendRequest("", )
    }
}

Deno.test('should instantiate', () => {
    const opts: Options = {};
    const client = new MockClient(opts, () => true);
    
    assertExists(client)
});

// Deno.test('should handle error', () => {
//     const opts: Options = {};
//     const client = new MockClient(opts, ());
//     assertExists(client)
// })