const fib = require('../../../src/algos/Fibonacci')

describe('Factorial', () => {

    specify('test Fibonacci Recursive Process', () => {
        expect(fib.fibRec(0)).to.be.equal(0)
        expect(fib.fibRec(1)).to.be.equal(1)
        expect(fib.fibRec(10)).to.be.equal(55)
    })

    specify('test Fibonacci Iterative Process', () => {
        expect(fib.fibIter(0)).to.be.equal(0)
        expect(fib.fibIter(1)).to.be.equal(1)
        expect(fib.fibIter(10)).to.be.equal(55)
    })

    specify('test Fibonacci Imperative Process', () => {
        expect(fib.fibImper(0)).to.be.equal(0)
        expect(fib.fibImper(1)).to.be.equal(1)
        expect(fib.fibImper(10)).to.be.equal(55)
    })

    specify('test Fibonacci Logarithmic Process', () => {
        expect(fib.fibLogarithmic(0)).to.be.equal(0)
        expect(fib.fibLogarithmic(1)).to.be.equal(1)
        expect(fib.fibLogarithmic(10)).to.be.equal(55)
    })
})

