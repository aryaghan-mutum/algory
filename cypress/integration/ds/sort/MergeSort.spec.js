const sort = require('../../../../src/ds/sort/MergeSort')

describe('Merge Sort', () => {

    specify('test Merge Sort', () => {
        expect(sort.mergeSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).to.eql([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.mergeSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).to.eql([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.mergeSort([0])).to.eql([0])
        expect(sort.mergeSort([])).to.eql([])
    })

})

