import { expect } from "chai"
import { bubbleSortImper } from '../../../../src/ds/sort/BubbleSort'

describe('Bubble Sort', () => {

    specify('test bubbleSortImper', () => {
        expect(bubbleSortImper([-6, 8, -5, 0, -3, 4, 0, -5, 8, -3])).deep.equal([-6, -5, -5, -3, -3, 0, 0, 4, 8, 8])
        expect(bubbleSortImper([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(bubbleSortImper([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        expect(bubbleSortImper([0])).deep.equal([0])
        expect(bubbleSortImper([])).deep.equal([])
        expect(bubbleSortImper(null)).deep.equal(null)
    })

    specify('test bubbleSortFunc', () => {
        TODO:
        // expect(bubbleSortFunc([-6, 8, -5, 0, -3, 4, 0, -5, 8, -3])).deep.equal([-6, -5, -5, -3, -3, 0, 0, 4, 8, 8])
        // expect(bubbleSortFunc([-4, -3, -2, -1, 0, 1, 2, 3, 4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        // expect(bubbleSortFunc([4, 3, 2, 1, 0, -1, -2, -3, -4])).deep.equal([-4, -3, -2, -1, 0, 1, 2, 3, 4])
        // expect(bubbleSortFunc([0])).deep.equal([0])
        // expect(bubbleSortFunc([])).deep.equal([])
        // expect(bubbleSortFunc(null)).deep.equal(null)
    })

})

