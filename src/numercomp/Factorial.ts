/**
 * Algory
 *
 * Copyright (c) Anuragn Muthyam
 * https://github.com/aryaghan-mutum
 *
 * (MIT License)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
 */
import {isOne, isZero} from './NumericalComputationPredicates'
import {sub1} from './NumericalComputation'

const err = require('../TypeViolation')
const curry = require('curry')

/**
 *
 * @param n
 */
const factorial = curry((n: number): number => {
    if (isZero(n) || isOne(n))
        return 1
    else if (n < 0)
        throw new Error("Factorial for negative numbers do not exist")
    else
        return n * factorial(sub1(n))
})

/**
 *
 * @param n
 */
export const factorialRec = curry((n: number): number => {
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
 *
 * @param n
 */
export const factorialIter = curry((n: number): number => {
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

