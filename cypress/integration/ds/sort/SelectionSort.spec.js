const sort = require('../../../../src/ds/sort/SelectionSort')

describe('Selection Sort', () => {

    specify('test selectionSort', () => {
        expect(sort.selectionSortImper([14, 33, 27, 10, 35, 19, 42, 44])).deep.equal([10, 14, 19, 27, 33, 35, 42, 44])
        expect(sort.selectionSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.selectionSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.selectionSortImper([0])).deep.equal([0])
        expect(sort.selectionSortImper([])).deep.equal([])
        expect(sort.selectionSortImper(null)).deep.equal(null)
    })

})

