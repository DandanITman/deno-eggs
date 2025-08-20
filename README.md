# Egg-cellent Deno Utilities 🥚

A collection of egg-ceptional utilities for Deno projects, renamed with love for all things egg!

## A Sonnet for Scott

*In kitchen warm where sizzling sounds arise,*
*Scott stands with spatula, his heart content,*
*Golden fried chicken meets his hungry eyes,*
*While eggs dance crispy, perfectly well-spent.*

*The morning sun through window gently gleams,*
*On plates of bounty, rich and golden brown,*
*His love for eggs fulfills his breakfast dreams,*
*No finer feast exists in all the town.*

*With every bite of chicken, crisp and hot,*
*And every egg that's cooked just to his taste,*
*Scott's joy increases, happiness his lot,*
*No morsel precious ever goes to waste.*

*So here's to Scott, whose love will never end,*
*For fried chicken and eggs, his dearest friends.*

## Installation

```typescript
import { ... } from "https://deno.land/x/deno_eggs/egg-mod.ts";
```

## Features

- **Network utilities**: HTTP client with built-in retry logic (now with egg-client!)
- **Array utilities**: Chunk arrays, filter operations (egg-cellent array tools!)
- **Parameter encoding**: URL parameter encoding utilities (egg-coded params!)
- **File operations**: Save data to files (egg-save functionality!)

## Usage

### Egg Network Client

```typescript
import { Client } from "https://deno.land/x/deno_eggs/utils/net/egg-client.ts";

const client = new Client();
const response = await client.get("https://api.example.com/data");
```

### Egg Array Utilities

```typescript
import { chunkArray } from "https://deno.land/x/deno_eggs/utils/funcs/egg-chunkArray.ts";

const array = [1, 2, 3, 4, 5, 6];
const chunks = chunkArray(array, 2); // [[1, 2], [3, 4], [5, 6]]
```

### Egg Parameter Encoding

```typescript
import { encodeParams } from "https://deno.land/x/deno_eggs/utils/funcs/egg-encodeParams.ts";

const params = { name: "John", age: 30 };
const encoded = encodeParams(params); // "name=John&age=30"
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Make it egg-stra special!

## License

MIT License
