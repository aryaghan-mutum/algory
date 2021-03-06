/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcdoer@gmail.com>
 * https://github.com/aryaghan-mutum
 */

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
} from '../../algos/nc/MathPredicates'

describe('Math Predicates', () => {

    it('test isZero', async () => {
        expect(isZero(0)).toBeTruthy()
        expect(isZero(100)).toBeFalsy()
        expect(isZero(-100)).toBeFalsy()
        expect(isZero()()()(0)).toBeTruthy()

        let z = isZero()()
        expect(z(2)).toBeFalsy()
    })

    it('test isOne', async () => {
        expect(isOne(1)).toBeTruthy()
        expect(isOne(100)).toBeFalsy()
        expect(isOne(-100)).toBeFalsy()
        expect(isOne()()()(1)).toBeTruthy()

        let z = isOne()()
        expect(z(2)).toBeFalsy()
    })


    it('test isNegative', async () => {
        expect(isNegative(-1)).toBeTruthy()
        expect(isNegative(1)).toBeFalsy()
        expect(isNegative(0)).toBeFalsy()
        expect(isNegative()(-1)).toBeTruthy()

        let n = isNegative()()
        expect(n(-0.12)).toBeTruthy()
    })

    it('test isPositive', async () => {
        expect(isPositive(-1)).toBeFalsy()
        expect(isPositive(1)).toBeTruthy()
        expect(isPositive(0)).toBeTruthy()
        expect(isPositive()()(-1)).toBeFalsy()

        let p = isPositive()()
        expect(p(-0.12)).toBeFalsy()
    })

    it('test isLesserThanAndEqualToZero', async () => {
        expect(isLesserThanAndEqualToZero(-1)).toBeTruthy()
        expect(isLesserThanAndEqualToZero(1)).toBeFalsy()
        expect(isLesserThanAndEqualToZero(0)).toBeTruthy()
        expect(isLesserThanAndEqualToZero()()()(0)).toBeTruthy()

        let l = isLesserThanAndEqualToZero()
        expect(l(-0.12)).toBeTruthy()
    })

    it('test lesserThan', async () => {
        expect(lesserThan(2, 3)).toBeTruthy()
        expect(lesserThan(3, 2)).toBeFalsy()
        expect(lesserThan(-3, 2)).toBeTruthy()
        expect(lesserThan(-2, -3)).toBeFalsy()
        expect(lesserThan(-2)(-2)).toBeFalsy()
        expect(lesserThan(2.3)(2.29)).toBeFalsy()
        let x = lesserThan(3)
        expect(x(-3)).toBeFalsy()
    })

    it('test greaterThan', async () => {
        expect(greaterThan(2, 3)).toBeFalsy()
        expect(greaterThan(3, 2)).toBeTruthy()
        expect(greaterThan(-3, 2)).toBeFalsy()
        expect(greaterThan(-2, -3)).toBeTruthy()
        expect(greaterThan(-2)(-2)).toBeFalsy()
        expect(greaterThan(2.3)(2.29)).toBeTruthy()

        let x = greaterThan(3)
        expect(x(-3)).toBeTruthy()
    })

    it('test isSumLesser', async () => {
        expect(isSumLesser(2, 3, 5)).toBeFalsy()
        expect(isSumLesser(2, 3, 6)).toBeTruthy()
        expect(isSumLesser(2, 3, 4)).toBeFalsy()
        expect(isSumLesser(-2, 3, 0)).toBeFalsy()
        expect(isSumLesser(2.5, 3.5, 1.2)).toBeFalsy()

        let sl = isSumLesser(2)
        expect(sl(3)(5)).toBeFalsy()

        let sl2 = isSumLesser(2)
        sl2 = sl2(3)
        expect(sl2(6)).toBeTruthy()
    })

    it('test isSumGreater', async () => {
        expect(isSumGreater(2, 3, 5)).toBeFalsy()
        expect(isSumGreater(2, 3, 6)).toBeFalsy()
        expect(isSumGreater(2, 3, 4)).toBeTruthy()
        expect(isSumGreater(-2, 3, 0)).toBeTruthy()
        expect(isSumGreater(2.5, 3.5, 1.2)).toBeTruthy()

        let sg = isSumGreater(2)
        expect(sg(3)(5)).toBeFalsy()

        let sg2 = isSumGreater(2)
        sg2 = sg2(3)
        expect(sg2(6)).toBeFalsy()
    })

    it('test isEven', async () => {
        expect(isEven(4)).toBeTruthy()
        expect(isEven(5)).toBeFalsy()
        expect(isEven(0)).toBeTruthy()
        expect(isEven(-4)).toBeTruthy()
        expect(isEven(-5)).toBeFalsy()
        expect(isEven()(-5)).toBeFalsy()
    })

    it('test isOdd', async () => {
        expect(isOdd(4)).toBeFalsy()
        expect(isOdd(5)).toBeTruthy()
        expect(isOdd(0)).toBeFalsy()
        expect(isOdd(-4)).toBeFalsy()
        expect(isOdd(-5)).toBeTruthy()
        expect(isOdd()(-5)).toBeTruthy()
    })

})

