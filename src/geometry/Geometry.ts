/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {cube, square} from '../algos/NumericalComputation'

const curry = require('curry')

/**
 * Returns an array of squared numbers
 * F(arr[-1, 0, 1, 2, 3]) => arr[1, 0, 2, 4, 9]
 */
export const squareList = curry(
    /**
     * @param arr: an input array
     */
    (arr: Array<number>): Array<number> => {
        return arr.map(n => square(n))
    })

/**
 * Returns an array of cubed numbers
 * F(arr[-1, 0, 1, 2, 3]) => arr[-1, 0, 1, 8, 27]
 */
export const cubeList = curry(
    /**
     * @param arr: an input array
     */
    (arr: Array<number>): Array<number> => {
        return arr.map(n => cube(n))
    })


