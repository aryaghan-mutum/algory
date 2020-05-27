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
import {isZero} from '../NumericalComputationPredicates'
import {add1, square} from '../NumericalComputation'

const curry = require('curry')

/**
 * Returns a prime number if the number is prime, false otherwise
 */
export const isPrime = curry(
    /**
     * @param n: an input number
     */
    (n: number): boolean => {
        /**
         *
         * @param n
         * @param count
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
 */
export const isPrimeOptimized = curry(
    /**
     * @param n: an input number
     */
    (n: number): boolean => (n < 2) ? false : optimizedPrimeIter(n, 2))

/**
 *
 * @param n: an input number
 */
const optimizedPrimeIter = (n: number, count: number): boolean => {
    if (n === count)
        return true
    else if (isZero(n % count))
        return false
    else if (n < square(count))
        return true
    else
        return optimizedPrimeIter(n, add1(count))
}
