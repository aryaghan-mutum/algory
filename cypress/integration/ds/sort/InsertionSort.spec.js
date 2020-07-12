const sort = require('../../../../src/ds/sort/InsertionSort')

describe('Insertion Sort', () => {

    specify('test Insertion Sort', () => {
        expect(sort.insertionSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.insertionSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.insertionSortImper([0])).deep.equal([0])
        expect(sort.insertionSortImper([])).deep.equal([])
        expect(sort.insertionSortImper(null)).deep.equal(null)
        expect(sort.insertionSortImper(null)).deep.equal(null)
        expect(sort.insertionSortImper(undefined)).deep.equal(null)
    })

})

