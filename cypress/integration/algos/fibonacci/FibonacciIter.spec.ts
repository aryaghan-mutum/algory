import { expect } from "chai"
import { fibIter } from '../../../../src/algos/fibonacci/FibonacciIter'

describe('Fibonacci Iterative Process', () => {

    specify('test fibIter', () => {
        expect(fibIter(0)).to.be.equal(0)
        expect(fibIter(1)).to.be.equal(1)
        expect(fibIter(10)).to.be.equal(55)
    })

})

