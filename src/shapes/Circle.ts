/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

const err = require('../TypeViolation')
const curry = require('curry')

/**
 * Returns area of a circle
 */
export const circleArea = curry(
    /**
     * @param rad: circle radius
     */
    (rad: number): number => {
        err.numberTypeViolationError(rad)
        return Math.PI * rad * rad
    })

/**
 * Returns circumference of a circle
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
 */
export const circleInfo = curry(
    /**
     * @param rad: circle radius
     */
    (rad: number): Array<number> => {
        return [circleArea(rad), circleCircum(rad)]
    })


