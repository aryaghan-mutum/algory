/**
 * Algory
 *
 * Copyright (c) Anuragn Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

import { abs, sqr, add1 } from './Math'
const curry = require('curry')
const memoize = require('fast-memoize')

/**
 * @remarks Return true if the "n" is 0, false otherwise
 * @param n - A number 
 * @returns A boolean expression true or false
 * @example F?(n) => (= n 0) ? true : false
 */
export const isZero = curry(memoize((n: number): boolean => (n === 0) ? true : false))

/**
 * @remarks Return true if the "n" is 1, false otherwise
 * @param n - A number 
 * @returns A boolean expression true or false
 * @example F?(n) => (= n 1) ? true : false
 */
export const isOne = curry(memoize((n: number): boolean => (n === 1) ? true : false))

/**
 * @remarks Return true if the "n" is negative, false otherwise
 * @param n - A number 
 * @returns A boolean expression true or false
 * @example F?(n) => (< n 0) ? true : false
 */
export const isNegative = curry(memoize((n: number): boolean => (n < 0) ? true : false))

/**
 * @remarks Return true if the "n" is positive, false otherwise
 * @param n - A number 
 * @returns A boolean expression true or false
 * @example F?(n) => (>= n 0) ? true : false
 */
export const isPositive = curry(memoize((n: number): boolean => (n >= 0) ? true : false))

/**
 * @remarks Return true if the "n" is lesser Than and equal to zero, false otherwise
 * @param n - A number 
 * @returns A boolean expression true or false
 * @example F?(n) => (<= n 0) ? true : false
 */
export const isLesserThanAndEqualToZero = curry(memoize((n: number): boolean => (n <= 0) ? true : false))

/**
 * @remarks Return true if the "x" is lesser than "y", false otherwise
 * @param x - A number 
 * @param y - A number 
 * @returns A boolean expression true or false
 * @example F?(n) => (< x y)  Note: lesserThan() is analogous to the operator "<"
 */
export const lesserThan = curry((x: number, y: number): boolean => x < y)

/**
 * @remarks Return true if the "x" is greater than "y", false otherwise
 * @param x - A number 
 * @param y - A number 
 * @returns A boolean expression true or false
 * @example F?(n) => (> x y) Note: greaterThan() is analogous to the operator ">"
 */
export const greaterThan = curry((x: number, y: number): boolean => x > y)

/**
 * @remarks Return true if the sum of the returned value of first two formal parameter values
 * @param x - A number 
 * @param y - A number 
 * @param z - A number 
 * @returns A boolean expression true or false
 * @example F?(n) => (< (+ x y) z) Note: is lesser than the third argument's value", false otherwise
 */
export const isSumLesser = curry((x: number, y: number, z: number): boolean => (x + y) < z)

/**
 * @remarks Return true if the sum of the returned value of first two formal parameter values
 * @param x - A number 
 * @param y - A number 
 * @param z - A number 
 * @returns A boolean expression true or false
 * @example F?(n) => (> (+ x y) z) Note: is greater than the third argument's value", false otherwise
 */
export const isSumGreater = curry((x: number, y: number, z: number): boolean => (x + y) > z)

/**
 * @remarks Return true if the "n" is an even number
 * @param n - A number 
 * @returns A boolean expression true or false
 * @example F?(n) => (= (% (abs n) 2) 0) ? true : false
 */
export const isEven = curry(memoize((n: number): boolean => abs(n) % 2 == 0 ? true : false))

/**
 * @remarks Return true if the "n" is an odd number
 * @param n - A number 
 * @returns A boolean expression true or false
 * @example F?(n) => (!= (% (abs n) 2) 0) ? true : false
 */
export const isOdd = curry(memoize((n: number): boolean => abs(n) % 2 !== 0 ? true : false))
