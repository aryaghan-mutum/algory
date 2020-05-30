/**
 * Algory
 *
 * Copyright (c) 2020 Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {isZero} from '../NumericalComputationPredicates'
import {add1, sqr} from '../NumericalComputation'

const curry = require('curry')

/**
 * Returns a prime number if the number is prime, false otherwise
 * F?(n) => t or f
 *
 * @param {number} n - An input number
 * @return {boolean} - A boolean expression true if the number is prime
 */
export const isPrime = curry(
    (n: number): boolean => {
        /**
         * @param {number} n - An input number
         * @param {number} count - A counter variable
         * @return {boolean} - A boolean expression true if the number is prime
         */
        const primeIter = (n: number, count: number): boolean => {
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
    })

/**
 * Optimized prime checker procedure which returns a prime number if the number is prime, false otherwise
 * F?(n) => t or f
 */
export const isPrimeOptimized = curry(
    /**
     * @param {number} n - An input number
     * @return {boolean} - A boolean expression true if the number is prime
     */
    (n: number): boolean => (n < 2) ? false : optimizedPrimeIter(n, 2))

/**
 * @param {number} n - An input number
 * @return {boolean} - A boolean expression true if the number is prime
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
