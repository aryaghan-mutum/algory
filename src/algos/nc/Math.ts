/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

import { isZero, isPositive } from './MathPredicates'
const memoize = require('fast-memoize')
const curry = require('curry')

/**
 * @remarks Identity function returns back whatever is passed in
 * @param x - Any type
 * @returns Whatever is passed in 
 * @example F(x) => x
 */
export const identity = curry(memoize((<T>(x: T): T => x)))

/**
 * @remarks Square a number
 * @param n - A number
 * @returns Squared number
 * @example F(n) => (* n n)
 */
export const sqr = curry(memoize((n: number): number => n * n))

/**
 * @remarks Cube a number
 * @param n - A number
 * @returns Cubed number
 * @example F(n) => (* n n n)
 */
export const cube = curry(memoize((n: number): number => sqr(n) * n))

/**
 * @remarks Square two numbers and sum the returned values
 * @param x
 * @param y
 * @returns Sum of Squares 
 * @example F(n) => (+ (square x) (square y))
 */
export const sumOfSquares = curry((x: number, y: number): number => sqr(x) + sqr(y))

/**
 * @remarks Cube two numbers and sum the returned values
 * @param x - A number 
 * @param y - A number 
 * @returns Sum of Cubes
 * @example F(n) => (+ (cube x) (cube y))
 */
export const sumOfCubes = curry((x: number, y: number): number => cube(x) + cube(y))

/**
 * @remarks Double a number
 * @param n - A number
 * @returns A doubled number
 * @example F(n) => (* n 2) or F(n) => (+ n n)
 */
export const double = curry(memoize((n: number): number => n * 2))

/**
 * @remarks Triple a number
 * @param n - A number 
 * @returns - A number multiplied with 3
 * @example F(n) => (* n 3) or F(n) => (+ n n n)
 */
export const triple = curry(memoize((n: number): number => n * 3))

/**
 * @remarks Add 1 to a number
 * @param n - A number 
 * @returns - A number added with 1
 * @example F(n) => (+ n 1)
 */
export const add1 = curry(memoize((n: number): number => n + 1))

/**
 * @remarks Subtract a number
 * @param n - A number 
 * @returns A number subtracted by 1
 * @example F(n) => (- n 1)
 */
export const sub1 = curry(memoize((n: number): number => n - 1))

/**
 * @remarks Subtract two numbers
 * @param n - A number 
 * @returns A number subtracted by 2
 * @example F(n) => (- n 2)
 */
export const sub2 = curry(memoize((n: number): number => n - 2))

/**
 * @remarks Get the minimum number between two numbers
 * @param a - A number 
 * @param b - A number 
 * @returns A minimum number between two numbers 
 * @example F(x, y) => (< a b) ? a : b
 */
export const min = curry((a: number, b: number): number => a < b ? a : b)

/**
 * @remarks Get the maximum number between two numbers
 * @param a - A number 
 * @param b - A number 
 * @returns - A maximum number between two numbers 
 * @example F(x, y) => (> a b) ? a : b
 */
export const max = curry((a: number, b: number): number => a > b ? a : b)

/**
 * @remarks Get an Absolute/modulus a number
 * @param n - A number 
 * @returns An absolute value of a number
 * @example F(n) => |n|
 */
export const abs = curry(memoize((n: number): number => isPositive(n) ? n : -(n)))

/**
 * @remarks Half a number 
 * @param n
 * @returns a number divided by 2 
 * @example F(n) => (/ n 2)
 */
export const half = curry(memoize((n: number): number => n / 2))

/**
 * @remarks An Average of two numbers
 * @param x - An input first argument number
 * @param y - An input second argument number
 * @returns An average of two numbers
 * @example F(x, y) => (/ x y)
 */
export const avg = curry((x: number, y: number): number => x + y / 2)

/**
 * @remarks Reciprocal/Inverse a number
 * @param n - An input number
 * @returns A Reciprocal number
 * @example F(n) => (/ 1 n)
 */
export const reciprocal = curry(memoize(
    (n: number): number => {
        if (isZero(n)) {
            throw new Error('Reciprocal/Inverse of 0 is undefined')
        } else {
            return 1 / n
        }
    }))

/**
 * @remarks Modulus / Remainder  
 * @param a - A number 
 * @param b - A number  
 * @returns A remainder after integer division 
 * @example F(a b) = (% x y)
 */
export const mod = curry((a: number, b: number): number => a % b)

/**
 * @remarks Greatest Common Divisor (GCD)
 * @param a - A number 
 * @param b - remainder 
 * @returns A Greatest Common Divisor of two integers
 * @example F(a b) = F(b r), where r is remainder
 */
export const gcd = curry((a: number, b: number): number => isZero(b) ? a : gcd(b, mod(a, b)))

/**
 * @remarks Least Common Multiple (LCM), Lowest common multiple, or Smallest Common Multiple of two integers
 * @param a - A number 
 * @param b - remainder 
 * @returns A least common multiple of two integers
 * @example F(a b) = F(b r), where r is remainder
 */
export const lcm = curry((a: number, b: number): number => ((isZero(a)) || (isZero(b))) ? 0 : (a * b) / gcd(a, b))

export const sqrt = curry(
    (n: number) => {

        const sqrtIter = (guess: number): number => {
            if (isGoodEnough(guess))
                return guess
            else
                return sqrtIter(improve(guess))
        }

        const isGoodEnough = (guess: number): boolean => {
            return Math.abs(guess * guess - n) < 0.001
        }

        const improve = (guess: number): number => {
            return (guess + (n / guess)) / 2
        }

        sqrtIter(1.0)
    })

// /**
//  * @remarks Euclidean algorithms to find GCD for large numbers
//  * @param a - A number 
//  * @param b - remainder 
//  * @returns A Euclidean Greatest Common Divisor of two integers
//  * @example F(min max) = F(max (max - min))
//  */
// export const euclideanGcd = curry(
//     (a: number, b: number): number => {

//         const euclideanGcdIter = (minimum: number, maximum: number): number => {
//             if (maximum < minimum) {
//                 return maximum
//             } else {
//                 return euclideanGcdIter(maximum, (maximum - minimum))
//             }
//         }
//         return euclideanGcdIter(min(a, b), max(a, b))
//     })

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

/**
 * @remarks //TODO
 * @param base
 * @param n
 */
// export const pow = curry(
// (base: number, n: number): number => {
//     return isZero(n) ? 1 : base + pow(base, n - 1)
// })





