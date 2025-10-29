import { expect } from "chai";

import { findMax, findMin, removeDuplicates } from "./arrayUtils";

describe("arrayUtils", () => {
  describe("findMax", () => {
    it("should throw the error if provided value is not array", () => {
      expect(() => {
        findMax("NOT_ARRAY");
      }).to.throw("Input must be an array");
    });
    it("should return maximum value in an array", () => {
      const input = [1, 7, 1, 2, 8];

      expect(findMax(input)).equals(8);
    });
    it("should return maximum value with negatives", () => {
      const input = [-6, -3, -100, -5, -3];

      expect(findMax(input)).equals(-3);
    });
  });

  describe("findMin", () => {
    it("should throw the error if provided value is not array", () => {
      expect(() => {
        findMin(NaN);
      }).to.throw("Input must be an array");
    });
    it("should return minimum value in an array", () => {
      const input = [1, 7, 1, 2, 8];

      expect(findMin(input)).equals(1);
    });
    it("should return minimum value with negatives", () => {
      const input = [-6, -6, -100, -25, -3];

      expect(findMin(input)).equals(-100);
    });
  });

  describe("removeDuplicates", () => {
    it("should throw the error if provided value is not array", () => {
      expect(() => {
        removeDuplicates({});
      }).to.throw("Input must be an array");
    });
    it("should return unique values", () => {
      const input = [1, 7, 1, 2, 8, 8, 2, 2, 3];

      expect(removeDuplicates(input)).to.deep.equal([1, 7, 2, 8, 3]);
    });
    it("should return minimum value with negatives", () => {
      const input = [-6, -6, -100, -25, -3, -25];

      expect(removeDuplicates(input)).to.deep.equal([-6, -100, -25, -3]);
    });
  });
});
