/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import {isOne, isZero} from '../NumericalComputationPredicates'
import {sub1} from '../NumericalComputation'
const curry = require('curry')

/**
 * @remarks Factorial: Recursive Procedure with Recursive Process
 * F(n) => (* n (f (- n 1))
 *
 * @param n - A factorial index
 * @returns A Factorial number of a specific index using Recursive process
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
