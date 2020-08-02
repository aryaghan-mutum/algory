/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcdoer@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import { factImper, factIter, factRec } from '../../algos/nc/Factorial'

describe('Factorial Imperative Process', () => {

    it('test factImper', async () => {
        expect(factImper(0)).toBe(1)
        expect(factImper(1)).toBe(1)
        expect(factImper(10)).toBe(3628800)
        expect(factImper(50)).toBe(3.0414093201713376e+64)
        expect(factImper()(170)).toBe(7.257415615308004e+306)
        expect(factImper()(200)).toBe(Infinity)
        expect(factImper(10.32321)).toBe(3628800)
    })

    it('test factorialIter', async () => {
        expect(factIter(10.32321)).toBe(3628800)
        expect(factIter(50)).toBe(3.0414093201713376e+64)
        expect(factIter()(170)).toBe(7.257415615307994e+306)
        expect(factIter()(200)).toBe(Infinity)
    })

    it('test factRec', async() => {
        expect(factRec(10.32321)).toBe(3628800)
        expect(factRec(50)).toBe(3.0414093201713376e+64)
        expect(factRec()(170)).toBe(7.257415615307994e+306)
        expect(factRec()(200)).toBe(Infinity)
    })

})