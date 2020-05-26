const fact = require('../../../src/algos/Factorial')

describe('Factorial', () => {

    specify('test Factorial Recursion', () => {
        expect(fact.factorialRec(10.32321)).to.be.equal(3628800)
        expect(fact.factorialRec(50)).to.be.equal(3.0414093201713376e+64)
        expect(fact.factorialRec()(170)).to.be.equal(7.257415615307994e+306)
        expect(fact.factorialRec()(200)).to.be.equal(Infinity)
    })

    specify('test Factorial Iteration', () => {
        expect(fact.factorialIter(0)).to.be.equal(1)
        expect(fact.factorialIter(1)).to.be.equal(1)
        expect(fact.factorialIter(10)).to.be.equal(3628800)
        expect(fact.factorialIter(50)).to.be.equal(3.0414093201713376e+64)
        expect(fact.factorialIter()(170)).to.be.equal(7.257415615308004e+306)
        expect(fact.factorialIter()(200)).to.be.equal(Infinity)
    })

})

