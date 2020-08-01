/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

import {sqr, cube, double, reciprocal, abs} from './Math'
import {isEven, isOdd} from './MathPredicates'
const curry = require('curry')

/**
 * @remarks 
 * @param lst - unsorted list
 * @returns The first number from a list
 */
export const car = curry(
    (arr: number[]): number => arr[0])

/**
 * @remarks Return a boolean expression true if the list if empty, false otherwise.
 *
 * @param arr - A list of numbers
 * @returns A boolean expression true or false
 */
export const isEmpty = curry(
    (arr: number[]): boolean => {
        return (arr.length === 0) ? true : false
    }
)

/**
 * @remarks The Sum of Average of numbers in an array
 * F([a, b, c ... n]) => (/ (+ a, b, c ... n) n)
 *
 * @param arr - A list of numbers
 * @returns The sum of average of numbers in a list
 */
export const avgLst = curry(
    (arr: Array<number>): number => {
        const total = arr.length
        let sum = arr.reduce((a: number, b: number) => a + b)
        return sum / total
    })

/**
 * @remarks A List of Squared numbers
 * F([a,b,c ... n]) = [(sqr a) (sqr b) (sqr c) ... sqr(n)]
 *
 * @param arr - A list of numbers
 * @returns A list of Squared numbers
 */
export const sqrLst = curry(
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => sqr(n))
    })

/**
 * @remarks A List of Cubed numbers
 * F([a,b,c ... n]) = [(cube a) (cube b) (cube c) ... cube(n)]
 *
 * @param arr - A list of numbers
 * @returns A list of Cubed numbers
 */
export const cubeLst = curry(
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => cube(n))
    })

/**
 * @remarks A List of Doubled numbers
 * F([a,b,c ... n]) = [(double a) (double b) (double c) ... double(n)]
 *
 * @param n - A list of numbers
 * @return A list of doubled numbers
 */
export const doubleLst = curry(
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => double(n))
    })

/**
 * @remarks A List of Reciprocal/Inverse numbers
 * F([a,b,c ... n]) = [(/ 1 a) (/ 1 b) (/ 1 c) ... (/ 1 n)]
 *
 * @param n - A list of numbers
 * @returns A list of Reciprocal numbers
 */
export const reciprocalLst = curry(
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => reciprocal(n))
    })

/**
 * @remarks A List of Reciprocal/Inverse numbers
 * F([a,b,c ... n]) = [(abs a) (abs b) (abs c) ... (abs n)]
 *
 * @param n - A list of numbers
 * @returns A list of absolute |x| numbers
 */
export const absLst = curry(
    (arr: Array<number>): Array<number> => {
        return arr.map((n: number) => abs(n))
    }
)
