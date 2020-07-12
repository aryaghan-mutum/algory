import { expect } from "chai"

const λ = require('../../../../src/algos/factorial/FactorialIter')

describe('Factorial Iterative Process', () => {

    specify('test factorialIter', () => {
        expect(λ.factIter(10.32321)).to.be.equal(3628800)
        expect(λ.factIter(50)).to.be.equal(3.0414093201713376e+64)
        expect(λ.factIter()(170)).to.be.equal(7.257415615307994e+306)
        expect(λ.factIter()(200)).to.be.equal(Infinity)
    })

})

