/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import {isEven, isZero} from '../NumericalComputationPredicates'
import {sqr, sub1, sumOfSquares} from '../NumericalComputation'

const curry = require('curry')

/**
 * @remarks Fibonacci: Recursive Procedure with Logarithmic process
 * Logarithmic process for F(8):
 * >(fib-log 1 0 0 1 8)
 * >(fib-log 1 0 1 1 4)
 * >(fib-log 1 0 2 3 2)
 * >(fib-log 1 0 13 21 1)
 * >(fib-log 34 21 13 21 0)
 *
 * @param n - Fibonacci index
 * @returns A Fibonacci number of a specific index using Logarithmic process
 */
export const fibLogarithmic = curry(
    (n: number): number => fibLogHelper(1, 0, 0, 1, n))

/**
 * @remarks Helper function for fibLogarithmic(n) which returns a Fibonacci number in O(log(n)) time
 * @param a
 * @param b
 * @param p
 * @param q
 * @param counter
 * @returns A Fibonacci number of a specific index using Logarithmic approach
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
