/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {isOne, isZero} from '../NumericalComputationPredicates'
const curry = require('curry')
const err = require('../../TypeViolation')

/**
 * Factorial: Imperative Procedure with Sequential Process
 *
 * @param {number} n - A factorial index
 * @return {number} - A Factorial number of a specific index using Iterative process
 */
export const factImper = curry(
    (n: number): number => {
        n = Math.round(n)
        err.numberTypeViolationError(n)

        if (isZero(n) || isOne(n))
            return 1
        else if (n < 0)
            throw new Error("Factorial for negative numbers do not exist")

        for (let i = n - 1; i >= 1; i--) {
            n *= i
        }
        return n
    })
