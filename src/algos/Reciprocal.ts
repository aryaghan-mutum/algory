/**
 * Algory
 *
 * Copyright (c) 2020 Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {isZero} from './NumericalComputationPredicates'
import {isEmpty} from './ListComputation'

const curry = require('curry')

/**
 * Reciprocal/Inverse a number
 * F(n) => (/ 1 n)
 */
export const reciprocal = curry(
    /**
     * @param {number} n - An input number
     * @return {number} - Reciprocal number
     */
    (n: number): number => {
        if (isZero(n)) {
            throw new Error('reciprocal of 0 is undefined')
        } else {
            return 1 / n
        }
    })

/**
 * A List of Reciprocal/Inverse numbers list
 * F([a,b,c ... n]) = [(/ 1 a) (/ 1 b) (/ 1 c) ... (/ 1 n)]
 */
export const reciprocalLst = curry(
    /**
     * @param {Array<number>} n - A list of numbers
     * @return {Array<number>} - A list of Reciprocal numbers
     */
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => reciprocal(n))
    })



