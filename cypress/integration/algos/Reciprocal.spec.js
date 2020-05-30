const λ = require('../../../src/algos/Reciprocal')

describe('Reciprocal and Reciprocal List', () => {

    specify('test reciprocal', () => {
        expect(λ.reciprocal(2)).to.be.equal(0.5)
        expect(λ.reciprocal(-2)).to.be.equal(-0.5)
        expect(λ.reciprocal(32.0)).to.be.equal(0.03125)
        expect(λ.reciprocal(-32.0)).to.be.equal(-0.03125)
        expect(λ.reciprocal(-32.0)).to.be.equal(-0.03125)
    })

    specify('test reciprocal list', () => {
        expect(λ.reciprocalLst([-2, -1, 1, 2])).deep.equal([-0.5, -1, 1, 0.5])
        expect(λ.reciprocalLst([])).deep.equal([])
       expect(λ.reciprocalLst([-2, -1, 1, 2])).deep.equal([-0.5, -1, Infinity, 1, 0.5])
    })

})

