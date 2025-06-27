export async function simpleTrain<TIn, TOut>(
  input: TIn[],
  func: (item: TIn, index: number) => Promise<TOut>
) {
  const output: TOut[] = [];

  let index = 0;
  for (const item of input) {
    const result = await func(item, index);

    output.push(result);

    index++;
  }

  return output;
}
