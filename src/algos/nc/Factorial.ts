/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import { isOne, isZero, isNegative } from './MathPredicates'
import { sub1 } from './Math'
const curry = require('curry')
const memoize = require('fast-memoize')

/**
 * @remarks Factorial: Imperative Procedure with Sequential Process
 * @param n - A factorial index
 * @returns A Factorial number of a specific index using Iterative process
 */
export const factImper = curry(memoize(
    (n: number): number => {

        if(n === undefined || !Number.isInteger(n) || isNegative(n)) 
            throw new Error("Factorial for decimal numbers or undefined or negative numbers do not exist")

        else if (isZero(n) || isOne(n))
            return 1

        for (let i: number = n - 1; i >= 1; i--) {
            n *= i
        }
        return n
    }))

/**
 * @remarks Factorial: Recursive Procedure with Iterative Process
 * @param n - A factorial index
 * @returns A Factorial number of a specific index using Recursive process
 */
export const factIter = curry(memoize(
    (n: number): number => {

        if(n === undefined || !Number.isInteger(n) || isNegative(n)) 
            throw new Error("Factorial for decimal numbers or undefined or negative numbers do not exist")

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
 * @param n - A factorial index
 * @returns A Factorial number of a specific index using Recursive process
 * @example F(n) => (* n (f (- n 1))
 */
export const factRec = curry(memoize(
    (n: number): number => {

        if(n === undefined || !Number.isInteger(n) || isNegative(n)) 
            throw new Error("Factorial for decimal numbers or undefined or negative numbers do not exist")
        else if (isZero(n) || isOne(n))
            return 1
        else
            return n * factRec(sub1(n))
    }))





