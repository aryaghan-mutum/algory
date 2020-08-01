/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam
 * https://github.com/aryaghan-mutum
 * 
 * Reference: https://en.wikipedia.org/wiki/Selection_sort
 * 
 * Worst complexity: n^2
 * Average complexity: n^2
 * Best complexity: n^2
 * Space complexity: 1
 */

import { range } from 'ramda'
import { swap } from './Swap'
import { add1 } from '../../nc/Math'

const curry = require('curry')
const memoize = require('fast-memoize')

/**
 * @remarks - Selection Sort
 * @param arr - An unsorted array of numbers
 * @returns Sorted array of numbers 
 */
export const selectionSortImper = curry(memoize(

    (arr: Array<number>): Array<number> | null => {

        // if the array is null or undefined then return null
        if (arr === undefined || arr === null) return null

        const length: number = arr.length

        // One by one move boundary of unsorted subarray
        range(0, length).forEach(i => {
            // Find the minimum element in unsorted array
            let min = i

            range(add1(i), length).forEach(j => {
                // if the elem in first index is greater than elem in second index the swap
                if (arr[min] > arr[j]) {
                    min = j
                }
            })

            if (min !== i) {
                swap(arr, i, min)
            }
        })
        return arr
    }))