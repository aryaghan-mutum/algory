const numerPred = require('../../../src/numercomp/NumericalComputationPredicates')

describe('Numerical Computation Predicates', () => {

    specify('test isZero', () => {
        expect(numerPred.isZero(0)).to.be.true
        expect(numerPred.isZero(100)).to.be.false
        expect(numerPred.isZero(-100)).to.be.false
        expect(numerPred.isZero()()()(0)).to.be.true

        let z = numerPred.isZero()()
        expect(z(2)).to.be.false
    })

    specify('test isOne', () => {
        expect(numerPred.isOne(1)).to.be.true
        expect(numerPred.isOne(100)).to.be.false
        expect(numerPred.isOne(-100)).to.be.false
        expect(numerPred.isOne()()()(1)).to.be.true

        let z = numerPred.isOne()()
        expect(z(2)).to.be.false
    })


    specify('test isNegative', () => {
        expect(numerPred.isNegative(-1)).to.be.true
        expect(numerPred.isNegative(1)).to.be.false
        expect(numerPred.isNegative(0)).to.be.false
        expect(numerPred.isNegative()(-1)).to.be.true

        let n = numerPred.isNegative()()
        expect(n(-0.12)).to.be.true
    })

    specify('test isPositive', () => {
        expect(numerPred.isPositive(-1)).to.be.false
        expect(numerPred.isPositive(1)).to.be.true
        expect(numerPred.isPositive(0)).to.be.true
        expect(numerPred.isPositive()()(-1)).to.be.false

        let p = numerPred.isPositive()()
        expect(p(-0.12)).to.be.false
    })

    specify('test isLesserThanAndEqualToZero', () => {
        expect(numerPred.isLesserThanAndEqualToZero(-1)).to.be.true
        expect(numerPred.isLesserThanAndEqualToZero(1)).to.be.false
        expect(numerPred.isLesserThanAndEqualToZero(0)).to.be.true
        expect(numerPred.isLesserThanAndEqualToZero()()()(0)).to.be.true

        let l = numerPred.isLesserThanAndEqualToZero()
        expect(l(-0.12)).to.be.true
    })

    specify('test lesserThan', () => {
        expect(numerPred.lesserThan(2, 3)).to.be.true
        expect(numerPred.lesserThan(3, 2)).to.be.false
        expect(numerPred.lesserThan(-3, 2)).to.be.true
        expect(numerPred.lesserThan(-2, -3)).to.be.false
        expect(numerPred.lesserThan(-2)(-2)).to.be.false
        expect(numerPred.lesserThan(2.3)(2.29)).to.be.false
        let x = numerPred.lesserThan(3)
        expect(x(-3)).to.be.false
    })

    specify('test greaterThan', () => {
        expect(numerPred.greaterThan(2, 3)).to.be.false
        expect(numerPred.greaterThan(3, 2)).to.be.true
        expect(numerPred.greaterThan(-3, 2)).to.be.false
        expect(numerPred.greaterThan(-2, -3)).to.be.true
        expect(numerPred.greaterThan(-2)(-2)).to.be.false
        expect(numerPred.greaterThan(2.3)(2.29)).to.be.true

        let x = numerPred.greaterThan(3)
        expect(x(-3)).to.be.true
    })

    specify('test isSumLesser', () => {
        expect(numerPred.isSumLesser(2, 3, 5)).to.be.false
        expect(numerPred.isSumLesser(2, 3, 6)).to.be.true
        expect(numerPred.isSumLesser(2, 3, 4)).to.be.false
        expect(numerPred.isSumLesser(-2, 3, 0)).to.be.false
        expect(numerPred.isSumLesser(2.5, 3.5, 1.2)).to.be.false

        let sl = numerPred.isSumLesser(2)
        expect(sl(3)(5)).to.be.false

        let sl2 = numerPred.isSumLesser(2)
        sl2 = sl2(3)
        expect(sl2(6)).to.be.true
    })

    specify('test isSumGreater', () => {
        expect(numerPred.isSumGreater(2, 3, 5)).to.be.false
        expect(numerPred.isSumGreater(2, 3, 6)).to.be.false
        expect(numerPred.isSumGreater(2, 3, 4)).to.be.true
        expect(numerPred.isSumGreater(-2, 3, 0)).to.be.true
        expect(numerPred.isSumGreater(2.5, 3.5, 1.2)).to.be.true

        let sg = numerPred.isSumGreater(2)
        expect(sg(3)(5)).to.be.false

        let sg2 = numerPred.isSumGreater(2)
        sg2 = sg2(3)
        expect(sg2(6)).to.be.false
    })

    specify('test isEven', () => {
        expect(numerPred.isEven(4)).to.be.true
        expect(numerPred.isEven(5)).to.be.false
        expect(numerPred.isEven(0)).to.be.true
        expect(numerPred.isEven(-4)).to.be.true
        expect(numerPred.isEven(-5)).to.be.false
        expect(numerPred.isEven()(-5)).to.be.false
    })

    specify('test isOdd', () => {
        expect(numerPred.isOdd(4)).to.be.false
        expect(numerPred.isOdd(5)).to.be.true
        expect(numerPred.isOdd(0)).to.be.false
        expect(numerPred.isOdd(-4)).to.be.false
        expect(numerPred.isOdd(-5)).to.be.true
        expect(numerPred.isOdd()(-5)).to.be.true
    })
})

