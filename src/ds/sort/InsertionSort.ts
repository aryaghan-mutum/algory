import { sub1, add1 } from "../../algos/NumericalComputation"

const curry = require('curry')

/**

 * TODO:
 * @param arr - An unsorted array of numbers
 * @returns Sorted array of numbers 

    /*
     * @remarks Insertion Sort
     *
     */
export const InsertionSortImper = curry(
    /**
     * @param arr - An unsorted array of numbers
     * @returns Sorted array of numbers 
     */
    (arr: Array<number>): Array<number> | null => {

        // if the array is null or undefined then return null
        if (arr === undefined || arr === null) return null

        for (let i: number = 1; i < arr.length; i++) {
            let key: number = arr[i]
            let j: number = sub1(i)
            while (j >= 0 && arr[j] > key) {
                arr[add1(j)] = arr[j]
                j--
            }
            arr[j + 1] = key
        }

        return arr
    })
