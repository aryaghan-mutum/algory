/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcdoer@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import { swap } from '../../algos/lc/ListComputation'
import {
    car,
    isEmpty,
    sqrLst,
    cubeLst,
    doubleLst,
    avgLst,
    reciprocalLst,
    absLst
} from '../../algos/lc/ListComputation'

describe('List Computation', () => {

    it('test car', async () => {
        expect(car([-3, -2, -1, 0, 1, 2, 3])).toBe(-3)
        expect(car([-3.345, -2.0, -1.0, 0, 1.0, 2.32, 3.323])).toBe(-3.345)
        expect(car([undefined, -2.0, -1.0, 0, 1.0, 2.32, 3.323])).toBeUndefined()
        expect(car([null])).toBe(null)
        expect(car([])).toBe(undefined)
    })

    it('test isEmpty', async () => {
        expect(isEmpty([-3, -2, -1, 0, 1, 2, 3])).toBeFalsy()
        expect(isEmpty([])).toBeTruthy()
    })

    it('test avgLst', async () => {
        expect(avgLst()()()([0, 1, 2, 3, 4, 5])).toEqual(2.5)
        expect(avgLst([0, 1, 2, 3, 4, 5])).toEqual(2.5)
        expect(avgLst([0, 1])).toEqual(0.5)
        expect(avgLst([0])).toEqual(0)
        expect(avgLst([0.00, 1.02, 2.333])).toEqual(1.1176666666666668)
    })

    it('test sqrLst', async () => {
        expect(sqrLst([-3, -2, -1, 0, 1, 2, 3])).toEqual(expect.arrayContaining([9, 4, 1, 0, 1, 4, 9]))
        expect(sqrLst([-3.3])).toEqual(expect.arrayContaining([10.889999999999999]))
    })

    it('test cubeLst', async () => {
        expect(cubeLst([-3, -2, -1, 0, 1, 2, 3])).toEqual(expect.arrayContaining([-27, -8, -1, 0, 1, 8, 27]))
    })

    it('test doubleLst', async () => {
        expect(doubleLst([-3, -2, -1, 0, 1, 2, 3])).toEqual(expect.arrayContaining([-6, -4, -2, 0, 2, 4, 6]))
    })

    it('test reciprocalLst', async () => {
        expect(reciprocalLst([-2, -1, 1, 2])).toEqual(expect.arrayContaining([-0.5, -1, 1, 0.5]))
        expect(reciprocalLst([])).toEqual(expect.arrayContaining([]))
    })


    it('test absLst', async () => {
        expect(absLst([-2, -1, 1, 2])).toEqual(expect.arrayContaining([2, 1, 1, 2]))
        expect(absLst([-2.32, -1.32, 1.54, 2.32])).toEqual(expect.arrayContaining([2.32, 1.32, 1.54, 2.32]))
        expect(absLst([])).toEqual(expect.arrayContaining([]))
    })

    it('test swap', async () => {
        expect(swap([], 1, 2)).toEqual(expect.arrayContaining([]))
    })

})

