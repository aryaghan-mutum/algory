/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 *
 */

import {isEven, isOdd} from './NumericalComputationPredicates'
const curry = require('curry')

/**
 * A List of Even numbers
 * F([a,b,c ... n]) = [(isEven(a)) (isEven(b)) (isEven(c))  ...(isEven(n)) ]
 *
 * @param {Array<number>} n - A list of numbers
 * @return {Array<boolean>} - A list of even numbers
 */
export const isEvenLst = curry(
    (arr: Array<number>): Array<boolean> => {
        return arr.map((n: number) => isEven(n))
    })

/**
 * A List of Odd numbers
 * F([a,b,c ... n]) = [(isOdd(a)) (isOdd(b)) (isOdd(c))  ...(isOdd(n)) ]
 *
 * @param {Array<number>} n - A list of numbers
 * @return {Array<boolean>} - A list of odd numbers
 */
export const isOddLst = curry(
    (arr: Array<number>): Array<boolean> => {
        return arr.map((n: number) => isOdd(n))
    })
