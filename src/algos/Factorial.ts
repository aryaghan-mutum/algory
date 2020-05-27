/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */
import {isOne, isZero} from './NumericalComputationPredicates'
import {sub1} from './NumericalComputation'

const err = require('../TypeViolation')
const curry = require('curry')

/**
 * Returns a Factorial number of a specific index using Recursive process
 * F(n) => (* n (f (- n 1))
 */
const factorial = curry(
    /**
     * @param n: a factorial index
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
 * Returns a Factorial number of a specific index using Recursive process
 * F(n) => (* n (f (- n 1))
 */
export const factorialRec = curry(
    /**
     * @param n: a factorial index
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
 * Returns a Factorial number of a specific index using Iterative process
 * F(n) => (* n (f (- n 1))
 */
export const factorialIter = curry(
    /**
     * @param n: a factorial index
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

