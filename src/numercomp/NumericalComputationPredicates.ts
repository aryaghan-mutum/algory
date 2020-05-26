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

const numer = require('./NumericalComputation')
const curry = require('curry')
const err = require('../TypeViolation')

/**
 *
 * @param n
 */
export const isZero = curry((n: number): boolean => {
    err.numberTypeViolationError(n)
    return (n == 0) ? true : false
})

/**
 *
 * @param n
 */
export const isNegative = curry((n: number): boolean => {
    err.numberTypeViolationError(n)
    return (n < 0) ? true : false
})

/**
 *
 * @param n
 */
export const isPositive = curry((n: number): boolean => {
    err.numberTypeViolationError(n)
    return (n >= 0) ? true : false
})

/**
 *
 * @param n
 */
export const isLesserThanAndEqualToZero = curry((n: number): boolean => {
    err.numberTypeViolationError(n)
    return (n <= 0) ? true : false
})

/**
 * Analogous to the symbol "<"
 * @param x
 * @param y
 */
export const lesserThan = curry((x: number, y: number): boolean => {
    return x < y
})

/**
 * Analogous to the symbol ">"
 * @param x
 * @param y
 */
export const greaterThan = curry((x: number, y: number): boolean => {
    return x > y
})

/**
 *
 * @param x
 * @param y
 * @param z
 */
export const isSumLesser = curry((x: number, y: number, z: number): boolean => {
    return (x + y) < z
})

/**
 *
 * @param x
 * @param y
 * @param z
 */
export const isSumGreater = curry((x: number, y: number, z: number): boolean => {
    return (x + y) > z
})

/**
 *
 * @param n
 */
export const isEven = curry((n: number): boolean => {
    err.numberTypeViolationError(n)
    return numer.abs(n) % 2 == 0 ? true : false
})

/**
 *
 * @param n
 */
export const isOdd = curry((n: number): boolean => {
    err.numberTypeViolationError(n)
    return numer.abs(n) % 2 !== 0 ? true : false
})

