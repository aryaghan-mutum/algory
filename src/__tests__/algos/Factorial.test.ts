import { factImper, factIter, factRec } from '../../algos/Factorial'

describe('Factorial Imperative Process', () => {

    it('test factImper', () => {
        expect(factImper(0)).toEqual(1)
        expect(factImper(1)).toEqual(1)
        expect(factImper(10)).toEqual(3628800)
        expect(factImper(50)).toEqual(3.0414093201713376e+64)
        expect(factImper()(170)).toEqual(7.257415615308004e+306)
        expect(factImper()(200)).toEqual(Infinity)
        expect(factImper(10.32321)).toEqual(3628800)
    })

    it('test factorialIter', () => {
        expect(factIter(10.32321)).toEqual(3628800)
        expect(factIter(50)).toEqual(3.0414093201713376e+64)
        expect(factIter()(170)).toEqual(7.257415615307994e+306)
        expect(factIter()(200)).toEqual(Infinity)
    })

    it('test factRec', () => {
        expect(factRec(10.32321)).toEqual(3628800)
        expect(factRec(50)).toEqual(3.0414093201713376e+64)
        expect(factRec()(170)).toEqual(7.257415615307994e+306)
        expect(factRec()(200)).toEqual(Infinity)
    })

})