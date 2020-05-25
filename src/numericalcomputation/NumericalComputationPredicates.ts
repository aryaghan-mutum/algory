const geometry2d = require('../geometry/2DGeometry')

/**
 *
 * @param n
 */
export const isZero = (n: number): boolean => (n == 0) ? true : false

/**
 *
 * @param n
 */
export const isGreaterThanZero = (n: number): boolean => (n > 0) ? true : false

/**
 *
 * @param n
 */
export const isGreaterThanAndEqualToZero = (n: number): boolean => (n >= 0) ? true : false

/**
 *
 * @param n
 */
export const isLesserThanZero = (n: number): boolean => (n < 0) ? true : false

/**
 *
 * @param n
 */
export const isLesserThanAndEqualToZero = (n: number): boolean => (n <= 0) ? true : false

/**
 *
 * @param x
 * @param y
 */
export const lesserThan = (x: number, y: number): boolean => x < y

/**
 *
 * @param x
 * @param y
 * @param z
 */
export const isSumLesser = (x: number, y: number, z: number): boolean => (x + y) < z

/**
 *
 * @param x
 * @param y
 * @param z
 */
export const isSumGreater = (x: number, y: number, z: number): boolean => (x + y) > z

/**
 *
 * @param n
 */
export const isNegative = (n: number): boolean => isLesserThanZero(n)

/**
 *
 * @param n
 */
export const isPositive = (n: number): boolean => isGreaterThanAndEqualToZero(n)



