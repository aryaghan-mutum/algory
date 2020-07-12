/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

const curry = require('curry')
const err = require('../../TypeViolation')

/**
 * @remarks Factorial: Recursive Procedure with Iterative Process
 * 
 * @param n - A factorial index
 * @returns A Factorial number of a specific index using Recursive process
 */
export const factIter = curry(
    (n: number): number => {
        n = Math.round(n)
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