/**
 * Algory
 *
 * Copyright (c) 2020 Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

const curry = require('curry')

/**
 * Square a number
 *  F(n) => (* n n)
 */
export const sqr = curry(
    /**
     * @param {number} n - An input number
     * @return {number} - Squared number
     */
    (n: number): number => {
        return n * n
    })

/**
 * A list of Squared numbers
 * F([a,b,c ... n]) = ((sqr a) (sqr b) (sqr c) ... sqr(n))
 */
export const sqrLst = curry(
    /**
     * @param {Array<number>} arr - A list of numbers
     * @return {Array<number>} - A list of Squared numbers
     */
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => n * n)
    })


