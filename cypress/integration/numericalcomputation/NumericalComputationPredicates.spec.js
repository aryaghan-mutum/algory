const numerPred = require('../../../src/numericalcomputation/NumericalComputationPredicates')

describe('Numerical Computation Predicates', () => {

    specify('test isNegative', () => {
        expect(numerPred.isNegative(-1)).to.be.true
        expect(numerPred.isNegative(1)).to.be.false
        expect(numerPred.isNegative(0)).to.be.false
    })

    specify('test isPositive', () => {
        expect(numerPred.isPositive(-1)).to.be.false
        expect(numerPred.isPositive(1)).to.be.true
        expect(numerPred.isPositive(0)).to.be.true
    })

    specify('test isZero', () => {
        expect(numerPred.isZero(0)).to.be.true
        expect(numerPred.isZero(100)).to.be.false
        expect(numerPred.isZero(-100)).to.be.false
    })

})

