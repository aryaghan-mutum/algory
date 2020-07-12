import { expect } from "chai"

const λ = require('../../../../src/algos/factorial/FactorialImper')

describe('Factorial Imperative Process', () => {

    specify('test factImper', () => {
        expect(λ.factImper(0)).to.be.equal(1)
        expect(λ.factImper(1)).to.be.equal(1)
        expect(λ.factImper(10)).to.be.equal(3628800)
        expect(λ.factImper(50)).to.be.equal(3.0414093201713376e+64)
        expect(λ.factImper()(170)).to.be.equal(7.257415615308004e+306)
        expect(λ.factImper()(200)).to.be.equal(Infinity)
        expect(λ.factImper(10.32321)).to.be.equal(3628800)
    })

})

