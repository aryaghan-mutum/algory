/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcdoer@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import { fibImper, fibIter, fibRec, fibLogarithmic } from '../../algos/nc/Fibonacci'

describe('Fibonacci Imperative Process', () => {

    it('test fibImper', async () => {
        expect(fibImper(0)).toBe(0)
        expect(fibImper(1)).toBe(1)
        expect(fibImper(10)).toBe(55)
        expect(fibImper()(100)).toBe(354224848179262000000)
        expect(() => fibImper(-1)).toThrow()
    })

    it('test fibIter', async () => {
        expect(fibIter(0)).toBe(0)
        expect(fibIter(1)).toBe(1)
        expect(fibIter(10)).toBe(55)
        expect(() => fibIter(-1)).toThrow()
    })

    it('test fibRec', async () => {
        expect(fibRec(0)).toBe(0)
        expect(fibRec(1)).toBe(1)
        expect(fibRec(10)).toBe(55)
        expect(() => fibRec(-1)).toThrow()
    })

    it('test fibLogarithmic', async () => {
        expect(fibLogarithmic(0)).toBe(0)
        expect(fibLogarithmic(1)).toBe(1)
        expect(fibLogarithmic(10)).toBe(55)
        expect(fibLogarithmic()(100)).toBe(354224848179261900000)
        expect(() => fibLogarithmic(-1)).toThrow()
    })

})

