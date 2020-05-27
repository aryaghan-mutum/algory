/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 *
 */

const curry = require('curry')

/**
 * Returns area of a triangle
 */
export const triangleArea = curry(
    /**
     * @param base: base length of a triangle
     * @param height: height length of a triangle
     */
    (base: number, height: number): number => {
        return 0.5 * base * height
    })

/**
 * Get triangle perimeter
 */
export const trianglePerimeter = curry(
    /**
     * @param sideX: one side of a triangle
     * @param sideY: second side of a triangle
     * @param base: base length of a triangle
     */
    (sideX: number, sideY: number, base: number): number => {
        return sideX + sideY + base
    })