/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 *
 */

const curry = require('curry')

/**
 * Returns area of a rectangle
 */
export const rectangleArea = curry(
    /**
     * @param length: length of a rectangle
     * @param width; width/breadth of a rectangle
     */
    (length: number, width: number): number => {
        return length * width
    })

/**
 * Returns perimeter of a rectangle
 */
export const rectanglePerimeter = curry(
    /**
     * @param length: length of a rectangle
     * @param width; width/breadth of a rectangle
     */
    (length: number, width: number): number => {
        return 2 * (length + width)
    })
