/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcdoer@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import {
    identity,
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
    reciprocal,
    mod,
    gcd,
    lcm,
    sqrt
} from '../../algos/nc/Math'

describe('Math', () => {

    it('test identity', async () => {
        expect(identity(-1)).toBe(-1)
        expect(identity(0)).toBe(0)
        expect(identity(1)).toBe(1)
        expect(identity(-1.2)).toBe(-1.2)
        expect(identity()(-1.2)).toBe(-1.2)
        expect(identity('algory')).toBe('algory')
        expect(identity(true)).toBeTruthy();
        expect(identity(false)).not.toBeTruthy();
        expect(identity(null)).toBeNull()
        expect(identity(undefined)).toBeUndefined()
        expect(identity(NaN)).toBeNaN()
        expect(identity([-1, 0, 1, -1.2])).toEqual(expect.arrayContaining([-1, 0, 1, -1.2]))
        expect(identity(['algory', true, false])).toEqual(expect.arrayContaining(['algory', true, false]))
        expect(identity([[], null, undefined, NaN])).toEqual(expect.arrayContaining([[], null, undefined, NaN]))
        expect(identity([])).toEqual(expect.arrayContaining([]))
        expect(identity({ a: 1, b: 2 })).toMatchObject({
            a: expect.any(Number),
            b: expect.any(Number)
        })
    })

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

    it('test triple', async () => {
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
        expect(() => reciprocal(0)).toThrow()
    })

    it('test mod', async () => {
        expect(mod(42, 10)).toBe(2)
        expect(mod(42, -10)).toBe(2)
        expect(mod(-42, 10)).toBe(-2)
        expect(mod(-42, -10)).toBe(-2)
        expect(mod(-40, 10)).toBe(-0)
        expect(mod(40, 10)).toBe(0)
        expect(mod(370.24, 450)).toBe(370.24)
    })

    it('test gcd', async () => {
        expect(gcd(0, 0)).toBe(0)
        expect(gcd(2, 0)).toBe(2)
        expect(gcd(0, 2)).toBe(2)
        expect(gcd(2, 10)).toBe(2)
        expect(gcd(21, 81.0)).toBe(3.0)
        expect(gcd(12, 13)).toBe(1)
        expect(gcd(9, 3)).toBe(3)
        expect(gcd(0, 0)).toBe(0)
        expect(gcd(24, 60)).toBe(12)
        expect(gcd(2.0, 10.0)).toBe(2.0)
        expect(gcd(-2.0, -10.0)).toBe(-2.0)
        expect(gcd(-462, -1071)).toBe(-21)
    })

    it('test lcm', async () => {
        expect(lcm(0, 0)).toBe(0)
        expect(lcm(1, 0)).toBe(0)
        expect(lcm(0, 1)).toBe(0)
        expect(lcm(4, 6)).toBe(12)
        expect(lcm(6, 21)).toBe(42)
        expect(lcm(7, 2)).toBe(14)
        expect(lcm(3, 5)).toBe(15)
        expect(lcm(7, 3)).toBe(21)
        expect(lcm(1000000, 2)).toBe(1000000)
        expect(lcm(-9, -18)).toBe(-18)
        expect(lcm(-7, -9)).toBe(-63)
        expect(lcm(-7, 9)).toBe(63)
    })

    // it('test sqrt', async() => {
    //     expect(sqrt(25)).toBe(5)
    //     expect(sqrt(625)).toBe(25)
    // })

})

