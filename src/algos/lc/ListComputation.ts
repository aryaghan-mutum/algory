/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

import {
    sqr,
    cube,
    double,
    reciprocal,
    abs
} from '../nc/Math'
const curry = require('curry')
const memoize = require('fast-memoize')

/**
 * @remarks Get first element
 * @param lst - unsorted list
 * @returns The first number from a list
 */
export const car = curry(memoize((arr: number[]): number => arr[0]))

/**
 * @remarks Return a boolean expression true if the list if empty, false otherwise.
 * @param arr - A list of numbers
 * @returns A boolean expression true or false
 */
export const isEmpty = curry(memoize((arr: number[]): boolean => (arr.length === 0) ? true : false))

/**
 * @remarks The Sum of Average of numbers in an array 
 * @param arr - A list of numbers
 * @returns The sum of average of numbers in a list
 * @example F([a, b, c ... n]) => (/ (+ a, b, c ... n) n)
 */
export const avgMap = curry(memoize(
    (arr: Array<number>): number => {
        const total = arr.length
        let sum = arr.reduce((a: number, b: number) => a + b)
        return sum / total
    }))

/**
 * @remarks A List of Squared numbers
 * @param arr - A list of numbers
 * @returns A list of Squared numbers
 * @example F([a,b,c ... n]) = [(sqr a) (sqr b) (sqr c) ... sqr(n)]
 */
export const sqrMap = curry(memoize((arr: Array<number>): Array<number> => arr.map((n: number) => sqr(n))))

/**
 * @remarks A List of Cubed numbers
 * @param arr - A list of numbers
 * @returns A list of Cubed numbers
 * @example F([a,b,c ... n]) = [(cube a) (cube b) (cube c) ... cube(n)]
 */
export const cubeMap = curry(memoize((arr: Array<number>): Array<number> => arr.map((n: number) => cube(n))))

/**
 * @remarks A List of Doubled numbers
 * @param arr - A list of numbers
 * @return A list of doubled numbers
 * @example F([a,b,c ... n]) = [(double a) (double b) (double c) ... double(n)]
 */
export const doubleMap = curry(memoize((arr: Array<number>): Array<number> => arr.map((n: number) => double(n))))

/**
 * @remarks A List of Reciprocal/Inverse numbers
 * @param arr - A list of numbers
 * @returns A list of Reciprocal numbers
 * @example F([a,b,c ... n]) = [(/ 1 a) (/ 1 b) (/ 1 c) ... (/ 1 n)]
 */
export const reciprocalMap = curry(memoize((arr: Array<number>): Array<number> => arr.map((n: number) => reciprocal(n))))

/**
 * @remarks A List of Reciprocal/Inverse numbers
 * @param arr - A list of numbers
 * @returns A list of absolute |x| numbers
 * @example F([a,b,c ... n]) = [(abs a) (abs b) (abs c) ... (abs n)]
 */
export const absMap = curry(memoize((arr: Array<number>): Array<number> => arr.map((n: number) => abs(n))))

/**
 * @remarks Swap two elements
 * @param arr 
 * @param first 
 * @param second 
 */
export const swap =
    (arr: Array<number>, first: number, second: number): void => {

        if (arr === undefined || arr.length == 0) {
            return
        }

        let temp: number = arr[first]
        arr[first] = arr[second]
        arr[second] = temp
    }