import { expect } from "chai"

import { mergeSort } from '../../../../src/ds/sort/MergeSort'

describe('Merge Sort', () => {

    specify('test Merge Sort', () => {
        expect(mergeSort([-6, 8, -5, 0, -3, 4, 0, -5, 8, -3])).deep.equal([-6, -5, -5, -3, -3, 0, 0, 4, 8, 8])
        expect(mergeSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(mergeSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(mergeSort([0])).deep.equal([0])
        expect(mergeSort([])).deep.equal([])
    })

})

