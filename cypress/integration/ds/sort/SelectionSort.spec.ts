import { expect } from "chai"
import { selectionSortImper } from '../../../../src/ds/sort/SelectionSort'

describe('Selection Sort', () => {

    specify('test selectionSort', () => {
        expect(selectionSortImper([14, 33, 27, 10, 35, 19, 42, 44])).deep.equal([10, 14, 19, 27, 33, 35, 42, 44])
        expect(selectionSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(selectionSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(selectionSortImper([0])).deep.equal([0])
        expect(selectionSortImper([])).deep.equal([])
        expect(selectionSortImper(null)).deep.equal(null)
    })

})

