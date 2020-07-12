import { expect } from "chai"

const λ = require('../../../src/algos/NumericalComputation')

describe('Numerical Computation', () => {

    specify('test square', () => {
        expect(λ.sqr(2)).to.be.equal(4)
        expect(λ.sqr(0)).to.be.equal(0)
        expect(λ.sqr(-2)).to.be.equal(4)
    })

    specify('test square', () => {
        expect(λ.cube(2)).to.be.equal(8)
        expect(λ.cube(0)).to.be.equal(0)
        expect(λ.cube(-2)).to.be.equal(-8)
    })

    specify('test sumOfSquares', () => {
        expect(λ.sumOfSquares(3, 4)).to.be.equal(25)
        expect(λ.sumOfSquares(0, 0)).to.be.equal(0)
        expect(λ.sumOfSquares(-3, -4)).to.be.equal(25)
        expect(λ.sumOfSquares(-3)(4)).to.be.equal(25)
    })

    specify('test sumOfCubes', () => {
        expect(λ.sumOfCubes(3, 4)).to.be.equal(91)
        expect(λ.sumOfCubes(0, 0)).to.be.equal(0)
        expect(λ.sumOfCubes(-3, -4)).to.be.equal(-91)
        expect(λ.sumOfCubes(-3)(4)).to.be.equal(37)
    })

    specify('test double', () => {
        expect(λ.double(5)).to.be.equal(10)
        expect(λ.double(0)).to.be.equal(0)
        expect(λ.double(-5)).to.be.equal(-10)
        expect(λ.double(-3)).to.be.equal(-6)
        expect(λ.double()(3)).to.be.equal(6)
        expect(λ.double()()(3.2)).to.be.equal(6.4)
    })

    specify('test triple', () => {
        expect(λ.triple(5)).to.be.equal(15)
        expect(λ.triple(0)).to.be.equal(0)
        expect(λ.triple(-5)).to.be.equal(-15)
        expect(λ.triple(7.125)).to.be.equal(21.375)
        expect(λ.triple(-7.125)).to.be.equal(-21.375)
        expect(λ.triple()(3)).to.be.equal(9)
        expect(λ.triple()()()(3.2)).to.be.equal(9.600000000000001)
    })

    specify('test add1', () => {
        expect(λ.add1(7)).to.be.equal(8)
        expect(λ.add1(-7)).to.be.equal(-6)
        expect(λ.add1(7.125)).to.be.equal(8.125)
        expect(λ.add1(-7.125)).to.be.equal(-6.125)
        expect(λ.add1()(0)).to.be.equal(1)
    })

    specify('test sub1', () => {
        expect(λ.sub1(7)).to.be.equal(6)
        expect(λ.sub1(-7)).to.be.equal(-8)
        expect(λ.sub1(7.125)).to.be.equal(6.125)
        expect(λ.sub1(-7.125)).to.be.equal(-8.125)
        expect(λ.sub1()(0)).to.be.equal(-1)
    })

    specify('test min', () => {
        expect(λ.min(2, 3)).to.be.equal(2)
        expect(λ.min(3, 2)).to.be.equal(2)
        expect(λ.min(2.345, 3.235)).to.be.equal(2.345)
        expect(λ.min(-2.345, -3.235)).to.be.equal(-3.235)
        expect(λ.min(-2.345, 3.235)).to.be.equal(-2.345)
        expect(λ.min()(2.345)(-3.235)).to.be.equal(-3.235)
    })

    specify('test max', () => {
        expect(λ.max(2, 3)).to.be.equal(3)
        expect(λ.max(3, 2)).to.be.equal(3)
        expect(λ.max(2.345, 3.235)).to.be.equal(3.235)
        expect(λ.max(-2.345, -3.235)).to.be.equal(-2.345)
        expect(λ.max(-2.345, 3.235)).to.be.equal(3.235)
        expect(λ.max(2.345)()(-3.235)).to.be.equal(2.345)
    })


    specify('test pow', () => {
        // TODO
    })

    specify('test abs', () => {
        expect(λ.abs(2)).to.be.equal(2)
        expect(λ.abs(-2)).to.be.equal(2)
        expect(λ.abs(32.0)).to.be.equal(32.0)
        expect(λ.abs(-32.0)).to.be.equal(32.0)
        expect(λ.abs()(-32.0)).to.be.equal(32.0)
    })

    specify('test half', () => {
        expect(λ.half(4)).to.be.equal(2)
        expect(λ.half(4.5)).to.be.equal(2.25)
        expect(λ.half(-1/2)).to.be.equal(-0.25)
        expect(λ.half(-0.01)).to.be.equal(-0.005)
        expect(λ.half(0)).to.be.equal(0)
        expect(λ.half(0.0001)).to.be.equal(0.0005)
        expect(λ.half()(0.0000001/2)).to.be.equal(5e-8)
    })

    specify('test avg', () => {
        expect(λ.avg(10, 5)).to.be.equal(12.5)
    })

    specify('test reciprocal', () => {
        expect(λ.reciprocal(2)).to.be.equal(0.5)
        expect(λ.reciprocal(-2)).to.be.equal(-0.5)
        expect(λ.reciprocal(32.0)).to.be.equal(0.03125)
        expect(λ.reciprocal(-32.0)).to.be.equal(-0.03125)
        expect(λ.reciprocal(-32.0)).to.be.equal(-0.03125)
    })

    specify('test combination', () => {
        // TODO
    })

})

