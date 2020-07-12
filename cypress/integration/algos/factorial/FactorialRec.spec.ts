import { expect } from "chai"
import { factRec } from '../../../../src/algos/factorial/FactorialRec'

describe('Factorial Recursive Process', () => {

    specify('test factRec', () => {
        expect(factRec(10.32321)).to.be.equal(3628800)
        expect(factRec(50)).to.be.equal(3.0414093201713376e+64)
        expect(factRec()(170)).to.be.equal(7.257415615307994e+306)
        expect(factRec()(200)).to.be.equal(Infinity)
    })

})

