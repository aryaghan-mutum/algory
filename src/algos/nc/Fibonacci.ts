/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */
import { add1, sub1, sub2, sumOfSquares, sqr } from './Math'
import { isNegative, isZero, isOne, isEven } from './MathPredicates'
import { range } from 'ramda'
const curry = require('curry')
const memoize = require('fast-memoize')

/**
 * @remarks Fibonacci: Imperative Procedure
 * 
 * @param n - Fibonacci index
 * @returns A Fibonacci number of a specific index using Imperative/Sequential approach
 */
export const fibImper = curry(memoize(
    (n: number): number => {
        if (isNegative(n))
            throw new Error("Fibonacci for negative numbers do not exist")

        let x: number = 0
        let y: number = 1

        range(0, n).forEach(i => {
            y = y + x
            x = y - x
        })

        return x
    }))

/**
* @remarks Fibonacci: Recursive Procedure with Iterative Process
*
* Iterative process for F(8):
* >(fib-i 1 1 8)
* >(fib-i 1 1 8)
* >(fib-i 2 1 7)
* >(fib-i 3 2 6)
* >(fib-i 5 3 5)
* >(fib-i 8 5 4)
* >(fib-i 13 8 3)
* >(fib-i 21 13 2)
*
* @param n - Fibonacci index
* @returns A Fibonacci number of a specific index using Iterative process
*/
export const fibIter = curry(memoize(
    (n: number): number => {

        if (isNegative(n))
            throw new Error("Fibonacci for negative numbers do not exist")
        else if (isZero(n))
            return 0
        else if (isOne(n))
            return 1

        /**
         * @remarks fibIterHelper returns the fibonacci number of an index
         * @param acc1 - First accumulator to hold a value
         * @param acc2 - Second accumulator to hold a value
         * @param num - Fibonacci index
         * @returns A Fibonacci number of a specific index using Iterative process
         */
        const fibIterHelper = (acc1: number,
            acc2: number,
            num: number): number => {
            return (num === 2) ? acc1 : fibIterHelper((acc1 + acc2), acc1, sub1(num))
        }

        return fibIterHelper(1, 1, n)
    }))

/**
* @remarks Fibonacci: Recursive Procedure with Recursive Process
* F(< n 0) = invalid
* F(0)   = 0
* F(1)   = 1
* F(n)   = F(- n 1) + F(- n 2)
*
* @param n - Fibonacci index
* @returns A Fibonacci number of a specific index using Recursive process
*/
export const fibRec = curry(memoize(
    (n: number): number => {

        if (isNegative(n))
            throw new Error("Fibonacci for negative numbers do not exist")
        else if (isZero(n))
            return 0
        else if (isOne(n))
            return 1
        else {
            return fibRec(sub1(n)) + fibRec(sub2(n))
        }
    }))


/**
 * @remarks Fibonacci: Recursive Procedure with Logarithmic process
 * Logarithmic process for F(8):
 * >(fib-log 1 0 0 1 8)
 * >(fib-log 1 0 1 1 4)
 * >(fib-log 1 0 2 3 2)
 * >(fib-log 1 0 13 21 1)
 * >(fib-log 34 21 13 21 0)
 *
 * @param n - Fibonacci index
 * @returns A Fibonacci number of a specific index using Logarithmic process
 */
export const fibLogarithmic = curry(memoize(
    (n: number): number => {

        if (isNegative(n))
            throw new Error("Fibonacci for negative numbers do not exist")

        return fibLogHelper(1, 0, 0, 1, n)
    }))

/**
 * @remarks Helper function for fibLogarithmic(n) which returns a Fibonacci number in O(log(n)) time
 * @param a
 * @param b
 * @param p
 * @param q
 * @param counter
 * @returns A Fibonacci number of a specific index using Logarithmic approach
 */
const fibLogHelper = (a: number,
    b: number,
    p: number,
    q: number,
    counter: number): number => {

    if (isZero(counter)) {
        return b
    } else if (isEven(counter)) {
        return fibLogHelper(
            a,
            b,
            sumOfSquares(p, q),
            (2 * p * q) + sqr(q),
            counter / 2)
    } else {
        return fibLogHelper(
            (b * q) + (a * q) + (a * p),
            (b * p) + (a * q),
            p,
            q,
            sub1(counter))
    }
}

/**
 * @remarks A List of Fibonacci numbers
 * @param n - The limit
 * @returns A list of Fibonacci numbers
 * @example F(n) = (map fib lst)
 */
export const fibMap = (curry(memoize((n: number): Array<number> => {
    return range(0, add1(n)).map(i => fibLogarithmic(i))
})))

