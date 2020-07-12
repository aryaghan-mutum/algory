/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

const curry = require('curry')

/**
 * @remarks Returns area of a rectangle
 * F(l, w) => (* l w)
 */
export const rectangleArea = curry(
    /**
     * @param length - length of a rectangle
     * @param width -width/breadth of a rectangle
     * @returns
     */
    (length: number, width: number): number => {
        return length * width
    })

/**
 * @remarks Returns perimeter of a rectangle
 * F(l, w) => (* 2 (+ l w))
 */
export const rectanglePerimeter = curry(
    /**
     * @param length - length of a rectangle
     * @param width - width/breadth of a rectangle
     * @returns
     */
    (length: number, width: number): number => {
        return 2 * (length + width)
    })
