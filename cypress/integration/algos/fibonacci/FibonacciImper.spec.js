const λ = require('../../../../src/algos/fibonacci/FibonacciImper')

describe('Fibonacci Imperative Process', () => {

    specify('test fibImper', () => {
        expect(λ.fibImper(0)).to.be.equal(0)
        expect(λ.fibImper(1)).to.be.equal(1)
        expect(λ.fibImper(10)).to.be.equal(55)
        expect(λ.fibImper()(100)).to.be.equal(354224848179262000000)
    })

})

