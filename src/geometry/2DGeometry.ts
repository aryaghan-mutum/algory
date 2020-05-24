/**
 *
 * @param rad
 */
export const circleArea = (rad: number): number => Math.PI * rad * rad

/**
 *
 * @param rad
 */
export const circlePerimeter = (rad: number): number => 2 * Math.PI * rad

/**
 *
 * @param rad
 */
export const circleInfo = (rad: number): Array<number> => [circleArea(rad), circlePerimeter(rad)]

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
