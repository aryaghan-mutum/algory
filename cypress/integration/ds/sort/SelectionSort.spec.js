const sort = require('../../../../src/ds/sort/SelectionSort')

describe('Selection Sort', () => {

    specify('test Selection Sort', () => {
        expect(sort.selectionSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.selectionSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.selectionSort([0])).deep.equal([0])
        expect(sort.selectionSort([])).deep.equal([])
    })

})

