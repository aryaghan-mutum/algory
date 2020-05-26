/**
 * Algory
 *
 * Copyright (c) Anuragn Muthyam
 * https://github.com/aryaghan-mutum
 *
 * (MIT License)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
 */

const numerPred = require('.//NumericalComputationPredicates')
const geometry = require('../geometry/Geometry')
const err = require('../TypeViolation')
const curry = require('curry')

/**
 *
 * @param x
 * @param y
 */
export const sumOfSquares = curry((x: number, y: number): number => {
    return geometry.square(x) + geometry.square(y)
})

/**
 *
 * @param x
 * @param y
 */
export const sumOfCubes = curry((x: number, y: number): number => {
    return geometry.cube(x) + geometry.cube(y)
})

/**
 *
 * @param n
 */
export const double = curry((n: number): number => {
    err.numberTypeViolationError(n)
    return n * 2
})

/**
 *
 * @param n
 */
export const triple = curry((n: number): number => {
    err.numberTypeViolationError(n)
    return n * 3
})

/**
 *
 * @param n
 */
export const add1 = curry((n: number): number => {
    err.numberTypeViolationError(n)
    return n + 1
})

/**
 *
 * @param n
 */
export const sub1 = curry((n: number): number => {
    err.numberTypeViolationError(n)
    return n - 1
})

/**
 *
 * @param a
 * @param b
 */
export const min = curry((a: number, b: number): number => {
    return a < b ? a : b
})

/**
 *
 * @param a
 * @param b
 */
export const max = curry((a: number, b: number): number => {
    return a > b ? a : b
})

/**
 * //TODO
 * @param base
 * @param n
 */
// export const pow = curry((base: number, n: number): number => {
//     return numerPred.isZero(n) ? 1 : base + pow(base, n - 1)
// })

/**
 *
 * @param n
 */
export const reciprocal = curry((n: number): number | string => {
    err.numberTypeViolationError(n)
    return numerPred.isZero(n) ? 'reciprocal of 0 is undefined' : 1 / n
})

/**
 *
 * @param n
 */
export const abs = curry((n: number): number => {
    err.numberTypeViolationError(n)
    return numerPred.isPositive(n) ? n : -(n)
})

/**
 * //TODO
 * @param n
 * @param m
 */
// export const combination = curry((n: number, m: number): number => {
//     if (numerPred.isZero(m) || (m == n)) {
//         return 1
//     } else {
//         return combination(sub1(n), m) + combination(sub1(n), sub1(m))
//     }
// })







