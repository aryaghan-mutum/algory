
/**
 * Get circle area
 * @param circle radius
 */
export const circleArea = (rad: number): number => Math.PI * rad * rad

/**
 * Get circle perimeter
 * @param circle radius
 */
export const circlePerimeter = (rad: number): number => 2 * Math.PI * rad

/**
 * Get circle area and permiter in an array
 * @param circle radius
 */
export const circleInfo = (rad: number): Array<number> => [circleArea(rad), circlePerimeter(rad)]
