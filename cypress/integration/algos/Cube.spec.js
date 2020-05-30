const λ = require('../../../src/algos/Cube')

describe('Cube and Cube List', () => {

    specify('test square', () => {
        expect(λ.cube(2)).to.be.equal(8)
        expect(λ.cube(0)).to.be.equal(0)
        expect(λ.cube(-2)).to.be.equal(-8)
    })

    specify('test cube list', () => {
       //TODO
    })
})
