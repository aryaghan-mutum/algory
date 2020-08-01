

/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

import { isZero, isPositive } from './MathPredicates'
import { numberTypeViolationError } from '../TypeViolation'

const curry = require('curry')

/**
 * @remarks Square a number
 *  F(n) => (* n n)
 *
 * @param n - An input number
 * @returns Squared number
 */
export const sqr = curry(
    (n: number): number => {
        return n * n
    })

/**
 * @remarks Cube a number
 * F(n) => (* n n n)
 *
 * @param n - An input number
 * @returns Cubed number
 */
export const cube = curry(
    (n: number): number => {
        return sqr(n) * n
    })

/**
 * @remarks Square two numbers and sum the returned values
 * F(n) => (+ (square x) (square y))
 */
export const sumOfSquares = curry(
    /**
     * @param x
     * @param y
     * @returns - Sum of Squares 
     */
    (x: number, y: number): number => {
        return sqr(x) + sqr(y)
    })

/**
 * @remarks Cube two numbers and sum the returned values
 * F(n) => (+ (cube x) (cube y))
 */
export const sumOfCubes = curry(
    /**
     * @param x
     * @param y
     * @returns Sum of Cubes
     */
    (x: number, y: number): number => {
        return cube(x) + cube(y)
    })

/**
 * @remarks Double a number
 * F(n) => (* n 2) or F(n) => (+ n n)
 *
 * @param n - An input number
 * @returns Doubled number
 */
export const double = curry(
    (n: number): number => {
        return n * 2
    })

/**
 * @remarks Triple a number.
 * F(n) => (* n 3) or F(n) => (+ n n n)
 */
export const triple = curry(
    /**
     * @param n
     * @returns 
     */
    (n: number): number => {
        numberTypeViolationError(n)
        return n * 3
    })

/**
 * @remarks Add a number
 * F(n) => (+ n 1)
 */
export const add1 = curry(
    /**
     * @param n
     * @returns 
     */
    (n: number): number => {
        numberTypeViolationError(n)
        return n + 1
    })

/**
 * @remarks Subtract a number
 * F(n) => (- n 1)
 */
export const sub1 = curry(
    /**
     * @param n
     * @returns 
     */
    (n: number): number => {
        numberTypeViolationError(n)
        return n - 1
    })

/**
 * @remarks Subtract two numbers
 * F(n) => (- n 2)
 */
export const sub2 = curry(
    /**
     * @param n
     * @returns 
     */
    (n: number): number => {
        numberTypeViolationError(n)
        return n - 2
    })

/**
 * @remarks Get the minimum number between two numbers
 * F(x, y) => (< a b) ? a : b
 */
export const min = curry(
    /**
     * @param a
     * @param b
     * @returns 
     */
    (a: number, b: number): number => {
        return a < b ? a : b
    })

/**
 * @remarks Get the maximum number between two numbers
 * F(x, y) => (> a b) ? a : b
 */
export const max = curry(
    /**
     * @param a
     * @param b
     * @returns 
     */
    (a: number, b: number): number => {
        return a > b ? a : b
    })

/**
 * @remarks //TODO
 * @param base
 * @param n
 */
// export const pow = curry(
// (base: number, n: number): number => {
//     return isZero(n) ? 1 : base + pow(base, n - 1)
// })

/**
 * @remarks Get an Absolute/modulus a number
 * F(n) => |n|
 */
export const abs = curry(
    /**
     * @param n
     * @returns 
     */
    (n: number): number => {
        numberTypeViolationError(n)
        return isPositive(n) ? n : -(n)
    })

/**
 * @remarks 
 * F(n) => (/ n 2)
 */
export const half = curry(
    /**
     * @param n
     * @returns
     */
    (n: number): number => {
        return n / 2
    })

/**
 * @remarks An Average of two numbers
 * F(x, y) => (/ x y)
 */
export const avg = curry(
    /**
     * @param x - An input first argument number
     * @param y - An input second argument number
     * @return An average of two numbers
     */
    (x: number, y: number): number => {
        return x + y / 2
    })

/**
 * @remarks Reciprocal/Inverse a number
 * F(n) => (/ 1 n)
 */
export const reciprocal = curry(
    /**
     * @param n - An input number
     * @returns Reciprocal number
     */
    (n: number): number => {
        if (isZero(n)) {
            throw new Error('Reciprocal/Inverse of 0 is undefined')
        } else {
            return 1 / n
        }
    })

/**
 *
 * @remarks FIXME:
 *
 */
// export const combination = curry(
// (n: number, m: number): number => {
//     if (isZero(m) || (m == n)) {
//         return 1
//     } else {
//         return combination(sub1(n), m) + combination(sub1(n), sub1(m))
//     }
// })


export const getRandom = () => {
    return Math.random();
}






