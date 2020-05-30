const sort = require('../../../../src/ds/sort/MergeSort')

describe('Merge Sort', () => {

    specify('test Merge Sort', () => {
        expect(sort.mergeSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.mergeSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.mergeSort([0])).deep.equal([0])
        expect(sort.mergeSort([])).deep.equal([])
    })

})

