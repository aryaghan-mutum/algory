/**
 * Algory
 *
 * Copyright (c) Anuragn Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

import { sqr, add1 } from './Math'
import { isZero } from './MathPredicates'

const curry = require('curry')
const memoize = require('fast-memoize')

/**
 * @remarks Returns a prime number if the number is prime, false otherwise
 * @param n - A number
 * @returns A boolean expression true if the number is prime
 * @example F?(n) => true or false
 */
export const isPrime = curry(memoize(
    (n: number): boolean => {
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
 * @param n - A number
 * @returns A boolean expression true if the number is prime
 * @example F?(n) => true or false 
 */
export const isPrimeOptimized = curry(memoize((n: number): boolean => (n < 2) ? false : optimizedPrimeIter(n, 2)))

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

