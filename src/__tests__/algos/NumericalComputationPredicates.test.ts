import { expect } from "chai"
import {
    isZero,
    isOne,
    isNegative,
    isPositive,
    isLesserThanAndEqualToZero,
    lesserThan,
    greaterThan,
    isSumLesser,
    isSumGreater,
    isEven,
    isOdd
} from '../../../src/algos/NumericalComputationPredicates'

describe('Numerical Computation Predicates', () => {

    it('test isZero', () => {
        expect(isZero(0)).to.be.true
        expect(isZero(100)).to.be.false
        expect(isZero(-100)).to.be.false
        expect(isZero()()()(0)).to.be.true

        let z = isZero()()
        expect(z(2)).to.be.false
    })

    it('test isOne', () => {
        expect(isOne(1)).to.be.true
        expect(isOne(100)).to.be.false
        expect(isOne(-100)).to.be.false
        expect(isOne()()()(1)).to.be.true

        let z = isOne()()
        expect(z(2)).to.be.false
    })


    it('test isNegative', () => {
        expect(isNegative(-1)).to.be.true
        expect(isNegative(1)).to.be.false
        expect(isNegative(0)).to.be.false
        expect(isNegative()(-1)).to.be.true

        let n = isNegative()()
        expect(n(-0.12)).to.be.true
    })

    it('test isPositive', () => {
        expect(isPositive(-1)).to.be.false
        expect(isPositive(1)).to.be.true
        expect(isPositive(0)).to.be.true
        expect(isPositive()()(-1)).to.be.false

        let p = isPositive()()
        expect(p(-0.12)).to.be.false
    })

    it('test isLesserThanAndEqualToZero', () => {
        expect(isLesserThanAndEqualToZero(-1)).to.be.true
        expect(isLesserThanAndEqualToZero(1)).to.be.false
        expect(isLesserThanAndEqualToZero(0)).to.be.true
        expect(isLesserThanAndEqualToZero()()()(0)).to.be.true

        let l = isLesserThanAndEqualToZero()
        expect(l(-0.12)).to.be.true
    })

    it('test lesserThan', () => {
        expect(lesserThan(2, 3)).to.be.true
        expect(lesserThan(3, 2)).to.be.false
        expect(lesserThan(-3, 2)).to.be.true
        expect(lesserThan(-2, -3)).to.be.false
        expect(lesserThan(-2)(-2)).to.be.false
        expect(lesserThan(2.3)(2.29)).to.be.false
        let x = lesserThan(3)
        expect(x(-3)).to.be.false
    })

    it('test greaterThan', () => {
        expect(greaterThan(2, 3)).to.be.false
        expect(greaterThan(3, 2)).to.be.true
        expect(greaterThan(-3, 2)).to.be.false
        expect(greaterThan(-2, -3)).to.be.true
        expect(greaterThan(-2)(-2)).to.be.false
        expect(greaterThan(2.3)(2.29)).to.be.true

        let x = greaterThan(3)
        expect(x(-3)).to.be.true
    })

    it('test isSumLesser', () => {
        expect(isSumLesser(2, 3, 5)).to.be.false
        expect(isSumLesser(2, 3, 6)).to.be.true
        expect(isSumLesser(2, 3, 4)).to.be.false
        expect(isSumLesser(-2, 3, 0)).to.be.false
        expect(isSumLesser(2.5, 3.5, 1.2)).to.be.false

        let sl = isSumLesser(2)
        expect(sl(3)(5)).to.be.false

        let sl2 = isSumLesser(2)
        sl2 = sl2(3)
        expect(sl2(6)).to.be.true
    })

    it('test isSumGreater', () => {
        expect(isSumGreater(2, 3, 5)).to.be.false
        expect(isSumGreater(2, 3, 6)).to.be.false
        expect(isSumGreater(2, 3, 4)).to.be.true
        expect(isSumGreater(-2, 3, 0)).to.be.true
        expect(isSumGreater(2.5, 3.5, 1.2)).to.be.true

        let sg = isSumGreater(2)
        expect(sg(3)(5)).to.be.false

        let sg2 = isSumGreater(2)
        sg2 = sg2(3)
        expect(sg2(6)).to.be.false
    })

    it('test isEven', () => {
        expect(isEven(4)).to.be.true
        expect(isEven(5)).to.be.false
        expect(isEven(0)).to.be.true
        expect(isEven(-4)).to.be.true
        expect(isEven(-5)).to.be.false
        expect(isEven()(-5)).to.be.false
    })

    it('test isOdd', () => {
        expect(isOdd(4)).to.be.false
        expect(isOdd(5)).to.be.true
        expect(isOdd(0)).to.be.false
        expect(isOdd(-4)).to.be.false
        expect(isOdd(-5)).to.be.true
        expect(isOdd()(-5)).to.be.true
    })
})

