/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 *
 */

import {sqr, cube, double, reciprocal, abs} from './NumericalComputation'
import {isEven, isOdd} from './NumericalComputationPredicates'
const curry = require('curry')

/**
 * @param {Array<number>} lst - unsorted list
 * @return {number}
 */
export const car = curry(
    (arr: number[]): number => arr[0])

/**
 * Return a boolean expression true if the list if empty, false otherwise.
 *
 * @param {Array<number>} arr - A list of numbers
 * @return {boolean} - A boolean expression true or false
 */
export const isEmpty = curry(
    (arr: number[]): boolean => {
        return (arr.length === 0) ? true : false
    }
)

/**
 * The Sum of Average of numbers in an array
 * F([a, b, c ... n]) => (/ (+ a, b, c ... n) n)
 *
 * @param {Array<number>} arr - A list of numbers
 * @return {number} - The sum of average of numbers in a list
 */
export const avgLst = curry(
    (arr: Array<number>): number => {
        const total = arr.length
        let sum = arr.reduce((a: number, b: number) => a + b)
        return sum / total
    })

/**
 * A List of Squared numbers
 * F([a,b,c ... n]) = [(sqr a) (sqr b) (sqr c) ... sqr(n)]
 *
 * @param {Array<number>} arr - A list of numbers
 * @return {Array<number>} - A list of Squared numbers
 */
export const sqrLst = curry(
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => sqr(n))
    })

/**
 * A List of Cubed numbers
 * F([a,b,c ... n]) = [(cube a) (cube b) (cube c) ... cube(n)]
 *
 * @param {Array<number>} arr - A list of numbers
 * @return {Array<number>} - A list of Cubed numbers
 */
export const cubeLst = curry(
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => cube(n))
    })

/**
 * A List of Doubled numbers
 * F([a,b,c ... n]) = [(double a) (double b) (double c) ... double(n)]
 *
 * @param {Array<number>} n -  A list of numbers
 * @return {Array<number>} - A list of doubled numbers
 */
export const doubleLst = curry(
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => double(n))
    })

/**
 * A List of Reciprocal/Inverse numbers
 * F([a,b,c ... n]) = [(/ 1 a) (/ 1 b) (/ 1 c) ... (/ 1 n)]
 *
 * @param {Array<number>} n - A list of numbers
 * @return {Array<number>} - A list of Reciprocal numbers
 */
export const reciprocalLst = curry(
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => reciprocal(n))
    })

/**
 * A List of Reciprocal/Inverse numbers
 * F([a,b,c ... n]) = [(abs a) (abs b) (abs c) ... (abs n)]
 *
 * @param {Array<number>} n - A list of numbers
 * @return {Array<number>} - A list of absolute |x| numbers
 */
export const absLst = curry(
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => abs(n))
    }
)
