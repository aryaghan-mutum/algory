/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import {isOne, isZero} from '../NumericalComputationPredicates'
const curry = require('curry')
const err = require('../../TypeViolation')

/**
 * @remarks Factorial: Imperative Procedure with Sequential Process
 * 
 * @param n - A factorial index
 * @returns A Factorial number of a specific index using Iterative process
 */
export const factImper = curry(
    (n: number): number => {
        n = Math.round(n)
        err.numberTypeViolationError(n)

        if (isZero(n) || isOne(n))
            return 1
        else if (n < 0)
            throw new Error("Factorial for negative numbers do not exist")

        for (let i: number = n - 1; i >= 1; i--) {
            n *= i
        }
        return n
    })


