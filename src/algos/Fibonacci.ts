/**
 * Algory
 *
 * Copyright (c) 2020 Anurag Muthyam
 * https://github.com/aryaghan-mutum
 *
 *   *******************************************
 *   Fibonacci Algorithms:
 *   ********************************************
 *
 *   The first 10 Fibonacci Series:
 *   n:    0 1 2 3 4 5 6  7  8  9 10
 *   F(n): 0 1 1 2 3 5 8 13 21 34 55
 *
 *   Reference: https://en.wikipedia.org/wiki/Fibonacci_number
 *
 */
import {isOne, isZero, isNegative, isEven} from './NumericalComputationPredicates'
import {sub1, sub2, square, sumOfSquares} from './NumericalComputation'

const err = require('../TypeViolation')
const curry = require('curry')

/**
 * Fibonacci: Recursive Procedure with Recursive Process
 * F(< n 0) = invalid
 * F(0)   = 0
 * F(1)   = 1
 * F(n)   = F(- n 1) + F(- n 2)
 */
export const fibRec = curry(
    /**
     * @param {number} n - Fibonacci index
     * @return {number} - A Fibonacci number of a specific index using Recursive process
     */
    (n: number): number => {
        err.numberTypeViolationError(n)

        if (isNegative(n))
            throw new Error("Fibonacci for negative numbers do not exist")
        else if (isZero(n))
            return 0
        else if (isOne(n))
            return 1
        else {
            return fibRec(sub1(n)) + fibRec(sub2(n))
        }
    })

/**
 * Fibonacci: Recursive Procedure with Iterative Process
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
 */
export const fibIter = curry(
    /**
     * @param {number} n - Fibonacci index
     * @return {number} - A Fibonacci number of a specific index using Iterative process
     */
    (n: number): number => {

        if (isNegative(n))
            throw new Error("Fibonacci for negative numbers do not exist")
        else if (isZero(n))
            return 0
        else if (isOne(n))
            return 1

        /**
         * fibIterHelper returns the fibonacci number of an index
         * @param {number} acc1 - First accumulator to hold a value
         * @param {number} acc2 - Second accumulator to hold a value
         * @param {number} n - Fibonacci index
         * @return {number} - A Fibonacci number of a specific index using Iterative process
         */
        const fibIterHelper = (acc1: number,
                               acc2: number,
                               n: number): number => {
            return (n === 2) ? acc1 : fibIterHelper((acc1 + acc2), acc1, sub1(n))
        }

        return fibIterHelper(1, 1, n)
    })

/**
 * Fibonacci: Imperative Procedure
 */
export const fibImper = curry(
    /**
     * @param {number} n - Fibonacci index
     * @return {number} - A Fibonacci number of a specific index using Imperative/Sequential approach
     */
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

/**
 * Fibonacci: Recursive Procedure with Logarithmic process
 * Logarithmic process for F(8):
 * >(fib-log 1 0 0 1 8)
 * >(fib-log 1 0 1 1 4)
 * >(fib-log 1 0 2 3 2)
 * >(fib-log 1 0 13 21 1)
 * >(fib-log 34 21 13 21 0)
 */
export const fibLogarithmic = curry(
    /**
     * @param {number} n - Fibonacci index
     * @return {number} - A Fibonacci number of a specific index using Logarithmic process
     */
    (n: number): number => fibLogHelper(1, 0, 0, 1, n))

/**
 * Helper function for fibLogarithmic(n) which returns a Fibonacci number in O(log(n)) time
 * @param {number} a
 * @param {number} b
 * @param {number} p
 * @param {number} q
 * @param {number} counter
 * @return {number} - A Fibonacci number of a specific index using Logarithmic approach
 */
const fibLogHelper = (a: number,
                      b: number,
                      p: number,
                      q: number,
                      counter: number): number => {

    if (isZero(counter)) {
        debugger
        return b
    } else if (isEven(counter)) {
        return fibLogHelper(
            a,
            b,
            sumOfSquares(p, q),
            (2 * p * q) + square(q),
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
