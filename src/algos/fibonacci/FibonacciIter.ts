/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import {isNegative, isOne, isZero} from '../NumericalComputationPredicates'
import {sub1} from '../NumericalComputation'
const curry = require('curry')

/**
 * @remarks Fibonacci: Recursive Procedure with Iterative Process
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
 * @param n - Fibonacci index
 * @returns A Fibonacci number of a specific index using Iterative process
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
         * @remarks fibIterHelper returns the fibonacci number of an index
         * @param acc1 - First accumulator to hold a value
         * @param acc2 - Second accumulator to hold a value
         * @param num - Fibonacci index
         * @returns A Fibonacci number of a specific index using Iterative process
         */
        const fibIterHelper = (acc1: number,
                               acc2: number,
                               num: number): number => {
            return (num === 2) ? acc1 : fibIterHelper((acc1 + acc2), acc1, sub1(num))
        }

        return fibIterHelper(1, 1, n)
    })
