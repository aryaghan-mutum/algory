/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drimcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import {sqr} from '../algos/NumericalComputation'

const curry = require('curry')
const err = require('../TypeViolation')

/**
 * @remarks Returns area of a square
 * F(s) => (* s s)
 */
export const squareArea = curry(
    /**
     * @param length/side in a square
     * @returns
     */
    (length: number): number => {
        err.numberTypeViolationError(length)
        return sqr(length)
    })

/**
 * @remarks Returns square perimeter
 * F(s) => (* 4 s)
 */
export const squarePerimeter = curry(
    /**
     * @param length - side in a square
     * @returns
     */
    (length: number): number => {
        err.numberTypeViolationError(length)
        return 4 * length
    })