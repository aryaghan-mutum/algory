/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {swap} from './Swap'

const curry = require('curry')

/**
 * @remarks - Selection Sort
 * @param arr - An unsorted array of numbers
 * @returns Sorted array of numbers 
 */
export const selectionSortImper = curry(
    
    (arr: Array<number>): Array<number> | null => {
        
        // if the array is null or undefined then return null
        if (arr === undefined || arr === null) return null

        const length: number = arr.length

        // One by one move boundary of unsorted subarray
        for (let i = 0; i < length; i++) {
            // Find the minimum element in unsorted array
            let min = i

            for (let j = i + 1; j < length; j++) {
                // if the elem in first index is greater than elem in second index the swap
                if (arr[min] > arr[j]) {
                    min = j
                }
            }

            if(min !== i) {
                swap(arr, i, min)
            }
        }

        return arr
    })