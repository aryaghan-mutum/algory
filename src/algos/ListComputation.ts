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


/**
 * Return a boolean expression true if the list if empty, false otherwise.
 */
export const isEmpty = curry(
    /**
     * @param {Array<number>} arr - A list of numbers
     * @return {boolean} - A boolean expression true or false
     */
    (arr: number[]): boolean => {
        return (arr.length === 0) ? true : false
    }
)
