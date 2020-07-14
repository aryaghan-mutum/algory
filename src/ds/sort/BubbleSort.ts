/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import { swap } from './Swap'
import { add1 } from '../../algos/NumericalComputation'
import { range } from 'ramda'
const curry = require('curry')

/**
 * @remarks - Bubble Sort
 * @param arr - An unsorted array of numbers
 * @returns Sorted array of numbers 
 */
export const bubbleSortImper = curry(

    (arr: Array<number>): Array<number> | null => {

        // if the array is null or undefined then return null
        if (arr === undefined || arr === null) return null

        // One by one move boundary of unsorted subarray
        range(1, arr.length).forEach(i => {
            range(0, arr.length - 1).forEach(j => {
                // if the elem in first index is greater than elem in second index the swap
                if (arr[j] > arr[add1(j)]) {
                    swap(arr, j, add1(j))
                }
            })
        })

        return arr
    })