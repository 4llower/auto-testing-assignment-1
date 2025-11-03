import { expect } from 'chai';

import { add, subtract, multiply, divide } from './mathUtils';

describe('mathUtils', () => {
  describe('add', () => {
    it('should sum up positive numbers correctly', () => {
      expect(add(412, 43)).equals(455);
    });
    it('should sum up negative numbers correctly', () => {
      expect(add(-10, -30)).equals(-40);
    });
    it('should sum up negative and positive numbers correctly', () => {
      expect(add(10, -30)).equals(-20);
    });
  });
  describe('subtract', () => {
    it('should substract positive numbers correctly', () => {
      expect(subtract(412, 43)).equals(369);
    });
    it('should substract negative numbers correctly', () => {
      expect(subtract(-10, -30)).equals(20);
    });
    it('should substract negative and positive numbers correctly', () => {
      expect(subtract(10, -30)).equals(40);
    });
  });
  describe('multiply', () => {
    it('should multiply positive numbers correctly', () => {
      expect(multiply(123, 23)).equals(2829);
    });
    it('should multiply negative numbers correctly', () => {
      expect(multiply(-341, -303)).equals(103323);
    });
    it('should multiply negative and positive numbers correctly', () => {
      expect(multiply(10, -30)).equals(-300);
    });
  });
  describe('divide', () => {
    it('should multiply positive numbers correctly', () => {
      expect(divide(111, 3)).equals(37);
    });
    it('should multiply negative numbers correctly', () => {
      expect(divide(-10000, -100)).equals(100);
    });
    it('should multiply negative and positive numbers correctly', () => {
      expect(divide(800, -20)).equals(-40);
    });
    it('should throw the error when denominator is equal zero', () => {
      expect(() => divide(6, 0)).to.throw('Cannot divide by zero');
    });
  });
});
