export async function multiplyTrain<TIn, TOut>(
  input: TIn[],
  func: (item: TIn, index: number) => Promise<TOut[]>
) {
  const output: TOut[] = [];

  for (let i = 0; i < input.length; i++) {
    const item = input[i];

    const result = await func(item, i);

    output.push(...result);
  }

  return output;
}
