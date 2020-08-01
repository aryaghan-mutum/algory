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
} from '../../algos/Math'

describe('Numerical Computation', () => {

    it('test square', () => {
        expect(sqr(2)).toEqual(4)
        expect(sqr(0)).toEqual(0)
        expect(sqr(-2)).toEqual(4)
    })

    it('test square', () => {
        expect(cube(2)).toEqual(8)
        expect(cube(0)).toEqual(0)
        expect(cube(-2)).toEqual(-8)
    })

    it('test sumOfSquares', () => {
        expect(sumOfSquares(3, 4)).toEqual(25)
        expect(sumOfSquares(0, 0)).toEqual(0)
        expect(sumOfSquares(-3, -4)).toEqual(25)
        expect(sumOfSquares(-3)(4)).toEqual(25)
    })

    it('test sumOfCubes', () => {
        expect(sumOfCubes(3, 4)).toEqual(91)
        expect(sumOfCubes(0, 0)).toEqual(0)
        expect(sumOfCubes(-3, -4)).toEqual(-91)
        expect(sumOfCubes(-3)(4)).toEqual(37)
    })

    it('test double', () => {
        expect(double(5)).toEqual(10)
        expect(double(0)).toEqual(0)
        expect(double(-5)).toEqual(-10)
        expect(double(-3)).toEqual(-6)
        expect(double()(3)).toEqual(6)
        expect(double()()(3.2)).toEqual(6.4)
    })

    it('test triple', () => {
        expect(triple(5)).toEqual(15)
        expect(triple(0)).toEqual(0)
        expect(triple(-5)).toEqual(-15)
        expect(triple(7.125)).toEqual(21.375)
        expect(triple(-7.125)).toEqual(-21.375)
        expect(triple()(3)).toEqual(9)
        expect(triple()()()(3.2)).toEqual(9.600000000000001)
    })

    it('test add1', () => {
        expect(add1(7)).toEqual(8)
        expect(add1(-7)).toEqual(-6)
        expect(add1(7.125)).toEqual(8.125)
        expect(add1(-7.125)).toEqual(-6.125)
        expect(add1()(0)).toEqual(1)
    })

    it('test sub1', () => {
        expect(sub1(7)).toEqual(6)
        expect(sub1(-7)).toEqual(-8)
        expect(sub1(7.125)).toEqual(6.125)
        expect(sub1(-7.125)).toEqual(-8.125)
        expect(sub1()(0)).toEqual(-1)
    })

    it('test min', () => {
        expect(min(2, 3)).toEqual(2)
        expect(min(3, 2)).toEqual(2)
        expect(min(2.345, 3.235)).toEqual(2.345)
        expect(min(-2.345, -3.235)).toEqual(-3.235)
        expect(min(-2.345, 3.235)).toEqual(-2.345)
        expect(min()(2.345)(-3.235)).toEqual(-3.235)
    })

    it('test max', () => {
        expect(max(2, 3)).toEqual(3)
        expect(max(3, 2)).toEqual(3)
        expect(max(2.345, 3.235)).toEqual(3.235)
        expect(max(-2.345, -3.235)).toEqual(-2.345)
        expect(max(-2.345, 3.235)).toEqual(3.235)
        expect(max(2.345)()(-3.235)).toEqual(2.345)
    })

    it('test pow', () => {
        // TODO:
    })

    it('test abs', () => {
        expect(abs(2)).toEqual(2)
        expect(abs(-2)).toEqual(2)
        expect(abs(32.0)).toEqual(32.0)
        expect(abs(-32.0)).toEqual(32.0)
        expect(abs()(-32.0)).toEqual(32.0)
    })

    it('test half', () => {
        expect(half(4)).toEqual(2)
        expect(half(4.5)).toEqual(2.25)
        expect(half(-1 / 2)).toEqual(-0.25)
        expect(half(-0.01)).toEqual(-0.005)
        expect(half(0)).toEqual(0)
        expect(half(0.0001)).toEqual(0.00005)
        // expect(half()(0.0000001 / 2)).toEqual(5e-8)
    })

    it('test avg', () => {
        expect(avg(10, 5)).toEqual(12.5)
    })

    it('test reciprocal', () => {
        expect(reciprocal(2)).toEqual(0.5)
        expect(reciprocal(-2)).toEqual(-0.5)
        expect(reciprocal(32.0)).toEqual(0.03125)
        expect(reciprocal(-32.0)).toEqual(-0.03125)
        expect(reciprocal(-32.0)).toEqual(-0.03125)
    })

    it('test combination', () => {
        // TODO:
    })

})

