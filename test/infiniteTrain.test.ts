import { expect } from "chai";
import { infiniteTrain } from "../src";

describe("infiniteTrain", () => {
  it("should process recursively until no next items remain", async () => {
    const result = await infiniteTrain(
      [1, 2, 3],
      async (item: number, level: number) =>
        await Promise.resolve({
          output: [`${item} ${level}`],
          next: item < 3 ? [item + 1, item + 2] : [],
        })
    );
    expect(result).to.deep.equal([
      ...["1 0", "2 0", "3 0"],
      ...["2 1", "3 1"],
      ...["3 1", "4 1"],
      ...["3 2"],
      ...["4 2"],
    ]);
  });
});
