import { expect } from "chai"
import {
    sqrLst,
    cubeLst,
    doubleLst,
    avgLst,
    reciprocalLst
} from '../../../src/algos/ListComputation'

describe('List Computation', () => {

    specify('test sqrLst', () => {
        expect(sqrLst([-3, -2, -1, 0, 1, 2, 3])).deep.equal([9, 4, 1, 0, 1, 4, 9])
        expect(sqrLst([-3.3])).deep.equal([10.889999999999999])
    })

    specify('test cubeLst', () => {
        expect(cubeLst([-3, -2, -1, 0, 1, 2, 3])).deep.equal([-27, -8, -1, 0, 1, 8, 27])
    })

    specify('test doubleLst', () => {
        expect(doubleLst([-3, -2, -1, 0, 1, 2, 3])).deep.equal([-6, -4, -2, 0, 2, 4, 6])
    })

    specify('test avgLst', () => {
        expect(avgLst()()()([0, 1, 2, 3, 4, 5])).deep.equal(2.5)
        expect(avgLst([0, 1, 2, 3, 4, 5])).deep.equal(2.5)
        expect(avgLst([0, 1])).deep.equal(0.5)
        expect(avgLst([0])).deep.equal(0)
        expect(avgLst([0.00, 1.02, 2.333])).deep.equal(1.1176666666666668)
    })

    specify('test reciprocalLst', () => {
        expect(reciprocalLst([-2, -1, 1, 2])).deep.equal([-0.5, -1, 1, 0.5])
        expect(reciprocalLst([])).deep.equal([])
        // FIXME: expect(λ.reciprocalLst([-2, -1, 1, 2])).deep.equal([-0.5, -1, Infinity, 1, 0.5])
    })


})

