/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

const curry = require('curry')

/**
 * Returns area of a trapezoid
 */
export const trapezoidArea = curry(
    /**
     * @param baseX: first base side length of a trapezoid
     * @param baseY: second base side length of a trapezoid
     * @param height: height length of a trapezoid
     */
    (baseX: number, baseY: number, height: number): number => {
        return ((baseX + baseY) * height) / 2
    })

/**
 * Returns perimeter of a trapezoid
 */
export const trapezoidPerimeter = curry(
    /**
     * @param baseX: first base side length of a trapezoid
     * @param baseY: second base side length of a trapezoid
     * @param sideX: first side of a trapezoid
     * @param sideY: second side of a trapezoid
     */
    (baseX: number,
     baseY: number,
     sideX: number,
     sideY: number): number => {
        return baseX + baseY + sideX + sideY
    })

