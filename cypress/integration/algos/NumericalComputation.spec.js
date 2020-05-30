const numer = require('../../../src/algos/NumericalComputation')

describe('Numerical Computation', () => {

    specify('test square', () => {
        expect(numer.square(2)).to.be.equal(4)
        expect(numer.square(0)).to.be.equal(0)
        expect(numer.square(-2)).to.be.equal(4)
    })

    specify('test cube', () => {
        expect(numer.cube(2)).to.be.equal(8)
        expect(numer.cube(0)).to.be.equal(0)
        expect(numer.cube(-2)).to.be.equal(-8)
    })


    specify('test sumOfSquares', () => {
        expect(numer.sumOfSquares(3, 4)).to.be.equal(25)
        expect(numer.sumOfSquares(0, 0)).to.be.equal(0)
        expect(numer.sumOfSquares(-3, -4)).to.be.equal(25)
        expect(numer.sumOfSquares(-3)(4)).to.be.equal(25)
    })

    specify('test sumOfCubes', () => {
        expect(numer.sumOfCubes(3, 4)).to.be.equal(91)
        expect(numer.sumOfCubes(0, 0)).to.be.equal(0)
        expect(numer.sumOfCubes(-3, -4)).to.be.equal(-91)
        expect(numer.sumOfCubes(-3)(4)).to.be.equal(37)
    })

    specify('test double', () => {
        expect(numer.double(5)).to.be.equal(10)
        expect(numer.double(0)).to.be.equal(0)
        expect(numer.double(-5)).to.be.equal(-10)
        expect(numer.double(-3)).to.be.equal(-6)
        expect(numer.double()(3)).to.be.equal(6)
        expect(numer.double()()(3.2)).to.be.equal(6.4)
    })

    specify('test triple', () => {
        expect(numer.triple(5)).to.be.equal(15)
        expect(numer.triple(0)).to.be.equal(0)
        expect(numer.triple(-5)).to.be.equal(-15)
        expect(numer.triple(7.125)).to.be.equal(21.375)
        expect(numer.triple(-7.125)).to.be.equal(-21.375)
        expect(numer.triple()(3)).to.be.equal(9)
        expect(numer.triple()()()(3.2)).to.be.equal(9.600000000000001)
    })

    specify('test add1', () => {
        expect(numer.add1(7)).to.be.equal(8)
        expect(numer.add1(-7)).to.be.equal(-6)
        expect(numer.add1(7.125)).to.be.equal(8.125)
        expect(numer.add1(-7.125)).to.be.equal(-6.125)
        expect(numer.add1()(0)).to.be.equal(1)
    })

    specify('test sub1', () => {
        expect(numer.sub1(7)).to.be.equal(6)
        expect(numer.sub1(-7)).to.be.equal(-8)
        expect(numer.sub1(7.125)).to.be.equal(6.125)
        expect(numer.sub1(-7.125)).to.be.equal(-8.125)
        expect(numer.sub1()(0)).to.be.equal(-1)
    })

    specify('test min', () => {
        expect(numer.min(2, 3)).to.be.equal(2)
        expect(numer.min(3, 2)).to.be.equal(2)
        expect(numer.min(2.345, 3.235)).to.be.equal(2.345)
        expect(numer.min(-2.345, -3.235)).to.be.equal(-3.235)
        expect(numer.min(-2.345, 3.235)).to.be.equal(-2.345)
        expect(numer.min()(2.345)(-3.235)).to.be.equal(-3.235)
    })

    specify('test max', () => {
        expect(numer.max(2, 3)).to.be.equal(3)
        expect(numer.max(3, 2)).to.be.equal(3)
        expect(numer.max(2.345, 3.235)).to.be.equal(3.235)
        expect(numer.max(-2.345, -3.235)).to.be.equal(-2.345)
        expect(numer.max(-2.345, 3.235)).to.be.equal(3.235)
        expect(numer.max(2.345)()(-3.235)).to.be.equal(2.345)
    })


    specify('test pow', () => {
        // TODO
    })

    specify('test reciprocal', () => {
        expect(numer.reciprocal(2)).to.be.equal(0.5)
        expect(numer.reciprocal(-2)).to.be.equal(-0.5)
        expect(numer.reciprocal(32.0)).to.be.equal(0.03125)
        expect(numer.reciprocal(-32.0)).to.be.equal(-0.03125)
        expect(numer.reciprocal(-32.0)).to.be.equal(-0.03125)
    })

    specify('test abs', () => {
        expect(numer.abs(2)).to.be.equal(2)
        expect(numer.abs(-2)).to.be.equal(2)
        expect(numer.abs(32.0)).to.be.equal(32.0)
        expect(numer.abs(-32.0)).to.be.equal(32.0)
        expect(numer.abs()(-32.0)).to.be.equal(32.0)
    })

    specify('test half', () => {
        expect(numer.half(4)).to.be.equal(2)
        expect(numer.half(4.5)).to.be.equal(2.25)
        expect(numer.half(-1/2)).to.be.equal(-0.5)
        expect(numer.half(-0.01)).to.be.equal(-0.005)
        expect(numer.half(0)).to.be.equal(0)
        expect(numer.half(0.0001)).to.be.equal(0.0005)
        expect(numer.half()(0.0000001/2)).to.be.equal(5e-8)
    })

    specify('test combination', () => {
        // TODO
    })

})

