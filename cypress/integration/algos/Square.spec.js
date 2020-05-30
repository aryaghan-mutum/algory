const λ = require('../../../src/algos/Square')

describe('Square and Square List', () => {

    specify('test square', () => {
        expect(λ.sqr(2)).to.be.equal(4)
        expect(λ.sqr(0)).to.be.equal(0)
        expect(λ.sqr(-2)).to.be.equal(4)
    })

    specify('test square list', () => {
       //TODO
    })
})
