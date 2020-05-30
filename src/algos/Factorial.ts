/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */
import {isOne, isZero} from './NumericalComputationPredicates'
import {sub1} from './NumericalComputation'

const err = require('../TypeViolation')
const curry = require('curry')

/**
 * Factorial: Recursive Procedure with Recursive Process
 * F(n) => (* n (f (- n 1))
 */
const factorial = curry(
    /**
     * @param {number} n - A factorial index
     * @return {number} - A Factorial number of a specific index using Recursive process
     */
    (n: number): number => {
        if (isZero(n) || isOne(n))
            return 1
        else if (n < 0)
            throw new Error("Factorial for negative numbers do not exist")
        else
            return n * factorial(sub1(n))
    })

/**
 * Factorial: Recursive Procedure with Iterative Process
 */
export const factorialIter = curry(
    /**
     * @param {number} n - A factorial index
     * @return {number} - A Factorial number of a specific index using Recursive process
     */
    (n: number): number => {
        err.numberTypeViolationError(n)

        if (n < 0) throw new Error("Factorial for negative numbers do not exist")

        const fact = (product: number, counter: number): number => {
            if (counter > n) {
                return product
            } else {
                return fact((product * counter), (counter + 1))
            }
        }
        return fact(1, 1)
    })

/**
 * Factorial: Imperative Procedure with Sequential Process
 */
export const factorialImper = curry(
    /**
     * @param n: a factorial index
     * @param {number} n - A factorial index
     * @return {number} - A Factorial number of a specific index using Iterative process
     */
    (n: number): number => {
        err.numberTypeViolationError(n)

        if (isZero(n) || isOne(n))
            return 1
        else if (n < 0)
            throw new Error("Factorial for negative numbers do not exist")

        for (let i = n - 1; i >= 1; i--) {
            n *= i
        }
        return n
    })

