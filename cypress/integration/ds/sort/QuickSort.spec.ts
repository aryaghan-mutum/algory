import { expect } from "chai"
import { quickSort } from '../../../../src/ds/sort/QuickSort'

describe('Quick Sort', () => {

    specify('test Quick Sort', () => {
        expect(quickSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(quickSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(quickSort([0])).to.eql([0])
        expect(quickSort([])).to.eql([])
    })

})

