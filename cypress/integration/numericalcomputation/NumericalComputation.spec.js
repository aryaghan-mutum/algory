const numer = require('../../../src/numericalcomputation/NumericalComputation')

describe('Numerical Computation', () => {

    specify('test sumOfSquares', () => {
        expect(numer.sumOfSquares(3, 4)).to.be.equal(25)
        expect(numer.sumOfSquares(0, 0)).to.be.equal(0)
        expect(numer.sumOfSquares(-3, -4)).to.be.equal(25)
    })

    specify('test sumOfCubes', () => {
        expect(numer.sumOfCubes(3, 4)).to.be.equal(91)
        expect(numer.sumOfCubes(0, 0)).to.be.equal(0)
        expect(numer.sumOfCubes(-3, -4)).to.be.equal(-91)
    })

    specify('test double', () => {
        expect(numer.double(5)).to.be.equal(10)
        expect(numer.double(0)).to.be.equal(0)
        expect(numer.double(-5)).to.be.equal(-10)
    })

    specify('test double', () => {
        expect(numer.double(5)).to.be.equal(10)
        expect(numer.double(0)).to.be.equal(0)
        expect(numer.double(-5)).to.be.equal(-10)
        expect(numer.double(7.125)).to.be.equal(14.25)
        expect(numer.double(-7.125)).to.be.equal(-14.25)
    })

    specify('test triple', () => {
        expect(numer.triple(5)).to.be.equal(15)
        expect(numer.triple(0)).to.be.equal(0)
        expect(numer.triple(-5)).to.be.equal(-15)
        expect(numer.triple(7.125)).to.be.equal(21.375)
        expect(numer.triple(-7.125)).to.be.equal(-21.375)
    })

    specify('test add1', () => {
        expect(numer.add1(7)).to.be.equal(8)
        expect(numer.add1(0)).to.be.equal(1)
        expect(numer.add1(-7)).to.be.equal(-6)
        expect(numer.add1(7.125)).to.be.equal(8.125)
        expect(numer.add1(-7.125)).to.be.equal(-6.125)
    })


})