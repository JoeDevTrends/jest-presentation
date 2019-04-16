import { SortUtil } from './sort-util';

describe('sort-utils', () => {
    let suite = { sortUtil: <SortUtil>{} };
    beforeAll(() => {
        suite.sortUtil = new SortUtil();
    });
    afterAll(() => {
        suite = null;
    });

    test('should properly sort an array of positive integers', () => {
        // Arrange
        const numsToSort = [6, 21, 123, 12341234, 55, 32, 56];
        const expected = [6, 21, 32, 55, 56, 123, 12341234];

        // Act
        const actual = suite.sortUtil.getSortedNumArr(numsToSort);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('should properl sort a large array of positive integers', () => {
        // Arrange
        const numsToSort = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83,
            82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65,
            64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47,
            46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29,
            28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11,
            10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
            39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
            57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
            75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
            93, 94, 95, 96, 97, 98, 99, 100];

        // Act
        const actual = suite.sortUtil.getSortedNumArr(numsToSort);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('should properly sort a larger array of positive integers', () => {
        // Arrange
        const numsToSort = [83, 66, 77, 10, 51, 53, 46, 84, 85, 79, 3, 97, 5, 59, 20, 50, 30, 69, 98, 68, 12, 6, 45, 25, 7, 32, 1, 90, 8, 100, 11, 40, 39, 24, 14, 62, 82, 35, 67, 55, 94, 29, 23, 88, 37, 70, 21, 17, 61, 58, 16, 74, 89, 22, 34, 33, 92, 99, 18, 19, 87, 31, 2, 64, 15, 9, 60, 57, 72, 81, 78, 95, 28, 75, 38, 41, 43, 42, 71, 48, 76, 73, 44, 65, 56, 63, 54, 96, 80, 26, 49, 13, 47, 86, 36, 93, 27, 4, 52, 91];
        const expected = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14,
        15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28,
        29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42,
        43, 43, 44, 44, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 50, 50, 51, 51, 52, 52, 53, 53, 54, 54, 55, 55, 56, 56,
        57, 57, 58, 58, 59, 59, 60, 60, 61, 61, 62, 62, 63, 63, 64, 64, 65, 65, 66, 66, 67, 67, 68, 68, 69, 69, 70, 70,
        71, 71, 72, 72, 73, 73, 74, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 79, 80, 80, 81, 81, 82, 82, 83, 83, 84, 84,
        85, 85, 86, 86, 87, 87, 88, 88, 89, 89, 90, 90, 91, 91, 92, 92, 93, 93, 94, 94, 95, 95, 96, 96, 97, 97, 98, 98,
        99, 99, 100, 100];

        // Act
        const actual = suite.sortUtil.getSortedNumArr(numsToSort);

        // Assert
        expect(actual).toEqual(expected);
    });
});
