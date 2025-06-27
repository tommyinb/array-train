import { expect } from "chai";
import { simpleTrain } from "../src/simpleTrain";

describe("simpleTrain", () => {
  it("should process each item and return the correct output", async () => {
    const result = await simpleTrain(
      [1, 2, 3],
      async (item: number, index: number) =>
        await Promise.resolve(`${item * 2} ${index}`)
    );

    expect(result).to.deep.equal(["2 0", "4 1", "6 2"]);
  });
});
