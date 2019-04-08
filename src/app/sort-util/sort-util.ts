export class SortUtil {
    getSortedNumArr(arr: number[]): number[]  {
        return arr.sort(this._sortingFunction);
    }

    private _sortingFunction(a: number, b: number) {
        return a - b;
    }
}
