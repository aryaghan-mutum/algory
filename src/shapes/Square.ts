/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {sqr} from '../algos/NumericalComputation'

const curry = require('curry')
const err = require('../TypeViolation')

/**
 * Returns area of a square
 * F(s) => (* s s)
 */
export const squareArea = curry(
    /**
     *
     * @param length/side in a square
     */
    (length: number): number => {
        err.numberTypeViolationError(length)
        return sqr(length)
    })

/**
 * Returns square perimeter
 * F(s) => (* 4 s)
 */
export const squarePerimeter = curry(
    /**
     * @param length/side in a square
     */
    (length: number): number => {
        err.numberTypeViolationError(length)
        return 4 * length
    })