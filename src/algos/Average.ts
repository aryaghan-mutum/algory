/**
 * Algory
 *
 * Copyright (c) 2020 Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

const curry = require('curry')

/**
 * An Average of two numbers
 * F(x, y) => (/ x y)
 */
export const avg = curry(
    /**
     * @param {number} x - An input first argument number
     * @param {number} y - An input second argument number
     * @return {number} - The average of two numbers
     */
    (x: number, y: number): number => {
        return x + y / 2
    })

/**
 * The Sum of Average of numbers in an array
 * F([a, b, c ... n]) => (/ (+ a, b, c ... n) n)
 */
export const avgLst = curry(
    /**
     * @param {Array<number>} arr - A list of numbers
     * @return {number} - The sum of average of numbers in a list
     */
    (arr: Array<number>): number => {
        const total = arr.length
        let sum = arr.reduce((a: number, b: number) => a + b)
        return sum / total
    })