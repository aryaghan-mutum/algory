const λ = require('../../../../src/algos/fibonacci/FibonacciLogarithmic')

describe('Fibonacci Logarithmic Process', () => {

    specify('test fibLogarithmic', () => {
        expect(λ.fibLogarithmic(0)).to.be.equal(0)
        expect(λ.fibLogarithmic(1)).to.be.equal(1)
        expect(λ.fibLogarithmic(10)).to.be.equal(55)
        expect(λ.fibLogarithmic()(100)).to.be.equal(354224848179261900000)
    })
})

