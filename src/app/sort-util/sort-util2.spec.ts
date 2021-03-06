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
    const numsToSort = [71, 29, 38, 19, 91, 49, 40, 96, 88, 66];
    const expected = [19, 29, 38, 40, 49, 66, 71, 88, 91, 96];

    // Act
    const actual = suite.sortUtil.getSortedNumArr(numsToSort);

    // Assert
    expect(actual).toEqual(expected);
  });

  test('should properl sort a large array of positive integers', () => {
    // Arrange
    const numsToSort = [2, 87, 64, 56, 41, 85, 24, 45, 46, 21, 58, 94, 81, 21, 30, 77, 76, 64, 2, 47, 15, 24, 2, 20, 61, 97, 77, 54, 83, 34, 74, 98, 49, 0, 40, 40, 79, 88, 94, 51, 75, 32, 22, 50, 62, 87, 50, 38, 14, 47, 62, 57, 35, 39, 2, 77, 39, 83, 85, 38, 70, 85, 45, 28, 18, 43, 3, 92, 16, 68, 23, 27, 24, 4, 58, 56, 72, 30, 25, 51, 41, 3, 74, 99, 62, 9, 49, 16, 76, 53, 16, 49, 88, 43, 5, 47, 47, 6, 46, 1];
    const expected = [0, 1, 2, 2, 2, 2, 3, 3, 4, 5, 6, 9, 14, 15, 16, 16, 16, 18, 20, 21, 21, 22, 23, 24, 24, 24, 25, 27, 28, 30, 30, 32, 34, 35, 38, 38, 39, 39, 40, 40, 41, 41, 43, 43, 45, 45, 46, 46, 47, 47, 47, 47, 49, 49, 49, 50, 50, 51, 51, 53, 54, 56, 56, 57, 58, 58, 61, 62, 62, 62, 64, 64, 68, 70, 72, 74, 74, 75, 76, 76, 77, 77, 77, 79, 81, 83, 83, 85, 85, 85, 87, 87, 88, 88, 92, 94, 94, 97, 98, 99];

    // Act
    const actual = suite.sortUtil.getSortedNumArr(numsToSort);

    // Assert
    expect(actual).toEqual(expected);
  });

  test('should properly sort a larger array of positive integers', () => {
    // Arrange
    const numsToSort = [97, 94, 53, 31, 23, 23, 59, 44, 59, 96, 88, 88, 17, 18, 85, 27, 26, 79, 64, 22, 46, 68, 14, 3, 8, 92, 6, 12, 31, 78, 17, 74, 78, 7, 16, 95, 17, 0, 94, 78, 10, 22, 5, 47, 45, 38, 48, 26, 87, 25, 32, 73, 39, 79, 90, 25, 34, 57, 86, 51, 68, 88, 2, 47, 82, 35, 14, 79, 67, 16, 92, 49, 14, 67, 47, 84, 72, 92, 29, 48, 7, 21, 35, 21, 91, 39, 20, 80, 13, 7, 61, 85, 52, 89, 3, 19, 51, 15, 14, 84, 71, 2, 12, 72, 11, 61, 81, 38, 43, 89, 16, 0, 46, 33, 15, 67, 7, 33, 41, 94, 48, 87, 38, 85, 33, 63, 76, 29, 44, 10, 10, 86, 61, 68, 68, 58, 23, 7, 47, 55, 57, 80, 18, 21, 32, 56, 18, 67, 10, 70, 55, 70, 28, 46, 18, 24, 69, 85, 61, 81, 4, 48, 37, 39, 20, 63, 21, 91, 57, 70, 54, 35, 3, 51, 60, 5, 33, 3, 83, 26, 42, 42, 59, 56, 64, 75, 0, 65, 1, 59, 53, 11, 65, 56, 4, 1, 56, 41, 38, 8, 8, 2, 90, 46, 61, 79, 15, 78, 31, 48, 43, 93, 50, 56, 76, 53, 40, 51, 68, 63, 24, 95, 87, 69, 19, 21, 34, 75, 73, 67, 64, 59, 62, 65, 60, 17, 67, 68, 16, 54, 93, 40, 5, 54, 3, 19, 40, 58, 98, 46];
    const expected = [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 6, 7, 7, 7, 7, 7, 8, 8, 8, 10, 10, 10, 10, 11, 11, 12, 12, 13, 14, 14, 14, 14, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 20, 20, 21, 21, 21, 21, 21, 22, 22, 23, 23, 23, 24, 24, 25, 25, 26, 26, 26, 27, 28, 29, 29, 31, 31, 31, 32, 32, 33, 33, 33, 33, 34, 34, 35, 35, 35, 37, 38, 38, 38, 38, 39, 39, 39, 40, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 46, 46, 46, 46, 46, 47, 47, 47, 47, 48, 48, 48, 48, 48, 49, 50, 51, 51, 51, 51, 52, 53, 53, 53, 54, 54, 54, 55, 55, 56, 56, 56, 56, 56, 57, 57, 57, 58, 58, 59, 59, 59, 59, 59, 60, 60, 61, 61, 61, 61, 61, 62, 63, 63, 63, 64, 64, 64, 65, 65, 65, 67, 67, 67, 67, 67, 67, 68, 68, 68, 68, 68, 68, 69, 69, 70, 70, 70, 71, 72, 72, 73, 73, 74, 75, 75, 76, 76, 78, 78, 78, 78, 79, 79, 79, 79, 80, 80, 81, 81, 82, 83, 84, 84, 85, 85, 85, 85, 86, 86, 87, 87, 87, 88, 88, 88, 89, 89, 90, 90, 91, 91, 92, 92, 92, 93, 93, 94, 94, 94, 95, 95, 96, 97, 98];

    // Act
    const actual = suite.sortUtil.getSortedNumArr(numsToSort);

    // Assert
    expect(actual).toEqual(expected);
  });
});
