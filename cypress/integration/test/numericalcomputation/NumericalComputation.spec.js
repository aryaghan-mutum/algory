const numer = require('../../../../src/numericalcomputation/NumericalComputation')

describe('Numerical Computation', () => {

    specify('test square', () => {
        expect(numer.square(2)).to.be.equal(4);
        expect(numer.square(0)).to.be.equal(0);
        expect(numer.square(-2)).to.be.equal(4);
    })

    specify('test cube', () => {
        expect(numer.cube(2)).to.be.equal(8);
        expect(numer.cube(0)).to.be.equal(0);
        expect(numer.cube(-2)).to.be.equal(-8);
    })

    specify('test cube', () => {
        expect(numer.cube(2)).to.be.equal(8);
        expect(numer.cube(0)).to.be.equal(0);
        expect(numer.cube(-2)).to.be.equal(-8);
    })
})