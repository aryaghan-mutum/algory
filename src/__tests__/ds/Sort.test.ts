import { bubbleSortImper } from '../../../src/ds/sort/BubbleSort'
import { insertionSortImper } from '../../../src/ds/sort/InsertionSort'
import { mergeSort } from '../../../src/ds/sort/MergeSort'
import { quickSort } from '../../../src/ds/sort/QuickSort'
import { selectionSortImper } from '../../../src/ds/sort/SelectionSort'

describe('Bubble Sort', () => {

    it('test bubbleSortImper', () => {
        expect(bubbleSortImper([-6, 8, -5, 0, -3, 4, 0, -5, 8, -3])).toEqual(expect.arrayContaining([-6, -5, -5, -3, -3, 0, 0, 4, 8, 8]))
        expect(bubbleSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).toEqual(expect.arrayContaining([-4, -3, -2, -1, 0, 1, 2, 3, 4]))
        expect(bubbleSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).toEqual(expect.arrayContaining([-4, -3, -2, -1, 0, 1, 2, 3, 4]))
        expect(bubbleSortImper([0])).toEqual(expect.arrayContaining([0]))
        expect(bubbleSortImper([])).toEqual(([]))
        expect(bubbleSortImper([])).toEqual(expect.arrayContaining([]))
    })

    it('test Insertion Sort', () => {
        expect(insertionSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).toEqual(expect.arrayContaining([-4, -3, -2, -1, 0, 1, 2, 3, 4]))
        expect(insertionSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).toEqual(expect.arrayContaining([-4, -3, -2, -1, 0, 1, 2, 3, 4]))
        expect(insertionSortImper([0])).toEqual(expect.arrayContaining([0]))
        expect(insertionSortImper([])).toEqual(expect.arrayContaining([]))
        expect(insertionSortImper(null)).toBeNull
        expect(insertionSortImper(undefined)).toBeNull
    })

    it('test Merge Sort', () => {
        expect(mergeSort([-6, 8, -5, 0, -3, 4, 0, -5, 8, -3])).toEqual(expect.arrayContaining([-6, -5, -5, -3, -3, 0, 0, 4, 8, 8]))
        expect(mergeSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).toEqual(expect.arrayContaining([-4, -3, -2, -1, 0, 1, 2, 3, 4]))
        expect(mergeSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).toEqual(expect.arrayContaining([-4, -3, -2, -1, 0, 1, 2, 3, 4]))
        expect(mergeSort([0])).toEqual(expect.arrayContaining([0]))
        expect(mergeSort([])).toEqual(expect.arrayContaining([]))
    })

    it('test Quick Sort', () => {
        expect(quickSort([-6, 8, -5, 0, -3, 4, 0, -5, 8, -3])).toEqual(expect.arrayContaining([-6, -5, -5, -3, -3, 0, 0, 4, 8, 8]))
        expect(quickSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).toEqual(expect.arrayContaining([-4, -3, -2, -1, 0, 1, 2, 3, 4]))
        expect(quickSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).toEqual(expect.arrayContaining([-4, -3, -2, -1, 0, 1, 2, 3, 4]))
        expect(quickSort([0])).toEqual(expect.arrayContaining([0]))
        expect(quickSort([])).toEqual(expect.arrayContaining([]))
    })

    it('test selectionSort', () => {
        expect(selectionSortImper([14, 33, 27, 10, 35, 19, 42, 44])).toEqual(expect.arrayContaining([10, 14, 19, 27, 33, 35, 42, 44]))
        expect(selectionSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).toEqual(expect.arrayContaining([-4, -3, -2, -1, 0, 1, 2, 3, 4]))
        expect(selectionSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).toEqual(expect.arrayContaining([-4, -3, -2, -1, 0, 1, 2, 3, 4]))
        expect(selectionSortImper([0])).toEqual(expect.arrayContaining([0]))
        expect(selectionSortImper([])).toEqual(expect.arrayContaining([]))
        expect(selectionSortImper(null)).toBeNull
    })

})

