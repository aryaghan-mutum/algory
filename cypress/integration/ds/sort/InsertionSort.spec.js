const sort = require('../../../../src/ds/sort/InsertionSort')

describe('Insertion Sort', () => {

    specify('test Insertion Sort', () => {
        expect(sort.insertionSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).to.be.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.insertionSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).to.be.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.insertionSort([0])).to.be.equal([0])
        expect(sort.insertionSort([])).to.be.equal([])
    })

})

