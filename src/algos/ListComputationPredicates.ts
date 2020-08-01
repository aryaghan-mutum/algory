/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

import {isEven, isOdd} from './MathPredicates'
const curry = require('curry')

/**
 * @remarks A List of Even numbers
 * F([a,b,c ... n]) = [(isEven(a)) (isEven(b)) (isEven(c))  ...(isEven(n)) ]
 *
 * @param n - A list of numbers
 * @return A list of even numbers
 */
export const isEvenLst = curry(
    (arr: Array<number>): Array<boolean> => {
        return arr.map((n: number) => isEven(n))
    })

/**
 * @remarks A List of Odd numbers
 * F([a,b,c ... n]) = [(isOdd(a)) (isOdd(b)) (isOdd(c))  ...(isOdd(n)) ]
 *
 * @param n - A list of numbers
 * @return A list of odd numbers
 */
export const isOddLst = curry(
    (arr: Array<number>): Array<boolean> => {
        return arr.map((n: number) => isOdd(n))
    })
