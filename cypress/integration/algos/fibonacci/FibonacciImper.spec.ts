import { expect } from "chai"
import { fibImper } from '../../../../src/algos/fibonacci/FibonacciImper'

describe('Fibonacci Imperative Process', () => {

    specify('test fibImper', () => {
        expect(fibImper(0)).to.be.equal(0)
        expect(fibImper(1)).to.be.equal(1)
        expect(fibImper(10)).to.be.equal(55)
        expect(fibImper()(100)).to.be.equal(354224848179262000000)
    })

})

