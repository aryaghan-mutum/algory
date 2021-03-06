/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drimcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import { sqr } from '../nc/Math'

const curry = require('curry')
const err = require('../TypeViolation')
const memoize = require('fast-memoize')

/**
 * @remarks Returns area of a square
 * F(s) => (* s s)
 */
export const squareArea = curry(memoize(
    /**
     * @param length/side in a square
     * @returns
     */
    (length: number): number => {
        err.numberTypeViolationError(length)
        return sqr(length)
    }))

/**
 * @remarks Returns square perimeter
 * F(s) => (* 4 s)
 */
export const squarePerimeter = curry(memoize(
    /**
     * @param length - side in a square
     * @returns
     */
    (length: number): number => {
        err.numberTypeViolationError(length)
        return 4 * length
    }))