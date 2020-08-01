import { fibImper, fibIter, fibRec, fibLogarithmic } from '../../algos/nc/Fibonacci'

describe('Fibonacci Imperative Process', () => {

    it('test fibImper', () => {
        expect(fibImper(0)).toEqual(0)
        expect(fibImper(1)).toEqual(1)
        expect(fibImper(10)).toEqual(55)
        expect(fibImper()(100)).toEqual(354224848179262000000)
    })

    it('test fibIter', () => {
        expect(fibIter(0)).toEqual(0)
        expect(fibIter(1)).toEqual(1)
        expect(fibIter(10)).toEqual(55)
    })

    it('test fibRec', () => {
        expect(fibRec(0)).toEqual(0)
        expect(fibRec(1)).toEqual(1)
        expect(fibRec(10)).toEqual(55)
    })

    it('test fibLogarithmic', () => {
        expect(fibLogarithmic(0)).toEqual(0)
        expect(fibLogarithmic(1)).toEqual(1)
        expect(fibLogarithmic(10)).toEqual(55)
        expect(fibLogarithmic()(100)).toEqual(354224848179261900000)
    })

})

