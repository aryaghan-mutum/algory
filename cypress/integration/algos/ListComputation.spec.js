const λ = require('../../../src/algos/ListComputation')

describe('List Computation', () => {

    specify('test sqrLst', () => {
        expect(λ.sqrLst([-3, -2, -1, 0, 1, 2, 3])).deep.equal([9, 4, 1, 0, 1, 4, 9])
        expect(λ.sqrLst([-3.3])).deep.equal([10.889999999999999])
    })

    specify('test cubeLst', () => {
        expect(λ.cubeLst([-3, -2, -1, 0, 1, 2, 3])).deep.equal([-27, -8, -1, 0, 1, 8, 27])
    })

    specify('test doubleLst', () => {
        expect(λ.doubleLst([-3, -2, -1, 0, 1, 2, 3])).deep.equal([-6, -4, -2, 0, 2, 4, 6])
    })

    specify('test avgLst', () => {
        expect(λ.avgLst()()()([0, 1, 2, 3, 4, 5])).deep.equal(2.5)
        expect(λ.avgLst([0, 1, 2, 3, 4, 5])).deep.equal(2.5)
        expect(λ.avgLst([0, 1])).deep.equal(0.5)
        expect(λ.avgLst([0])).deep.equal(0)
        expect(λ.avgLst([0.00, 1.02, 2.333])).deep.equal(1.1176666666666668)
    })

    specify('test reciprocalLst', () => {
        expect(λ.reciprocalLst([-2, -1, 1, 2])).deep.equal([-0.5, -1, 1, 0.5])
        expect(λ.reciprocalLst([])).deep.equal([])
       // expect(λ.reciprocalLst([-2, -1, 1, 2])).deep.equal([-0.5, -1, Infinity, 1, 0.5])
    })


})

