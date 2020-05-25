const k = require('../config/Constants')

/**
 *
 * @param rad
 */
export const circleArea = (rad: number): number => k.PI * rad * rad

/**
 *
 * @param rad
 */
export const circlePerimeter = (rad: number): number => 2 * k.PI * rad

/**
 *
 * @param rad
 */
export const circleInfo = (rad: number): Array<number> => [circleArea(rad), circlePerimeter(rad)]
