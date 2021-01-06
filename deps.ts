// @deno-types="https://unpkg.com/ky@0.25.1/index.d.ts"
import ky from "https://unpkg.com/ky@0.25.1/index.js";
export type {AfterResponseHook, BeforeRequestHook, BeforeRetryHook, DownloadProgress, Hooks, Input, Options, NormalizedOptions, ResponsePromise, RetryOptions} from "https://unpkg.com/ky@0.25.1/index.d.ts";

import { faker } from "https://raw.githubusercontent.com/jackfiszr/deno-faker/master/mod.ts";

// @deno-types="https://deno.land/x/fuse@v6.4.1/dist/fuse.d.ts"
import Fuse from 'https://deno.land/x/fuse@v6.4.1/dist/fuse.esm.min.js'

export {
    ky,
    faker,
    Fuse,
}