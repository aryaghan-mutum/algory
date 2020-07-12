import { expect } from "chai"

const sort = require('../../../../src/ds/sort/QuickSort')

describe('Quick Sort', () => {

    specify('test Quick Sort', () => {
        expect(sort.quickSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.quickSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.quickSort([0])).to.eql([0])
        expect(sort.quickSort([])).to.eql([])
    })

})

