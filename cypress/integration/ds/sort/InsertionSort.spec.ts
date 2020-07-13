import { expect } from "chai"
import { insertionSortImper } from '../../../../src/ds/sort/InsertionSort'

describe('Insertion Sort', () => {

    specify('test Insertion Sort', () => {
        expect(insertionSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(insertionSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(insertionSortImper([0])).deep.equal([0])
        expect(insertionSortImper([])).deep.equal([])
        expect(insertionSortImper(null)).deep.equal(null)
        expect(insertionSortImper(undefined)).deep.equal(null)
    })

})

