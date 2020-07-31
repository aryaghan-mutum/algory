import { expect } from "chai"
import { fibImper, fibIter, fibRec, fibLogarithmic } from '../../../src/algos/Fibonacci'

describe('Fibonacci Imperative Process', () => {

    specify('test fibImper', () => {
        expect(fibImper(0)).to.be.equal(0)
        expect(fibImper(1)).to.be.equal(1)
        expect(fibImper(10)).to.be.equal(55)
        expect(fibImper()(100)).to.be.equal(354224848179262000000)
    })

    specify('test fibIter', () => {
        expect(fibIter(0)).to.be.equal(0)
        expect(fibIter(1)).to.be.equal(1)
        expect(fibIter(10)).to.be.equal(55)
    })

    specify('test fibRec', () => {
        expect(fibRec(0)).to.be.equal(0)
        expect(fibRec(1)).to.be.equal(1)
        expect(fibRec(10)).to.be.equal(55)
    })

    specify('test fibLogarithmic', () => {
        expect(fibLogarithmic(0)).to.be.equal(0)
        expect(fibLogarithmic(1)).to.be.equal(1)
        expect(fibLogarithmic(10)).to.be.equal(55)
        expect(fibLogarithmic()(100)).to.be.equal(354224848179261900000)
    })

})

