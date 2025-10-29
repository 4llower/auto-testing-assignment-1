import { expect } from "chai";
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken,
} from "./usersListUtils";

const mockUsers = [
  { id: 1, name: "Alice", age: 30, email: "alice@example.com" },
  { id: 2, name: "Charlie", age: 25, email: "charlie@example.com" },
  { id: 3, name: "Bob", age: 35, email: "bob@example.com" },
  { id: 4, name: "David", age: 19, email: "david@example.com" },
  { id: 5, name: "Eve", age: 40, email: "eve@example.com" },
  { id: 6, name: "Frank", age: 25, email: "frank@example.com" },
];

describe("User Utility Functions", () => {
  describe("filterUsersByAge", () => {
    it("should return users within the specified age range", () => {
      const result = filterUsersByAge(mockUsers, 25, 35);

      expect(result.length).equals(4);
      expect(result.every((user) => user.age >= 25 && user.age <= 35)).to.be
        .true;
      expect(result.map((u) => u.name)).to.include.members([
        "Alice",
        "Charlie",
        "Bob",
        "Frank",
      ]);
    });

    it("should return an empty array if no users match the range", () => {
      const result = filterUsersByAge(mockUsers, 100, 150);
      expect(result).to.be.an("array").that.is.empty;
    });

    it("should handle the edge case where minAge equals maxAge", () => {
      const result = filterUsersByAge(mockUsers, 25, 25);
      expect(result.length).equals(2);
      expect(result.map((u) => u.name)).to.include.members([
        "Charlie",
        "Frank",
      ]);
    });

    it("should return an empty array if the input users array is empty", () => {
      const result = filterUsersByAge([], 20, 30);
      expect(result).to.be.an("array").that.is.empty;
    });

    it("should throw an error if users is not an array", () => {
      expect(() => filterUsersByAge(null, 20, 30)).to.throw(
        "Users must be an array"
      );
      expect(() => filterUsersByAge({}, 20, 30)).to.throw(
        "Users must be an array"
      );
    });
  });

  describe("sortUsersByName", () => {
    it("should return users sorted alphabetically by name", () => {
      const sortedNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
      const result = sortUsersByName(mockUsers);
      expect(result.map((u) => u.name)).to.deep.equal(sortedNames);
    });

    it("should return an empty array if the input users array is empty", () => {
      const result = sortUsersByName([]);
      expect(result).to.be.an("array").that.is.empty;
    });

    it("should not mutate the original users array", () => {
      const originalUsers = [...mockUsers];
      const result = sortUsersByName(mockUsers);
      expect(result).to.not.equal(mockUsers);
      expect(mockUsers).to.deep.equal(originalUsers);
    });

    it("should throw an error if users is not an array", () => {
      expect(() => sortUsersByName("not an array")).to.throw(
        "Users must be an array"
      );
      expect(() => sortUsersByName(123)).to.throw("Users must be an array");
    });
  });

  describe("findUserById", () => {
    it("should return the user object when a matching ID is found", () => {
      const targetId = 3;
      const result = findUserById(mockUsers, targetId);
      expect(result).to.be.an("object");
      expect(result.id).to.equal(targetId);
      expect(result.name).to.equal("Bob");
    });

    it("should return null when no matching ID is found", () => {
      const result = findUserById(mockUsers, 999);
      expect(result).to.be.null;
    });

    it("should return null if the input users array is empty", () => {
      const result = findUserById([], 1);
      expect(result).to.be.null;
    });

    it("should return null if ID types do not match", () => {
      const result = findUserById(mockUsers, "1");
      expect(result).to.be.null;
    });

    it("should throw an error if users is not an array", () => {
      expect(() => findUserById(undefined, 1)).to.throw(
        "Users must be an array"
      );
      expect(() => findUserById({ id: 1 }, 1)).to.throw(
        "Users must be an array"
      );
    });
  });

  describe("isEmailTaken", () => {
    it("should return true when a matching email is found", () => {
      const result = isEmailTaken(mockUsers, "alice@example.com");
      expect(result).to.be.true;
    });

    it("should return false when no matching email is found", () => {
      const result = isEmailTaken(mockUsers, "nonexistent@example.com");
      expect(result).to.be.false;
    });

    it("should return false if the input users array is empty", () => {
      const result = isEmailTaken([], "test@example.com");
      expect(result).to.be.false;
    });

    it("should return false for a case-mismatch email", () => {
      const result = isEmailTaken(mockUsers, "Alice@example.com");
      expect(result).to.be.false;
    });

    it("should throw an error if users is not an array", () => {
      expect(() => isEmailTaken(12345, "a@b.com")).to.throw(
        "Users must be an array"
      );
      expect(() => isEmailTaken("users", "a@b.com")).to.throw(
        "Users must be an array"
      );
    });
  });
});
