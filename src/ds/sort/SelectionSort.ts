/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {swap} from './Swap'

const curry = require('curry')

/**
 * Selection Sort
 *
 */
export const selectionSortImper = curry(
    (arr: Array<number>): Array<number> | null => {

        // if the array is null or undefined then return null
        if (arr === undefined || arr === null) return null

        // One by one move boundary of unsorted subarray
        for (let i = 0; i < arr.length; i++) {

            // Find the minimum element in unsorted array
            let min = i

            for (let j = i + 1; j < arr.length; j++) {

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