/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

const curry = require('curry')

/**
 * @remarks Returns area of a triangle
 * F(b, h) => (* 1/2 b h)
 */
export const triangleArea = curry(
    /**
     * @param base - base length of a triangle
     * @param height - height length of a triangle
     * @returns
     */
    (base: number, height: number): number => {
        return 0.5 * base * height
    })

/**
 * @remarks Get triangle perimeter
 * F(s1, s2, b) => (+ s1 s2 b)
 */
export const trianglePerimeter = curry(
    /**
     * @param sideX - one side of a triangle
     * @param sideY - second side of a triangle
     * @param base - base length of a triangle
     * @returns
     */
    (sideX: number, sideY: number, base: number): number => {
        return sideX + sideY + base
    })