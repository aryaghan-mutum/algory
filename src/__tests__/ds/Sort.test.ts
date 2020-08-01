import { expect } from "chai"
import { bubbleSortImper } from '../../../src/ds/sort/BubbleSort'
import { insertionSortImper } from '../../../src/ds/sort/InsertionSort'
import { mergeSort } from '../../../src/ds/sort/MergeSort'
import { quickSort } from '../../../src/ds/sort/QuickSort'
import { selectionSortImper } from '../../../src/ds/sort/SelectionSort'

describe('Bubble Sort', () => {

    it('test bubbleSortImper', () => {
        expect(bubbleSortImper([-6, 8, -5, 0, -3, 4, 0, -5, 8, -3])).deep.equal([-6, -5, -5, -3, -3, 0, 0, 4, 8, 8])
        expect(bubbleSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(bubbleSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(bubbleSortImper([0])).deep.equal([0])
        expect(bubbleSortImper([])).deep.equal([])
        expect(bubbleSortImper(null)).deep.equal(null)
    })

    it('test Insertion Sort', () => {
        expect(insertionSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(insertionSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(insertionSortImper([0])).deep.equal([0])
        expect(insertionSortImper([])).deep.equal([])
        expect(insertionSortImper(null)).deep.equal(null)
        expect(insertionSortImper(undefined)).deep.equal(null)
    })

    it('test Merge Sort', () => {
        expect(mergeSort([-6, 8, -5, 0, -3, 4, 0, -5, 8, -3])).deep.equal([-6, -5, -5, -3, -3, 0, 0, 4, 8, 8])
        expect(mergeSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(mergeSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(mergeSort([0])).deep.equal([0])
        expect(mergeSort([])).deep.equal([])
    })

    it('test Quick Sort', () => {
        expect(quickSort([-6, 8, -5, 0, -3, 4, 0, -5, 8, -3])).deep.equal([-6, -5, -5, -3, -3, 0, 0, 4, 8, 8])
        expect(quickSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(quickSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(quickSort([0])).to.eql([0])
        expect(quickSort([])).to.eql([])
    })

    it('test selectionSort', () => {
        expect(selectionSortImper([14, 33, 27, 10, 35, 19, 42, 44])).deep.equal([10, 14, 19, 27, 33, 35, 42, 44])
        expect(selectionSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(selectionSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(selectionSortImper([0])).deep.equal([0])
        expect(selectionSortImper([])).deep.equal([])
        expect(selectionSortImper(null)).deep.equal(null)
    })

})

