import { sub1, add1 } from "../../algos/NumericalComputation"

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

        for(let i = 1; i < arr.length; i++) {
            let key = arr[i]
            let j = sub1(i)
            while(j >=0 && arr[j] > key) {
                arr[add1(j)] = arr[j]
                j--
            }
            arr[j + 1] = key
        }
        return arr
    })
