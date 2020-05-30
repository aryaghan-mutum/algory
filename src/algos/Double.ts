/**
 * Algory
 *
 * Copyright (c) 2020 Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

const curry = require('curry')

/**
 * Double a number
 * F(n) => (* n 2) or F(n) => (+ n n)
 */
export const double = curry(
    /**
     * @param {number} n - An input number
     * @return {number} - Doubled number
     */
    (n: number): number => {
        return n * 2
    })

/**
 * Double each numbers in a list
 * F([a,b,c ... n]) = [(double a) (double b) (double c) ... double(n)]
 */
export const doubleLst = curry(
    /**
     * @param {Array<number>} n -  A list of numbers
     * @return {Array<number>} - A list of doubled numbers
     */
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => double(n))
    })
