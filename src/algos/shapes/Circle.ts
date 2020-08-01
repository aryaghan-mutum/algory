/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcdoer@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import { sqr } from '../Math'
const err = require('../TypeViolation')
const curry = require('curry')

/**
 * @remarks Returns area of a circle
 * F(r) => pi * r * r
 */
export const circleArea = curry(
    /**
     * @param rad - circle radius
     * @returns
     */
    (rad: number): number => {
        err.numberTypeViolationError(rad)
        return Math.PI * sqr(rad)
    })

/**
 * @remarks Returns circumference of a circle
 * F(r) => (* 2 pi r)
 */
export const circleCircum = curry(
    /**
     * @param rad - circle radius
     * @returns
     */
    (rad: number): number => {
        err.numberTypeViolationError(rad)
        return 2 * Math.PI * rad
    })

/**
 * @remarks Returns an array containing the circle area in the 0th index and the circumference in the 1st index
 * F(r) => [area, circum]
 */
export const circleInfo = curry(
    /**
     * @param rad - circle radius
     * @returns
     */
    (rad: number): Array<number> => {
        return [circleArea(rad), circleCircum(rad)]
    })


