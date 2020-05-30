/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {isOne, isZero} from '../NumericalComputationPredicates'
import {sub1} from '../NumericalComputation'
const curry = require('curry')

/**
 * Factorial: Recursive Procedure with Recursive Process
 * F(n) => (* n (f (- n 1))
 *
 * @param {number} n - A factorial index
 * @return {number} - A Factorial number of a specific index using Recursive process
 */
export const factRec = curry(
    (n: number): number => {
        n = Math.round(n)

        if (isZero(n) || isOne(n))
            return 1
        else if (n < 0)
            throw new Error("Factorial for negative numbers do not exist")
        else
            return n * factRec(sub1(n))
    })
