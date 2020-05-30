/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {isEven, isZero} from '../NumericalComputationPredicates'
import {sqr, sub1, sumOfSquares} from '../NumericalComputation'

const curry = require('curry')

/**
 * Fibonacci: Recursive Procedure with Logarithmic process
 * Logarithmic process for F(8):
 * >(fib-log 1 0 0 1 8)
 * >(fib-log 1 0 1 1 4)
 * >(fib-log 1 0 2 3 2)
 * >(fib-log 1 0 13 21 1)
 * >(fib-log 34 21 13 21 0)
 *
 * @param {number} n - Fibonacci index
 * @return {number} - A Fibonacci number of a specific index using Logarithmic process
 */
export const fibLogarithmic = curry(
    (n: number): number => fibLogHelper(1, 0, 0, 1, n))

/**
 * Helper function for fibLogarithmic(n) which returns a Fibonacci number in O(log(n)) time
 * @param {number} a
 * @param {number} b
 * @param {number} p
 * @param {number} q
 * @param {number} counter
 * @return {number} - A Fibonacci number of a specific index using Logarithmic approach
 */
const fibLogHelper = (a: number,
                      b: number,
                      p: number,
                      q: number,
                      counter: number): number => {

    if (isZero(counter)) {
        debugger
        return b
    } else if (isEven(counter)) {
        return fibLogHelper(
            a,
            b,
            sumOfSquares(p, q),
            (2 * p * q) + sqr(q),
            counter / 2)
    } else {
        return fibLogHelper(
            (b * q) + (a * q) + (a * p),
            (b * p) + (a * q),
            p,
            q,
            sub1(counter))
    }
}
