const sort = require('../../../../src/ds/sort/SelectionSort')

describe('Selection Sort', () => {

    specify('test Selection Sort', () => {
        expect(sort.selectionSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).to.eql([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.selectionSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).to.eql([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.selectionSort([0])).to.eql([0])
        expect(sort.selectionSort([])).to.eql([])
    })

})

