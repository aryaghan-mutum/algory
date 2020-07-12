import { expect } from "chai"
import { factImper } from '../../../../src/algos/factorial/FactorialImper'

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

})

