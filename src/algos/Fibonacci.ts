/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
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
import {isOne, isZero, isNegative} from './NumericalComputationPredicates'
import {sub1, sub2, square, sumOfSquares} from './NumericalComputation'
import {isEven} from './NumericalComputationPredicates'

const err = require('../TypeViolation')
const curry = require('curry')

/**
 * Returns a Fibonacci number of a specific index using Recursive approach
 * F(< n 0) = invalid
 * F(0)   = 0
 * F(1)   = 1
 * F(n)   = F(- n 1) + F(- n 2)
 */
export const fibRec = curry(
    /**
     * @param n: Fibonacci index
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
 * Returns a Fibonacci number of a specific index using Iterative approach
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
     * @param n: Fibonacci index
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
         * @param acc1: first accumulator to hold a value
         * @param acc2: second accumulator to hold a value
         * @param n: Fibonacci index
         */
        const fibIterHelper = (acc1: number,
                               acc2: number,
                               n: number): number => {
            return (n === 2) ? acc1 : fibIterHelper((acc1 + acc2), acc1, sub1(n))
        }

        return fibIterHelper(1, 1, n)
    })

/**
 * Returns a Fibonacci number of a specific index using Imperative/Sequential approach
 */
export const fibImper = curry(
    /**
     * @param n: Fibonacci index
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
 * Returns a Fibonacci number of a specific index using Logarithmic approach
 * Logarithmic process for F(8):
 * >(fib-log 1 0 0 1 8)
 * >(fib-log 1 0 1 1 4)
 * >(fib-log 1 0 2 3 2)
 * >(fib-log 1 0 13 21 1)
 * >(fib-log 34 21 13 21 0)
 */
export const fibLogarithmic = curry(
    /**
     * @param n: an input number
     */
    (n: number) => fibLogHelper(1, 0, 0, 1, n))

/**
 * Helper function for fibLogarithmic(n) which returns a Fibonacci number in O(log(n)) time
 * @param a
 * @param b
 * @param p
 * @param q
 * @param counter
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
