/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {isNegative} from '../NumericalComputationPredicates'
const err = require('../../TypeViolation')
const curry = require('curry')

/**
 * Fibonacci: Imperative Procedure
 *
 * @param {number} n - Fibonacci index
 * @return {number} - A Fibonacci number of a specific index using Imperative/Sequential approach
 */
export const fibImper = curry(
    (n: number): number => {
        err.numberTypeViolationError(n)

        if (isNegative(n))
            throw new Error("Fibonacci for negative numbers do not exist")

        let x: number = 0
        let y: number = 1
        for (let i = 0; i < n; i++) {
            y = y + x
            x = y - x
        }
        return x
    })
