/**
 *
 * @param n
 */
export const square = (n: number): number => n * n

/**
 *
 * @param n
 */
export const cube = (n: number): number => square(n) * n

/**
 *
 * @param x
 * @param y
 */
export const sumOfSquares = (x: number, y: number): number => square(x) + square(y)

/**
 *
 * @param x
 * @param y
 */
export const sumOfCubes = (x: number, y: number): number => cube(x) + cube(y)

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
export const pow = (base: number, n: number): number => isZero(n) ? 1 : base + pow(base, n - 1)

/**
 *
 * @param n
 */
export const reciprocal = (n: number): number | string => isZero(n) ? 'reciprocal of 0 is undefined' : 1 / n

/**
 *
 * @param n
 */
export const abs2 = (n: number): number => isGreaterThanAndEqualToZero(n) ? n : -(n)

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


