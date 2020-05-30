const λ = require('../../../../src/algos/factorial/FactorialRec')

describe('Factorial Recursive Process', () => {

    specify('test factRec', () => {
        expect(λ.factRec(10.32321)).to.be.equal(3628800)
        expect(λ.factRec(50)).to.be.equal(3.0414093201713376e+64)
        expect(λ.factRec()(170)).to.be.equal(7.257415615307994e+306)
        expect(λ.factRec()(200)).to.be.equal(Infinity)
    })

})

