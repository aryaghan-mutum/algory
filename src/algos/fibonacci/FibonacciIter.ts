/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {isNegative, isOne, isZero} from '../NumericalComputationPredicates'
import {sub1} from '../NumericalComputation'
const curry = require('curry')

/**
 * Fibonacci: Recursive Procedure with Iterative Process
 *
 * Iterative process for F(8):
 * >(fib-i 1 1 8)
 * >(fib-i 1 1 8)
 * >(fib-i 2 1 7)
 * >(fib-i 3 2 6)
 * >(fib-i 5 3 5)
 * >(fib-i 8 5 4)
 * >(fib-i 13 8 3)
 * >(fib-i 21 13 2)
 *
 * @param {number} n - Fibonacci index
 * @return {number} - A Fibonacci number of a specific index using Iterative process
 */
export const fibIter = curry(
    (n: number): number => {

        if (isNegative(n))
            throw new Error("Fibonacci for negative numbers do not exist")
        else if (isZero(n))
            return 0
        else if (isOne(n))
            return 1

        /**
         * fibIterHelper returns the fibonacci number of an index
         * @param {number} acc1 - First accumulator to hold a value
         * @param {number} acc2 - Second accumulator to hold a value
         * @param {number} n - Fibonacci index
         * @return {number} - A Fibonacci number of a specific index using Iterative process
         */
        const fibIterHelper = (acc1: number,
                               acc2: number,
                               n: number): number => {
            return (n === 2) ? acc1 : fibIterHelper((acc1 + acc2), acc1, sub1(n))
        }

        return fibIterHelper(1, 1, n)
    })
