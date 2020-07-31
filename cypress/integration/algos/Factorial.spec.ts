import { expect } from "chai"
import { factImper, factIter, factRec } from '../../../src/algos/Factorial'

describe('Factorial Imperative Process', () => {

    specify('test factImper', () => {
        expect(factImper(0)).to.be.equal(1)
        expect(factImper(1)).to.be.equal(1)
        expect(factImper(10)).to.be.equal(3628800)
        expect(factImper(50)).to.be.equal(3.0414093201713376e+64)
        expect(factImper()(170)).to.be.equal(7.257415615308004e+306)
        expect(factImper()(200)).to.be.equal(Infinity)
        expect(factImper(10.32321)).to.be.equal(3628800)
    })

    specify('test factorialIter', () => {
        expect(factIter(10.32321)).to.be.equal(3628800)
        expect(factIter(50)).to.be.equal(3.0414093201713376e+64)
        expect(factIter()(170)).to.be.equal(7.257415615307994e+306)
        expect(factIter()(200)).to.be.equal(Infinity)
    })

    specify('test factRec', () => {
        expect(factRec(10.32321)).to.be.equal(3628800)
        expect(factRec(50)).to.be.equal(3.0414093201713376e+64)
        expect(factRec()(170)).to.be.equal(7.257415615307994e+306)
        expect(factRec()(200)).to.be.equal(Infinity)
    })

})

