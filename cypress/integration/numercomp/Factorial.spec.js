const f = require('../../../src/numercomp/Factorial')

describe('Factorial', () => {

    specify('test Factorial Recursion', () => {
        expect(f.factorialRec(0)).to.be.equal(1)
        expect(f.factorialRec(1)).to.be.equal(1)
        expect(f.factorialRec(10)).to.be.equal(3628800)
        expect(f.factorialRec(50)).to.be.equal(3.0414093201713376e+64)
        expect(f.factorialRec()(170)).to.be.equal(7.257415615307994e+306)
        expect(f.factorialRec()(200)).to.be.equal(Infinity)
    })

    specify('test Factorial Iteration', () => {
        expect(f.factorialIter(0)).to.be.equal(1)
        expect(f.factorialIter(1)).to.be.equal(1)
        expect(f.factorialIter(10)).to.be.equal(3628800)
        expect(f.factorialIter(50)).to.be.equal(3.0414093201713376e+64)
        expect(f.factorialIter()(170)).to.be.equal(7.257415615308004e+306)
        expect(f.factorialIter()(200)).to.be.equal(Infinity)
    })

})

