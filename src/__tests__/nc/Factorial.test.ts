/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcdoer@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import { factImper, factIter, factRec, factMap } from '../../algos/nc/Factorial'

describe('Factorial', () => {

    it('test factImper', async () => {
        expect(factImper(0)).toBe(1)
        expect(factImper(1)).toBe(1)
        expect(factImper(10)).toBe(3628800)
        expect(factImper(50)).toBe(3.0414093201713376e+64)
        expect(factImper()(170)).toBe(7.257415615308004e+306)
        expect(factImper()(200)).toBe(Infinity)
        expect(() => factImper(undefined)).toThrow(`Factorial for decimal numbers or undefined or negative numbers do not exist`)
        expect(() => factImper(10.32321)).toThrow(`Factorial for decimal numbers or undefined or negative numbers do not exist`)
        expect(() => factImper(-1)).toThrow(`Factorial for decimal numbers or undefined or negative numbers do not exist`)
    })

    it('test factorialIter', async () => {
        expect(factIter(50)).toBe(3.0414093201713376e+64)
        expect(factIter()(170)).toBe(7.257415615307994e+306)
        expect(factIter()(200)).toBe(Infinity)
        expect(() => factIter(undefined)).toThrow(`Factorial for decimal numbers or undefined or negative numbers do not exist`)
        expect(() => factIter(10.32321)).toThrow(`Factorial for decimal numbers or undefined or negative numbers do not exist`)
        expect(() => factIter(-1)).toThrow(`Factorial for decimal numbers or undefined or negative numbers do not exist`)
    })

    it('test factRec', async () => {
        expect(factRec(50)).toBe(3.0414093201713376e+64)
        expect(factRec()(170)).toBe(7.257415615307994e+306)
        expect(factRec()(200)).toBe(Infinity)
        expect(() => factRec(undefined)).toThrow(`Factorial for decimal numbers or undefined or negative numbers do not exist`)
        expect(() => factRec(10.32321)).toThrow(`Factorial for decimal numbers or undefined or negative numbers do not exist`)
        expect(() => factRec(-1)).toThrow(`Factorial for decimal numbers or undefined or negative numbers do not exist`)
    })

    it('test factMap', async () => {
        expect(factMap(5)).toEqual(expect.arrayContaining([1, 1, 2, 6, 24]))
        expect(factMap(10)).toEqual(expect.arrayContaining([1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]))
    })

})