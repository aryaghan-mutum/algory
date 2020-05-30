const sort = require('../../../../src/ds/sort/BubbleSort')

describe('Bubble Sort', () => {

    specify('test Bubble Sort', () => {
        expect(sort.bubbleSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.bubbleSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.bubbleSortImper([0])).deep.equal([0])
        expect(sort.bubbleSortImper([])).deep.equal([])
        expect(sort.bubbleSortImper(null)).deep.equal(null)
    })

})

