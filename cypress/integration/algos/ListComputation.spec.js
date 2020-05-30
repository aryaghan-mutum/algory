const lst = require('../../../src/algos/ListComputation')

describe('List Computation', () => {

    specify('test car', () => {
        expect(lst.car([-1, -2, 0, 1, 2])).deep.equal(-1)
        expect(lst.car(null)).deep.equal(null)
        expect(lst.car(undefined)).deep.equal(undefined)
        expect(lst.car([null, -1, 2])).deep.equal(null)
        expect(lst.car([])).deep.equal([])
    })
})
