import { expect } from "chai"
import { factIter } from '../../../../src/algos/factorial/FactorialIter'

describe('Factorial Iterative Process', () => {

    specify('test factorialIter', () => {
        expect(factIter(10.32321)).to.be.equal(3628800)
        expect(factIter(50)).to.be.equal(3.0414093201713376e+64)
        expect(factIter()(170)).to.be.equal(7.257415615307994e+306)
        expect(factIter()(200)).to.be.equal(Infinity)
    })

})

