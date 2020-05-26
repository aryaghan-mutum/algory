const fib = require('../../../src/algos/Fibonacci')

describe('Factorial', () => {

    specify('test Fibonacci Recursion', () => {
        expect(fib.fibRec(0)).to.be.equal(0)
        expect(fib.fibRec(1)).to.be.equal(1)
        expect(fib.fibRec(10)).to.be.equal(55)
    })

    specify('test Fibonacci Iteration', () => {
        expect(fib.fibIter(0)).to.be.equal(0)
        expect(fib.fibIter(1)).to.be.equal(1)
        expect(fib.fibIter(10)).to.be.equal(55)
    })

})

