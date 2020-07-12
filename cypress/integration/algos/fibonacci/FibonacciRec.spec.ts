import { expect } from "chai"

const λ = require('../../../../src/algos/fibonacci/FibonacciRec')

describe('Fibonacci Recursive Process', () => {

    specify('test fibRec', () => {
        expect(λ.fibRec(0)).to.be.equal(0)
        expect(λ.fibRec(1)).to.be.equal(1)
        expect(λ.fibRec(10)).to.be.equal(55)
    })

})

