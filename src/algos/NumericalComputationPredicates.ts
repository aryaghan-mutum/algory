/**
 * Algory
 *
 * Copyright (c) Anuragn Muthyam
 * https://github.com/aryaghan-mutum
 *
 */

const numer = require('./NumericalComputation')
const curry = require('curry')
const err = require('../TypeViolation')

/**
 * Return true if the "n" is 0, false otherwise
 * F?(n) => (= n 0) ? true : false
 */
export const isZero = curry(
    /**
     * @param n
     */
    (n: number): boolean => {
        err.numberTypeViolationError(n)
        return (n === 0) ? true : false
    })

/**
 * Return true if the "n" is 1, false otherwise
 * F?(n) => (= n 1) ? true : false
 */
export const isOne = curry(
    /**
     * @param n
     */
    (n: number): boolean => {
        err.numberTypeViolationError(n)
        return (n === 1) ? true : false
    })

/**
 * Return true if the "n" is negative, false otherwise
 * F?(n) => (< n 0) ? true : false
 */
export const isNegative = curry(
    /**
     * @param n
     */
    (n: number): boolean => {
        err.numberTypeViolationError(n)
        return (n < 0) ? true : false
    })

/**
 * Return true if the "n" is positive, false otherwise
 * F?(n) => (>= n 0) ? true : false
 */
export const isPositive = curry(
    /**
     * @param n
     */
    (n: number): boolean => {
        err.numberTypeViolationError(n)
        return (n >= 0) ? true : false
    })

/**
 * Return true if the "n" is lesser Than and equal to zero, false otherwise
 * F?(n) => (<= n 0) ? true : false
 */
export const isLesserThanAndEqualToZero = curry(
    /**
     * @param n
     */
    (n: number): boolean => {
        err.numberTypeViolationError(n)
        return (n <= 0) ? true : false
    })

/**
 * Return true if the "x" is lesser than "y", false otherwise
 * lesserThan() is analogous to the operator "<"
 * F?(n) => (< x y)
 */
export const lesserThan = curry(
    /**
     * @param x
     * @param y
     */
    (x: number, y: number): boolean => {
        return x < y
    })

/**
 * Return true if the "x" is greater than "y", false otherwise
 * greaterThan() is analogous to the operator ">"
 * F?(n) => (> x y)
 */
export const greaterThan = curry(
    /**
     * @param x
     * @param y
     */
    (x: number, y: number): boolean => {
        return x > y
    })

/**
 * Return true if the sum of the returned value of first two formal parameter values
 * is lesser than the third argument's value", false otherwise
 * F?(n) => (< (+ x y) z)
 */
export const isSumLesser = curry(
    /**
     * @param x
     * @param y
     * @param z
     */
    (x: number, y: number, z: number): boolean => {
        return (x + y) < z
    })

/**
 * Return true if the sum of the returned value of first two formal parameter values
 * is greater than the third argument's value", false otherwise
 * F?(n) => (> (+ x y) z)
 */
export const isSumGreater = curry(
    /**
     * @param x
     * @param y
     * @param z
     */
    (x: number, y: number, z: number): boolean => {
        return (x + y) > z
    })

/**
 * Return true if the "n" is an even number
 * F?(n) => (= (% (abs n) 2) 0) ? true : false
 */
export const isEven = curry(
    /**
     * @param n
     */
    (n: number): boolean => {
        err.numberTypeViolationError(n)
        return numer.abs(n) % 2 == 0 ? true : false
    })

/**
 * Return true if the "n" is an odd number
 * F?(n) => (!= (% (abs n) 2) 0) ? true : false
 */
export const isOdd = curry(
    /**
     * @param n
     */
    (n: number): boolean => {
        err.numberTypeViolationError(n)
        return numer.abs(n) % 2 !== 0 ? true : false
    })

