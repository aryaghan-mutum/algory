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
} from '../../algos/nc/Math'

describe('Math', () => {

    it('test square', async () => {
        expect(sqr(2)).toBe(4)
        expect(sqr(0)).toBe(0)
        expect(sqr(-2)).toBe(4)
    })

    it('test square', async () => {
        expect(cube(2)).toBe(8)
        expect(cube(0)).toBe(0)
        expect(cube(-2)).toBe(-8)
    })

    it('test sumOfSquares', async () => {
        expect(sumOfSquares(3, 4)).toBe(25)
        expect(sumOfSquares(0, 0)).toBe(0)
        expect(sumOfSquares(-3, -4)).toBe(25)
        expect(sumOfSquares(-3)(4)).toBe(25)
    })

    it('test sumOfCubes', async () => {
        expect(sumOfCubes(3, 4)).toBe(91)
        expect(sumOfCubes(0, 0)).toBe(0)
        expect(sumOfCubes(-3, -4)).toBe(-91)
        expect(sumOfCubes(-3)(4)).toBe(37)
    })

    it('test double', async () => {
        expect(double(5)).toBe(10)
        expect(double(0)).toBe(0)
        expect(double(-5)).toBe(-10)
        expect(double(-3)).toBe(-6)
        expect(double()(3)).toBe(6)
        expect(double()()(3.2)).toBe(6.4)
    })

    it('test triple', async() => {
        expect(triple(5)).toBe(15)
        expect(triple(0)).toBe(0)
        expect(triple(-5)).toBe(-15)
        expect(triple(7.125)).toBe(21.375)
        expect(triple(-7.125)).toBe(-21.375)
        expect(triple()(3)).toBe(9)
        expect(triple()()()(3.2)).toBe(9.600000000000001)
    })

    it('test add1', async () => {
        expect(add1(7)).toBe(8)
        expect(add1(-7)).toBe(-6)
        expect(add1(7.125)).toBe(8.125)
        expect(add1(-7.125)).toBe(-6.125)
        expect(add1()(0)).toBe(1)
    })

    it('test sub1', async () => {
        expect(sub1(7)).toBe(6)
        expect(sub1(-7)).toBe(-8)
        expect(sub1(7.125)).toBe(6.125)
        expect(sub1(-7.125)).toBe(-8.125)
        expect(sub1()(0)).toBe(-1)
    })

    it('test min', async () => {
        expect(min(2, 3)).toBe(2)
        expect(min(3, 2)).toBe(2)
        expect(min(2.345, 3.235)).toBe(2.345)
        expect(min(-2.345, -3.235)).toBe(-3.235)
        expect(min(-2.345, 3.235)).toBe(-2.345)
        expect(min()(2.345)(-3.235)).toBe(-3.235)
    })

    it('test max', async () => {
        expect(max(2, 3)).toBe(3)
        expect(max(3, 2)).toBe(3)
        expect(max(2.345, 3.235)).toBe(3.235)
        expect(max(-2.345, -3.235)).toBe(-2.345)
        expect(max(-2.345, 3.235)).toBe(3.235)
        expect(max(2.345)()(-3.235)).toBe(2.345)
    })

    it('test pow', async () => {
        // TODO:
    })

    it('test abs', async () => {
        expect(abs(2)).toBe(2)
        expect(abs(-2)).toBe(2)
        expect(abs(32.0)).toBe(32.0)
        expect(abs(-32.0)).toBe(32.0)
        expect(abs(null)).toBeNull()
        expect(abs({})).toBeNaN()
        expect(abs('string')).toBeNaN()
        expect(abs([1, 2, 3])).toBeNaN()
        expect(abs()(-32.0)).toBe(32.0)
    })

    it('test half', async () => {
        expect(half(4)).toBe(2)
        expect(half(4.5)).toBe(2.25)
        expect(half(-1 / 2)).toBe(-0.25)
        expect(half(-0.01)).toBe(-0.005)
        expect(half(0)).toBe(0)
        expect(half(0.0001)).toBe(0.00005)
    })

    it('test avg', async () => {
        expect(avg(10, 5)).toBe(12.5)
    })

    it('test reciprocal', async () => {
        expect(reciprocal(2)).toBe(0.5)
        expect(reciprocal(-2)).toBe(-0.5)
        expect(reciprocal(32.0)).toBe(0.03125)
        expect(reciprocal(-32.0)).toBe(-0.03125)
        expect(reciprocal(-32.0)).toBe(-0.03125)
    })

    it('test combination', async () => {
        // TODO:
    })
})

