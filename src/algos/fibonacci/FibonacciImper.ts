/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import {isNegative} from '../NumericalComputationPredicates'
const err = require('../../TypeViolation')
const curry = require('curry')

/**
 * @remarks Fibonacci: Imperative Procedure
 * 
 * @param n - Fibonacci index
 * @returns A Fibonacci number of a specific index using Imperative/Sequential approach
 */
export const fibImper = curry(
    (n: number): number => {
        err.numberTypeViolationError(n)

        if (isNegative(n))
            throw new Error("Fibonacci for negative numbers do not exist")

        let x: number = 0
        let y: number = 1
        for (let i: number = 0; i < n; i++) {
            y = y + x
            x = y - x
        }
        return x
    })
