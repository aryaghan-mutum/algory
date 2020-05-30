const sort = require('../../../../src/ds/sort/BubbleSort')

describe('Bubble Sort', () => {

    specify('test Bubble Sort', () => {
        expect(sort.bubbleSort([-4, -3, -2, -1, 0, 1, 2, 3, 4])).to.be.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.bubbleSort([4, 3, 2, 1, 0, -1, -2, -3, -4])).to.be.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.bubbleSort([0])).to.be.equal([0])
        expect(sort.bubbleSort([])).to.be.equal([])
    })

})

