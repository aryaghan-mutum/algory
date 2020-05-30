/**
 * Algory
 *
 * Copyright (c) 2020 Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {sqr} from './Square'

const curry = require('curry')

/**
 * Cube a number
 * F(n) => (* n n n)
 */
export const cube = curry(
    /**
     * @param {number} n - An input number
     * @return {number} - Cubed number
     */
    (n: number): number => {
        return sqr(n) * n
    })

/**
 * A list of Squared numbers
 * F([a,b,c ... n]) = ((cube a) (cube b) (cube c) ... cube(n))
 */
export const cubeLst = curry(
    /**
     * @param {Array<number>} arr - A list of numbers
     * @return {Array<number>} - A list of Cubed numbers
     */
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => n * n * n)
    })


