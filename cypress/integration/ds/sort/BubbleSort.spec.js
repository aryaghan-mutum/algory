const sort = require('../../../../src/ds/sort/BubbleSort')

describe('Bubble Sort', () => {

    specify('test Bubble Sort', () => {
        expect(sort.bubbleSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).to.eql([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.bubbleSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).to.eql([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.bubbleSortImper([0])).to.eql([0])
        expect(sort.bubbleSortImper([])).to.eql([])
        expect(sort.bubbleSortImper(null)).to.eql(null)
    })

})

