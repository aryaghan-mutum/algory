/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import { isOne, isZero } from './MathPredicates'
import { sub1 } from './Math'
import { numberTypeViolationError } from '../TypeViolation'
const curry = require('curry')
const memoize = require('fast-memoize')

/**
 * @remarks Factorial: Imperative Procedure with Sequential Process
 * 
 * @param n - A factorial index
 * @returns A Factorial number of a specific index using Iterative process
 */
export const factImper = curry(memoize(
    (n: number): number => {
        n = Math.round(n)
        numberTypeViolationError(n)

        if (isZero(n) || isOne(n))
            return 1
        else if (n < 0)
            throw new Error("Factorial for negative numbers do not exist")

        for (let i: number = n - 1; i >= 1; i--) {
            n *= i
        }
        return n
    }))

/**
 * @remarks Factorial: Recursive Procedure with Iterative Process
 * 
 * @param n - A factorial index
 * @returns A Factorial number of a specific index using Recursive process
 */
export const factIter = curry(memoize(
    (n: number): number => {
        n = Math.round(n)
        numberTypeViolationError(n)

        if (n < 0) throw new Error("Factorial for negative numbers do not exist")

        const fact = (product: number, counter: number): number => {
            if (counter > n) {
                return product
            } else {
                return fact((product * counter), (counter + 1))
            }
        }
        return fact(1, 1)
    }))

/**
 * @remarks Factorial: Recursive Procedure with Recursive Process
 * F(n) => (* n (f (- n 1))
 *
 * @param n - A factorial index
 * @returns A Factorial number of a specific index using Recursive process
 */
export const factRec = curry(memoize(
    (n: number): number => {
        n = Math.round(n)

        if (isZero(n) || isOne(n))
            return 1
        else if (n < 0)
            throw new Error("Factorial for negative numbers do not exist")
        else
            return n * factRec(sub1(n))
    }))





