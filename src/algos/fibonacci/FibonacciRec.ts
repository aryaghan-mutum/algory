import {isNegative, isOne, isZero} from "../NumericalComputationPredicates";
import {sub1, sub2} from "../NumericalComputation";

/**
 * Algory
 *
 * Copyright (c) 2020 Anurag Muthyam <anu.drumcoder@gmail.com>
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

const err = require('../../TypeViolation')
const curry = require('curry')

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
export const fibRec = curry(
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