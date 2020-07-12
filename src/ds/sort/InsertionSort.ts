
const curry = require('curry')

/**
 * @remarks Insertion Sort
 *
 */
export const insertionSortImper = curry(

    /**
     * @param arr - An unsorted array of numbers
     * @returns Sorted array of numbers 
     */
    (arr: Array<number>): Array<number> | null => {

        // if the array is null or undefined then return null
        if (arr === undefined || arr === null) return null
        return arr
    })
