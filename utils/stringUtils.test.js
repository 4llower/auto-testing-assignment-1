import { expect } from 'chai';

import { reverseString, capitalize, isPalindrome } from './stringUtils';

describe('stringUtils', () => {
  describe('reverseString', () => {
    it('should throw the error if provided value is not string', () => {
      expect(() => {
        reverseString([]);
      }).to.throw('Input must be a string');
    });
    it('should reverse string properly for small letters', () => {
      expect(reverseString('abcdefg')).equals('gfedcba');
    });
    it('should reverse string properly with big and small letters', () => {
      expect(reverseString('AbEfAAAlLfFAaddas')).equals('saddaAFfLlAAAfEbA');
    });
    it('should reverse string properly with symbols', () => {
      expect(reverseString('$ADFFSBB___4231_')).equals('_1324___BBSFFDA$');
    });
  });

  describe('capitalize', () => {
    it('should throw the error if provided value is not string', () => {
      expect(() => {
        capitalize(NaN);
      }).to.throw('Input must be a string');
    });
    it('should capitalize string properly', () => {
      expect(capitalize('abcdefg')).equals('Abcdefg');
    });
    it('should return same string if first letter is already capitalized', () => {
      expect(capitalize('Abcdefg')).equals('Abcdefg');
    });
  });

  describe('isPalindrome', () => {
    it('should throw the error if provided value is not string', () => {
      expect(() => {
        isPalindrome({});
      }).to.throw('Input must be a string');
    });
    it('should return true if string can be read the same in both directions', () => {
      expect(isPalindrome('abccba')).equals(true);
    });
    it('should return false if string CANNOT be read the same in both directions', () => {
      expect(isPalindrome('abcdefg')).equals(false);
    });
  });
});
