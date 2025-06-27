export async function infiniteTrain<TIn, TOut>(
  input: TIn[],
  func: (item: TIn, level: number) => Promise<{ output: TOut[]; next: TIn[] }>
) {
  const allOutput: TOut[] = [];

  let currentInput = input;
  let level = 0;

  while (currentInput.length > 0) {
    let nextInput: TIn[] = [];

    for (const item of currentInput) {
      const result = await func(item, level);

      allOutput.push(...result.output);
      nextInput.push(...result.next);
    }

    currentInput = nextInput;
    level++;
  }

  return allOutput;
}
