const sort = require('../../../../src/ds/sort/BubbleSort')

describe('Bubble Sort', () => {

    specify('test bubbleSortImper', () => {
        expect(sort.bubbleSortImper([-6, 8, -5, 0, -3, 4, 0, -5, 8, -3])).deep.equal([-6, -5, -5, -3, -3, 0, 0, 4, 8, 8])
        expect(sort.bubbleSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.bubbleSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(sort.bubbleSortImper([0])).deep.equal([0])
        expect(sort.bubbleSortImper([])).deep.equal([])
        expect(sort.bubbleSortImper(null)).deep.equal(null)
    })

    specify('test bubbleSortFunc', () => {
        //TODO:
        // expect(sort.bubbleSortFunc([-6, 8, -5, 0, -3, 4, 0, -5, 8, -3])).deep.equal([-6, -5, -5, -3, -3, 0, 0, 4, 8, 8])
        // expect(sort.bubbleSortFunc([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        // expect(sort.bubbleSortFunc([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        // expect(sort.bubbleSortFunc([0])).deep.equal([0])
        // expect(sort.bubbleSortFunc([])).deep.equal([])
        // expect(sort.bubbleSortFunc(null)).deep.equal(null)
    })

})

