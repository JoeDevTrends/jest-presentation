import {
  SortUtil
} from './sort-util';

describe('sort-utils', () => {
  let suite = {
    sortUtil: < SortUtil > {}
  };
  beforeAll(() => {
    suite.sortUtil = new SortUtil();
  });
  afterAll(() => {
    suite = null;
  });

  test('should properly sort an array of positive integers', () => {
    // Arrange
    const numsToSort = [97, 23, 9, 41, 55, 13, 12, 90, 7, 59];
    const expected = [7, 9, 12, 13, 23, 41, 55, 59, 90, 97];

    // Act
    const actual = suite.sortUtil.getSortedNumArr(numsToSort);

    // Assert
    expect(actual).toEqual(expected);
  });

  test('should properl sort a large array of positive integers', () => {
    // Arrange
    const numsToSort = [87, 33, 21, 64, 5, 35, 23, 30, 12, 62, 83, 60, 89, 73, 94, 60, 67, 0, 65, 99, 54, 38, 86, 14, 41, 66, 65, 66, 42, 68, 32, 31, 21, 0, 52, 31, 31, 84, 15, 13, 37, 65, 4, 69, 77, 26, 85, 72, 56, 6, 92, 46, 79, 17, 53, 72, 43, 21, 31, 32, 10, 64, 75, 87, 3, 99, 55, 22, 99, 44, 11, 81, 29, 32, 15, 66, 65, 38, 44, 52, 41, 85, 32, 61, 25, 53, 52, 88, 95, 66, 80, 10, 18, 65, 60, 54, 28, 83, 86, 16];
    const expected = [0, 0, 3, 4, 5, 6, 10, 10, 11, 12, 13, 14, 15, 15, 16, 17, 18, 21, 21, 21, 22, 23, 25, 26, 28, 29, 30, 31, 31, 31, 31, 32, 32, 32, 32, 33, 35, 37, 38, 38, 41, 41, 42, 43, 44, 44, 46, 52, 52, 52, 53, 53, 54, 54, 55, 56, 60, 60, 60, 61, 62, 64, 64, 65, 65, 65, 65, 65, 66, 66, 66, 66, 67, 68, 69, 72, 72, 73, 75, 77, 79, 80, 81, 83, 83, 84, 85, 85, 86, 86, 87, 87, 88, 89, 92, 94, 95, 99, 99, 99];

    // Act
    const actual = suite.sortUtil.getSortedNumArr(numsToSort);

    // Assert
    expect(actual).toEqual(expected);
  });

  test('should properly sort a larger array of positive integers', () => {
    // Arrange
    const numsToSort = [9, 76, 5, 94, 31, 28, 7, 16, 49, 70, 99, 86, 15, 1, 75, 10, 31, 7, 73, 48, 50, 67, 51, 69, 8, 46, 95, 49, 14, 22, 61, 48, 31, 30, 52, 21, 29, 38, 19, 94, 73, 80, 89, 4, 60, 26, 46, 34, 93, 94, 71, 66, 6, 68, 44, 78, 91, 97, 6, 2, 78, 57, 90, 65, 35, 98, 34, 23, 58, 27, 43, 13, 31, 87, 98, 82, 4, 94, 51, 23, 51, 58, 49, 83, 87, 71, 49, 96, 16, 58, 4, 98, 37, 5, 86, 3, 75, 50, 34, 18, 97, 80, 5, 21, 60, 47, 99, 93, 67, 99, 81, 21, 40, 79, 58, 29, 42, 54, 64, 10, 38, 7, 57, 51, 53, 62, 26, 49, 84, 22, 4, 36, 56, 24, 74, 82, 34, 30, 95, 76, 98, 3, 10, 24, 63, 54, 91, 42, 90, 84, 66, 0, 86, 19, 96, 48, 6, 14, 84, 71, 58, 74, 6, 53, 82, 88, 41, 15, 33, 76, 0, 67, 38, 43, 88, 63, 91, 63, 89, 87, 56, 54, 46, 28, 58, 43, 40, 16, 73, 37, 7, 87, 59, 68, 54, 99, 8, 17, 13, 60, 45, 42, 46, 78, 39, 92, 29, 66, 73, 40, 7, 51, 68, 40, 82, 39, 29, 16, 73, 29, 79, 64, 3, 28, 96, 55, 43, 82, 49, 87, 82, 93, 67, 28, 70, 6, 68, 45, 69, 78, 65, 68, 53, 56, 10, 71, 69, 30, 14, 42];
    const expected = [0, 0, 1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 9, 10, 10, 10, 10, 13, 13, 14, 14, 14, 15, 15, 16, 16, 16, 16, 17, 18, 19, 19, 21, 21, 21, 22, 22, 23, 23, 24, 24, 26, 26, 27, 28, 28, 28, 28, 29, 29, 29, 29, 29, 30, 30, 30, 31, 31, 31, 31, 33, 34, 34, 34, 34, 35, 36, 37, 37, 38, 38, 38, 39, 39, 40, 40, 40, 40, 41, 42, 42, 42, 42, 43, 43, 43, 43, 44, 45, 45, 46, 46, 46, 46, 47, 48, 48, 48, 49, 49, 49, 49, 49, 49, 50, 50, 51, 51, 51, 51, 51, 52, 53, 53, 53, 54, 54, 54, 54, 55, 56, 56, 56, 57, 57, 58, 58, 58, 58, 58, 58, 59, 60, 60, 60, 61, 62, 63, 63, 63, 64, 64, 65, 65, 66, 66, 66, 67, 67, 67, 67, 68, 68, 68, 68, 68, 69, 69, 69, 70, 70, 71, 71, 71, 71, 73, 73, 73, 73, 73, 74, 74, 75, 75, 76, 76, 76, 78, 78, 78, 78, 79, 79, 80, 80, 81, 82, 82, 82, 82, 82, 82, 83, 84, 84, 84, 86, 86, 86, 87, 87, 87, 87, 87, 88, 88, 89, 89, 90, 90, 91, 91, 91, 92, 93, 93, 93, 94, 94, 94, 94, 95, 95, 96, 96, 96, 97, 97, 98, 98, 98, 98, 99, 99, 99, 99];

    // Act
    const actual = suite.sortUtil.getSortedNumArr(numsToSort);

    // Assert
    expect(actual).toEqual(expected);
  });
});
