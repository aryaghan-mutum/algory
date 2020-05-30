/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

import {swap} from './Swap'

const curry = require('curry')

/**
 * Bubble Sort
 *
 */
export const bubbleSortImper = curry(
    (arr: Array<number>): Array<number> | null => {

        // if the array is null or undefined then return null
        if (arr === undefined || arr === null) return null

        // One by one move boundary of unsorted subarray
        for (let i = 1; i <= arr.length; i++) {

            for (let j = 0; j < arr.length - 1; j++) {

                // if the elem in first index is greater than elem in second index the swap
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1)
                }
            }
        }

        return arr
    })