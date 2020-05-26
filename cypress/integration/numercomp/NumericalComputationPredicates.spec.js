import numerPred from '../../../src/numercomp/NumericalComputationPredicates'

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

    specify('test isEven', () => {
        expect(numerPred.isEven(4)).to.be.true
        expect(numerPred.isEven(5)).to.be.false
        expect(numerPred.isEven(0)).to.be.true
        expect(numerPred.isEven(-4)).to.be.true
        expect(numerPred.isEven(-5)).to.be.false
    })

    specify('test isOdd', () => {
        expect(numerPred.isOdd(4)).to.be.false
        expect(numerPred.isOdd(5)).to.be.true
        expect(numerPred.isOdd(0)).to.be.false
        expect(numerPred.isOdd(-4)).to.be.false
        expect(numerPred.isOdd(-5)).to.be.true
    })
})

