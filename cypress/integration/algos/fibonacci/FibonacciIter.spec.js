const λ = require('../../../../src/algos/fibonacci/FibonacciIter')

describe('Fibonacci Iterative Process', () => {

    specify('test fibIter', () => {
        expect(λ.fibIter(0)).to.be.equal(0)
        expect(λ.fibIter(1)).to.be.equal(1)
        expect(λ.fibIter(10)).to.be.equal(55)
    })

})

