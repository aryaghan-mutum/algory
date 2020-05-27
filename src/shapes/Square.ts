/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {square} from '../algos/NumericalComputation'

const curry = require('curry')
const err = require('../TypeViolation')

/**
 * Returns area of a square
 */
export const squareArea = curry(
    /**
     *
     * @param length/side in a square
     */
    (length: number): number => {
        err.numberTypeViolationError(length)
        return square(length)
    })

/**
 * Returns square perimeter
 */
export const squarePerimeter = curry(
    /**
     * @param length/side in a square
     */
    (length: number): number => {
        err.numberTypeViolationError(length)
        return 4 * length
    })