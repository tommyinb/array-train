# Array Train

Instead of using `await Promise.all(array.map(async ...))` to fire all async functions at once, you can use `await train(array, async ...)` to run async functions sequentially, one after another — just like a train.

## Installation

```sh
npm install array-train
```

## Usage

Use `train` when you need to process items in series rather than in parallel.

```ts
import { train } from "array-train";

const responses = await train(
  [
    "https://www.google.com",
    "https://developer.mozilla.org",
    "https://github.com",
    // ...
  ],
  async (uri) => await fetch(uri)
);
```

## Extra

Array Train provides three types of train functions:

## Simple Train

```ts
import { simpleTrain } from "array-train";

await simpleTrain([1, 2, 3], async (x) => x + 1);
```

This works like the `map` function, returning `[2, 3, 4]`. It is also the default implementation of `train`.

## Multiply Train

```ts
import { multiplyTrain } from "array-train";

await multiplyTrain([1, 2, 3], async (x) => [x, x + 1]);
```

This is an async version of `flatMap`, returning `[1, 2, 2, 3, 3, 4]`.

## Infinite Train

```ts
import { infiniteTrain } from "array-train";

await infiniteTrain([1, 2, 3], async (x) => ({
  output: [x * 10, x * 100],
  next: x < 3 ? [x + 1, x + 2] : [],
}));
```

This function continues processing as long as you provide `next` values, accumulating all `output` results.

## License

MIT
