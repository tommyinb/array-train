import { expect } from "chai";
import { multiplyTrain } from "../src";

describe("multiplyTrain", () => {
  it("should process each item and flatten the output arrays", async () => {
    const result = await multiplyTrain(
      [1, 2],
      async (item: number, index: number) =>
        await Promise.resolve([`${item} ${index}`, `${item + 1}`])
    );

    expect(result).to.deep.equal(["1 0", "2", "2 1", "3"]);
  });
});
