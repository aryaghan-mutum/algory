import { expect } from "chai"
import {
    sqr,
    cube,
    sumOfSquares,
    sumOfCubes,
    double,
    triple,
    add1,
    sub1,
    min,
    max,
    abs,
    half,
    avg,
    reciprocal
} from '../../../src/algos/NumericalComputation'

describe('Numerical Computation', () => {

    it('test square', () => {
        expect(sqr(2)).to.be.equal(4)
        expect(sqr(0)).to.be.equal(0)
        expect(sqr(-2)).to.be.equal(4)
    })

    it('test square', () => {
        expect(cube(2)).to.be.equal(8)
        expect(cube(0)).to.be.equal(0)
        expect(cube(-2)).to.be.equal(-8)
    })

    it('test sumOfSquares', () => {
        expect(sumOfSquares(3, 4)).to.be.equal(25)
        expect(sumOfSquares(0, 0)).to.be.equal(0)
        expect(sumOfSquares(-3, -4)).to.be.equal(25)
        expect(sumOfSquares(-3)(4)).to.be.equal(25)
    })

    it('test sumOfCubes', () => {
        expect(sumOfCubes(3, 4)).to.be.equal(91)
        expect(sumOfCubes(0, 0)).to.be.equal(0)
        expect(sumOfCubes(-3, -4)).to.be.equal(-91)
        expect(sumOfCubes(-3)(4)).to.be.equal(37)
    })

    it('test double', () => {
        expect(double(5)).to.be.equal(10)
        expect(double(0)).to.be.equal(0)
        expect(double(-5)).to.be.equal(-10)
        expect(double(-3)).to.be.equal(-6)
        expect(double()(3)).to.be.equal(6)
        expect(double()()(3.2)).to.be.equal(6.4)
    })

    it('test triple', () => {
        expect(triple(5)).to.be.equal(15)
        expect(triple(0)).to.be.equal(0)
        expect(triple(-5)).to.be.equal(-15)
        expect(triple(7.125)).to.be.equal(21.375)
        expect(triple(-7.125)).to.be.equal(-21.375)
        expect(triple()(3)).to.be.equal(9)
        expect(triple()()()(3.2)).to.be.equal(9.600000000000001)
    })

    it('test add1', () => {
        expect(add1(7)).to.be.equal(8)
        expect(add1(-7)).to.be.equal(-6)
        expect(add1(7.125)).to.be.equal(8.125)
        expect(add1(-7.125)).to.be.equal(-6.125)
        expect(add1()(0)).to.be.equal(1)
    })

    it('test sub1', () => {
        expect(sub1(7)).to.be.equal(6)
        expect(sub1(-7)).to.be.equal(-8)
        expect(sub1(7.125)).to.be.equal(6.125)
        expect(sub1(-7.125)).to.be.equal(-8.125)
        expect(sub1()(0)).to.be.equal(-1)
    })

    it('test min', () => {
        expect(min(2, 3)).to.be.equal(2)
        expect(min(3, 2)).to.be.equal(2)
        expect(min(2.345, 3.235)).to.be.equal(2.345)
        expect(min(-2.345, -3.235)).to.be.equal(-3.235)
        expect(min(-2.345, 3.235)).to.be.equal(-2.345)
        expect(min()(2.345)(-3.235)).to.be.equal(-3.235)
    })

    it('test max', () => {
        expect(max(2, 3)).to.be.equal(3)
        expect(max(3, 2)).to.be.equal(3)
        expect(max(2.345, 3.235)).to.be.equal(3.235)
        expect(max(-2.345, -3.235)).to.be.equal(-2.345)
        expect(max(-2.345, 3.235)).to.be.equal(3.235)
        expect(max(2.345)()(-3.235)).to.be.equal(2.345)
    })


    it('test pow', () => {
        // TODO:
    })

    it('test abs', () => {
        expect(abs(2)).to.be.equal(2)
        expect(abs(-2)).to.be.equal(2)
        expect(abs(32.0)).to.be.equal(32.0)
        expect(abs(-32.0)).to.be.equal(32.0)
        expect(abs()(-32.0)).to.be.equal(32.0)
    })

    it('test half', () => {
        expect(half(4)).to.be.equal(2)
        expect(half(4.5)).to.be.equal(2.25)
        expect(half(-1 / 2)).to.be.equal(-0.25)
        expect(half(-0.01)).to.be.equal(-0.005)
        expect(half(0)).to.be.equal(0)
        expect(half(0.0001)).to.be.equal(0.00005)
       // expect(half()(0.0000001 / 2)).to.be.equal(5e-8)
    })

    it('test avg', () => {
        expect(avg(10, 5)).to.be.equal(12.5)
    })

    it('test reciprocal', () => {
        expect(reciprocal(2)).to.be.equal(0.5)
        expect(reciprocal(-2)).to.be.equal(-0.5)
        expect(reciprocal(32.0)).to.be.equal(0.03125)
        expect(reciprocal(-32.0)).to.be.equal(-0.03125)
        expect(reciprocal(-32.0)).to.be.equal(-0.03125)
    })

    it('test combination', () => {
        // TODO:
    })

})

