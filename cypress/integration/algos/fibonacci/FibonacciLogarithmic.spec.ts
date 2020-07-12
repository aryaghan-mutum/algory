import { expect } from "chai"
import { fibLogarithmic } from '../../../../src/algos/fibonacci/FibonacciLogarithmic'

describe('Fibonacci Logarithmic Process', () => {

    specify('test fibLogarithmic', () => {
        expect(fibLogarithmic(0)).to.be.equal(0)
        expect(fibLogarithmic(1)).to.be.equal(1)
        expect(fibLogarithmic(10)).to.be.equal(55)
        expect(fibLogarithmic()(100)).to.be.equal(354224848179261900000)
    })
})

