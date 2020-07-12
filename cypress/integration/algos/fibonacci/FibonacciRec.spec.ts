import { expect } from "chai"
import { fibRec } from '../../../../src/algos/fibonacci/FibonacciRec'

describe('Fibonacci Recursive Process', () => {

    specify('test fibRec', () => {
        expect(fibRec(0)).to.be.equal(0)
        expect(fibRec(1)).to.be.equal(1)
        expect(fibRec(10)).to.be.equal(55)
    })

})

