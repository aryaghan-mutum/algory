const k = require('../config/Constants')

/**
 *
 * @param rad
 */
export const trapezoidArea = (baseX: number, baseY: number, height: number): number => ((baseX + baseY) * height) / 2

/**
 *
 * @param baseX
 * @param baseY
 * @param sideX
 * @param sideY
 */
export const trapezoidPerimeter = (baseX: number, baseY: number, sideX: number, sideY: number): number => baseX + baseY + sideX + sideY

