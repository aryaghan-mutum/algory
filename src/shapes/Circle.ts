/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {sqr} from '../algos/Square'

const err = require('../TypeViolation')
const curry = require('curry')

/**
 * Returns area of a circle
 * F(r) => pi * r * r
 */
export const circleArea = curry(
    /**
     * @param rad: circle radius
     */
    (rad: number): number => {
        err.numberTypeViolationError(rad)
        return Math.PI * sqr(rad)
    })

/**
 * Returns circumference of a circle
 * F(r) => (* 2 pi r)
 */
export const circleCircum = curry(
    /**
     * @param rad: circle radius
     */
    (rad: number): number => {
        err.numberTypeViolationError(rad)
        return 2 * Math.PI * rad
    })

/**
 * Returns an array containing the circle area in the 0th index and the circumference in the 1st index
 * F(r) => [area, circum]
 */
export const circleInfo = curry(
    /**
     * @param rad: circle radius
     */
    (rad: number): Array<number> => {
        return [circleArea(rad), circleCircum(rad)]
    })


