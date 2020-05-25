const geometry2d = require('../geometry/2DGeometry')
const numerPred = require('../numericalcomputation/NumericalComputationPredicates')
/**
 *
 * @param x
 * @param y
 */
export const sumOfSquares = (x: number, y: number): number => geometry2d.square(x) + geometry2d.square(y)

/**
 *
 * @param x
 * @param y
 */
export const sumOfCubes = (x: number, y: number): number => geometry2d.cube(x) + geometry2d.cube(y)

/**
 *
 * @param n
 */
export const double = (n: number): number => n * 2

/**
 *
 * @param n
 */
export const triple = (n: number): number => n * 3

/**
 *
 * @param n
 */
export const add1 = (n: number): number => n + 1

/**
 *
 * @param n
 */
export const sub1 = (n: number): number => n - 1


/**
 *
 * @param n
 */
export const inc1 = (n: number): number => add1(n)

/**
 *
 * @param n
 */
export const dec1 = (n: number): number => sub1(n)

/**
 *
 * @param a
 * @param b
 */
export const min = (a: number, b: number): number => a < b ? a : b

/**
 *
 * @param a
 * @param b
 */
export const max = (a: number, b: number): number => a > b ? a : b

/**
 *
 * @param base
 * @param n
 */
export const pow = (base: number, n: number): number => numerPred.isZero(n) ? 1 : base + pow(base, n - 1)

/**
 *
 * @param n
 */
export const reciprocal = (n: number): number | string => numerPred.isZero(n) ? 'reciprocal of 0 is undefined' : 1 / n

/**
 *
 * @param n
 */
export const abs2 = (n: number): number => numerPred.isGreaterThanAndEqualToZero(n) ? n : -(n)

/**
 *
 * @param n
 * @param m
 */
export const combination = (n: number, m: number): number => {
    if (numerPred.isZero(m) || (m == n)) {
        return 1
    } else {
        return combination(sub1(n), m) + combination(sub1(n), sub1(m))
    }
}




