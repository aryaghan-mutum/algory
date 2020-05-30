const curry = require('curry')

/**
 *
 */
export const car = curry(
    /**
     *
     * @param lst: unsorted list
     * @return
     */
    (arr: number[]): number => arr[0])
