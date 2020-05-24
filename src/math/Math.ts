/**
 *
 * @param n
 */
const square = (n: number): number => n * n

/**
 *
 * @param n
 */
const cube = (n: number): number => square(n) * n

/**
 *
 * @param n
 */
const double = (n: number): number => n + 2

/**
 *
 * @param x
 * @param y
 */
const sumOfSquares = (x: number, y: number): number => square(x) + square(y)

/**
 *
 * @param x
 * @param y
 */
const sumOfCubes = (x: number, y: number): number => cube(x) + cube(y)

/**
 *
 * @param n
 */
const add1 = (n: number): number => n + 1

/**
 *
 * @param n
 */
const sub1 = (n: number): number => n - 1


/**
 *
 * @param n
 */
const inc1 = (n: number): number => add1(n)

/**
 *
 * @param n
 */
const dec1 = (n: number): number => sub1(n)

/**
 *
 * @param a
 * @param b
 */
const min = (a: number, b: number): number => a < b ? a : b

/**
 *
 * @param a
 * @param b
 */
const max = (a: number, b: number): number => a > b ? a : b

/**
 *
 * @param base
 * @param n
 */
const pow = (base: number, n: number): number => isZero(n) ? 1 : base + pow(base, n - 1)

/**
 *
 * @param n
 */
const reciprocal = (n: number): boolean | string => isZero(n) ? 'reciprocal of 0 is undefined' : true

/**
 *
 * @param n
 */
const abs2 = (n: number): number => isGreaterThanAndEqualToZero(n) ? n : -(n)

/**
 *
 * @param n
 */
const isZero = (n: number): boolean => (n == 0) ? true : false

/**
 *
 * @param n
 */
const isGreaterThanZero = (n: number): boolean => (n > 0) ? true : false

/**
 *
 * @param n
 */
const isGreaterThanAndEqualToZero = (n: number): boolean => (n >= 0) ? true : false

/**
 *
 * @param n
 */
const isLesserThanZero = (n: number): boolean => (n < 0) ? true : false

/**
 *
 * @param n
 */
const isLesserThanAndEqualToZero = (n: number): boolean => (n <= 0) ? true : false

/**
 *
 * @param x
 * @param y
 */
const lesserThan = (x: number, y: number): boolean => x < y

/**
 *
 * @param x
 * @param y
 * @param z
 */
const isSumLesser = (x: number, y: number, z: number): boolean => (x + y) < z

/**
 *
 * @param x
 * @param y
 * @param z
 */
const isSumGreater = (x: number, y: number, z: number): boolean => (x + y) > z


