/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 *
 */

const numerPred = require('.//NumericalComputationPredicates')
const err = require('../TypeViolation')
const curry = require('curry')

/**
 * Square a number
 *  F(n) => (* n n)
 */
export const square = curry(
    /**
     * @param n
     */
    (n: number): number => {
        err.numberTypeViolationError(n)
        return n * n
    })

/**
 * Cube a number
 * F(n) => (* n n n)
 */
export const cube = curry(
    /**
     * @param n
     */
    (n: number): number => {
        err.numberTypeViolationError(n)
        return square(n) * n
    })

/**
 * Square two numbers and sum the returned values
 * F(n) => (+ (square x) (square y))
 */
export const sumOfSquares = curry(
    /**
     * @param x
     * @param y
     */
    (x: number, y: number): number => {
        return square(x) + square(y)
    })

/**
 * Cube two numbers and sum the returned values
 * F(n) => (+ (cube x) (cube y))
 */
export const sumOfCubes = curry(
    /**
     * @param x
     * @param y
     */
    (x: number, y: number): number => {
        return cube(x) + cube(y)
    })

/**
 * Double a number.
 * F(n) => (* n 2) or F(n) => (+ n n)
 */
export const double = curry(
    /**
     * @param n
     */
    (n: number): number => {
        err.numberTypeViolationError(n)
        return n * 2
    })

/**
 * Triple a number.
 * F(n) => (* n 3) or F(n) => (+ n n n)
 */
export const triple = curry(
    /**
     * @param n
     */
    (n: number): number => {
        err.numberTypeViolationError(n)
        return n * 3
    })

/**
 * Add a number
 * F(n) => (+ n 1)
 */
export const add1 = curry(
    /**
     * @param n
     */
    (n: number): number => {
        err.numberTypeViolationError(n)
        return n + 1
    })

/**
 * Subtract a number
 * F(n) => (- n 1)
 */
export const sub1 = curry(
    /**
     * @param n
     */
    (n: number): number => {
        err.numberTypeViolationError(n)
        return n - 1
    })

/**
 * Subtract two numbers
 * F(n) => (- n 2)
 */
export const sub2 = curry(
    /**
     * @param n
     */
    (n: number): number => {
        err.numberTypeViolationError(n)
        return n - 2
    })

/**
 * Get the minimum number between two numbers
 * F(x, y) => (< a b) ? a : b
 */
export const min = curry(
    /**
     * @param a
     * @param b
     */
    (a: number, b: number): number => {
        return a < b ? a : b
    })

/**
 * Get the maximum number between two numbers
 * F(x, y) => (> a b) ? a : b
 */
export const max = curry(
    /**
     * @param a
     * @param b
     */
    (a: number, b: number): number => {
        return a > b ? a : b
    })

/**
 * //TODO
 * @param base
 * @param n
 */
// export const pow = curry(
// (base: number, n: number): number => {
//     return numerPred.isZero(n) ? 1 : base + pow(base, n - 1)
// })

/**
 * Reciprocal/Inverse a number
 * F(n) => (/ 1 n)
 */
export const reciprocal = curry(
    /**
     * @param n
     */
    (n: number): number | string => {
        err.numberTypeViolationError(n)
        return numerPred.isZero(n) ? 'reciprocal of 0 is undefined' : 1 / n
    })

/**
 * Get an Absolute/modulus a number
 * F(n) => |n|
 */
export const abs = curry(
    /**
     * @param n
     */
    (n: number): number => {
        err.numberTypeViolationError(n)
        return numerPred.isPositive(n) ? n : -(n)
    })

/**
 * //TODO
 * @param n
 * @param m
 */
// export const combination = curry(
// (n: number, m: number): number => {
//     if (numerPred.isZero(m) || (m == n)) {
//         return 1
//     } else {
//         return combination(sub1(n), m) + combination(sub1(n), sub1(m))
//     }
// })







