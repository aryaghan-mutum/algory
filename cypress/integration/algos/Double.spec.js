const λ = require('../../../src/algos/Double')

describe('Double and Double List', () => {

    specify('test double', () => {
        expect(λ.double(5)).to.be.equal(10)
        expect(λ.double(0)).to.be.equal(0)
        expect(λ.double(-5)).to.be.equal(-10)
        expect(λ.double(-3)).to.be.equal(-6)
        expect(λ.double()(3)).to.be.equal(6)
        expect(λ.double()()(3.2)).to.be.equal(6.4)

    })

    specify('test double list', () => {
        //TODO
    })
})
