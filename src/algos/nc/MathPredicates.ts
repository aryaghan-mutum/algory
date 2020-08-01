/**
 * Algory
 *
 * Copyright (c) Anuragn Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

import { abs, sqr, add1 } from './Math'
import { numberTypeViolationError } from '../TypeViolation'
const curry = require('curry')
const memoize = require('fast-memoize')

/**
 * @remarks Return true if the "n" is 0, false otherwise
 * F?(n) => (= n 0) ? true : false
 */
export const isZero = curry(memoize(
    /**
     * @param n
     * @returns 
     */
    (n: number): boolean => {
        numberTypeViolationError(n)
        return (n === 0) ? true : false
    }))

/**
 * @remarks Return true if the "n" is 1, false otherwise
 * F?(n) => (= n 1) ? true : false
 */
export const isOne = curry(memoize(
    /**
     * @param n
     * @returns 
     */
    (n: number): boolean => {
        numberTypeViolationError(n)
        return (n === 1) ? true : false
    }))

/**
 * @remarks Return true if the "n" is negative, false otherwise
 * F?(n) => (< n 0) ? true : false
 */
export const isNegative = curry(memoize(
    /**
     * @param n
     * @returns 
     */
    (n: number): boolean => {
        numberTypeViolationError(n)
        return (n < 0) ? true : false
    }))

/**
 * @remarks Return true if the "n" is positive, false otherwise
 * F?(n) => (>= n 0) ? true : false
 */
export const isPositive = curry(memoize(
    /**
     * @param n
     * @returns 
     */
    (n: number): boolean => {
        numberTypeViolationError(n)
        return (n >= 0) ? true : false
    }))

/**
 * @remarks Return true if the "n" is lesser Than and equal to zero, false otherwise
 * F?(n) => (<= n 0) ? true : false
 */
export const isLesserThanAndEqualToZero = curry(memoize(
    /**
     * @param n
     * @returns 
     */
    (n: number): boolean => {
        numberTypeViolationError(n)
        return (n <= 0) ? true : false
    }))

/**
 * @remarks Return true if the "x" is lesser than "y", false otherwise
 * lesserThan() is analogous to the operator "<"
 * F?(n) => (< x y)
 */
export const lesserThan = curry(
    /**
     * @param x
     * @param y
     * @returns
     */
    (x: number, y: number): boolean => {
        return x < y
    })

/**
 * @remarks Return true if the "x" is greater than "y", false otherwise
 * greaterThan() is analogous to the operator ">"
 * F?(n) => (> x y)
 */
export const greaterThan = curry(
    /**
     * @param x
     * @param y
     * @returns 
     */
    (x: number, y: number): boolean => {
        return x > y
    })

/**
 * @remarks Return true if the sum of the returned value of first two formal parameter values
 * is lesser than the third argument's value", false otherwise
 * F?(n) => (< (+ x y) z)
 */
export const isSumLesser = curry(
    /**
     * @param x
     * @param y
     * @param z
     * @returns 
     */
    (x: number, y: number, z: number): boolean => {
        return (x + y) < z
    })

/**
 * @remarks Return true if the sum of the returned value of first two formal parameter values
 * is greater than the third argument's value", false otherwise
 * F?(n) => (> (+ x y) z)
 */
export const isSumGreater = curry(
    /**
     * @param x
     * @param y
     * @param z
     * @returns 
     */
    (x: number, y: number, z: number): boolean => {
        return (x + y) > z
    })

/**
 * @remarks Return true if the "n" is an even number
 * F?(n) => (= (% (abs n) 2) 0) ? true : false
 */
export const isEven = curry(memoize(
    /**
     * @param n
     * @returns 
     */
    (n: number): boolean => {
        numberTypeViolationError(n)
        return abs(n) % 2 == 0 ? true : false
    }))

/**
 * @remarks Return true if the "n" is an odd number
 * F?(n) => (!= (% (abs n) 2) 0) ? true : false
 */
export const isOdd = curry(memoize(
    /**
     * @param n
     * @remarks
     */
    (n: number): boolean => {
        numberTypeViolationError(n)
        return abs(n) % 2 !== 0 ? true : false
    }))

/**
 * @remarks Returns a prime number if the number is prime, false otherwise
 * F?(n) => t or f
 *
 * @param n - An input number
 * @returns A boolean expression true if the number is prime
 */
export const isPrime = curry(memoize(
    (n: number): boolean => {
        /**
         * @param num - An input number
         * @param count - A counter variable
         * @returns A boolean expression true if the number is prime
         */
        const primeIter = (num: number, count: number): boolean => {
            if (n < 2)
                return false
            else if (n === count)
                return true
            else if (isZero(n % count))
                return false
            else
                return primeIter(n, add1(count))
        }
        return primeIter(n, 2)
    }))

/**
 * @remarks Optimized prime checker procedure which returns a prime number if the number is prime, false otherwise
 * F?(n) => t or f
 */
export const isPrimeOptimized = curry(memoize(
    /**
     * @param n - An input number
     * @returns A boolean expression true if the number is prime
     */
    (n: number): boolean => (n < 2) ? false : optimizedPrimeIter(n, 2)))

/**
 * @param n - An input number
 * @returns A boolean expression true if the number is prime
 */
const optimizedPrimeIter = (n: number, count: number): boolean => {
    if (n === count)
        return true
    else if (isZero(n % count))
        return false
    else if (n < sqr(count))
        return true
    else
        return optimizedPrimeIter(n, add1(count))
}
