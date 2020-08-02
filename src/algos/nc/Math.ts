

/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

import { isZero, isPositive } from './MathPredicates'
const memoize = require('fast-memoize')
const curry = require('curry')

/**
 * @remarks Square a number
 * @param n - A number
 * @returns Squared number
 * @example F(n) => (* n n)
 */
export const sqr = curry(memoize((n: number): number => n * n))

/**
 * @remarks Cube a number
 * @param n - A number
 * @returns Cubed number
 * @example F(n) => (* n n n)
 */
export const cube = curry(memoize((n: number): number => sqr(n) * n))

/**
 * @remarks Square two numbers and sum the returned values
 * @param x
 * @param y
 * @returns Sum of Squares 
 * @example F(n) => (+ (square x) (square y))
 */
export const sumOfSquares = curry((x: number, y: number): number => sqr(x) + sqr(y))

/**
 * @remarks Cube two numbers and sum the returned values
 * @param x - A number 
 * @param y - A number 
 * @returns Sum of Cubes
 * @example F(n) => (+ (cube x) (cube y))
 */
export const sumOfCubes = curry((x: number, y: number): number => cube(x) + cube(y))

/**
 * @remarks Double a number
 * @param n - A number
 * @returns A doubled number
 * @example F(n) => (* n 2) or F(n) => (+ n n)
 */
export const double = curry(memoize((n: number): number => n * 2))

/**
 * @remarks Triple a number
 * @param n - A number 
 * @returns - A number multiplied with 3
 * @example F(n) => (* n 3) or F(n) => (+ n n n)
 */
export const triple = curry(memoize((n: number): number => n * 3))

/**
 * @remarks Add 1 to a number
 * @param n - A number 
 * @returns - A number added with 1
 * @example F(n) => (+ n 1)
 */
export const add1 = curry(memoize((n: number): number => n + 1))

/**
 * @remarks Subtract a number
 * @param n - A number 
 * @returns A number subtracted by 1
 * @example F(n) => (- n 1)
 */
export const sub1 = curry(memoize((n: number): number => n - 1))

/**
 * @remarks Subtract two numbers
 * @param n - A number 
 * @returns A number subtracted by 2
 * @example F(n) => (- n 2)
 */
export const sub2 = curry(memoize((n: number): number => n - 2))

/**
 * @remarks Get the minimum number between two numbers
 * @param a - A number 
 * @param b - A number 
 * @returns A minimum number between two numbers 
 * @example F(x, y) => (< a b) ? a : b
 */
export const min = curry((a: number, b: number): number => a < b ? a : b)

/**
 * @remarks Get the maximum number between two numbers
 * @param a - A number 
 * @param b - A number 
 * @returns - A maximum number between two numbers 
 * @example F(x, y) => (> a b) ? a : b
 */
export const max = curry((a: number, b: number): number => a > b ? a : b)

/**
 * @remarks //TODO
 * @param base
 * @param n
 */
// export const pow = curry(
// (base: number, n: number): number => {
//     return isZero(n) ? 1 : base + pow(base, n - 1)
// })

/**
 * @remarks Get an Absolute/modulus a number
 * @param n - A number 
 * @returns An absolute value of a number
 * @example F(n) => |n|
 */
export const abs = curry(memoize((n: number): number => isPositive(n) ? n : -(n)))

/**
 * @remarks Half a number 
 * @param n
 * @returns a number divided by 2 
 * @example F(n) => (/ n 2)
 */
export const half = curry(memoize((n: number): number => n / 2))

/**
 * @remarks An Average of two numbers
 * @param x - An input first argument number
 * @param y - An input second argument number
 * @returns An average of two numbers
 * @example F(x, y) => (/ x y)
 */
export const avg = curry((x: number, y: number): number => x + y / 2)

/**
 * @remarks Reciprocal/Inverse a number
 * @param n - An input number
 * @returns A Reciprocal number
 * @example F(n) => (/ 1 n)
 */
export const reciprocal = curry(memoize(
    (n: number): number => {
        if (isZero(n)) {
            throw new Error('Reciprocal/Inverse of 0 is undefined')
        } else {
            return 1 / n
        }
    }))

/**
 * @remarks Remainder
 * @param a 
 * @param b 
 * @returns A remainder of two numbers 
 * @example F(a, b) => (- a (* (floor (/ a b) b))))
 */
export const remainder = curry((a: number, b: number): number => a - Math.floor(a / b) * b)

/**
 * @remarks Greatest Common Divisor (GCD)
 * @param a - A number 
 * @param b - remainder 
 * @returns A Greatest Common Divisor of two integers
 * @example F(a b) = F(b r), where r is remainder
 */
export const gcd = curry((a: number, b: number): number => isZero(b) ? a : gcd(b, remainder(a, b)))

/**
 *
 * @remarks FIXME:
 *
 */
// export const combination = curry(
// (n: number, m: number): number => {
//     if (isZero(m) || (m == n)) {
//         return 1
//     } else {
//         return combination(sub1(n), m) + combination(sub1(n), sub1(m))
//     }
// })






