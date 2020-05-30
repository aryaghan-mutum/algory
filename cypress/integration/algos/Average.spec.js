const λ = require('../../../src/algos/Average')

describe('Average and Average List', () => {

    specify('test average of two numbers', () => {
        expect(λ.avg(10, 5)).to.be.equal(12.5)
    })

    specify('test average list', () => {
        expect(λ.avgLst([0,1,2,3,4,5])).to.be.equal(2.5)
        expect(λ.avgLst([0,1])).to.be.equal(0.5)
        expect(λ.avgLst([0])).to.be.equal(0)
        expect(λ.avgLst([0.00, 1.02, 2.333])).to.be.equal(1.1176666666666668)
    })

})

