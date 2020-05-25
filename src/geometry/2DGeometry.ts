const k = require('../config/Constants')

/**
 *
 * @param n
 */
export const square = (n: number): number => n * n

/**
 *
 * @param lst
 */
export const squareList = (lst: Array<number>): Array<number> => lst.map(n => square(n))

/**
 *
 * @param n
 */
export const cube = (n: number): number => square(n) * n

/**
 *
 * @param lst
 */
export const cubeList = (lst: Array<number>): Array<number> => lst.map(n => cube(n))
