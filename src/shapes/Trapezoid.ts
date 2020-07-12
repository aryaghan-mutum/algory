/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

const curry = require('curry')

/**
 * @remarks Returns area of a trapezoid
 * F(b1, b2, h) => (/ (* (+ b1 b2) h) 2)
 */
export const trapezoidArea = curry(
    /**
     * @param baseX - first base side length of a trapezoid
     * @param baseY - second base side length of a trapezoid
     * @param height - height length of a trapezoid
     * @returns
     */
    (baseX: number, baseY: number, height: number): number => {
        return ((baseX + baseY) * height) / 2
    })

/**
 * @remarks Returns perimeter of a trapezoid
 * F(b1, b2, s1, s2) => (+ b1 b2 s1 s2)
 */
export const trapezoidPerimeter = curry(
    /**
     * @param baseX - first base side length of a trapezoid
     * @param baseY - second base side length of a trapezoid
     * @param sideX - first side of a trapezoid
     * @param sideY - second side of a trapezoid
     * @returns
     */
    (baseX: number,
     baseY: number,
     sideX: number,
     sideY: number): number => {
        return baseX + baseY + sideX + sideY
    })

