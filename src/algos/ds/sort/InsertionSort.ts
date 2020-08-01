/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 * 
 * Reference: https://en.wikipedia.org/wiki/Insertion_sort
 * 
 * Worst complexity: n^2
 * Average complexity: n^2
 * Best complexity: n
 * Space complexity: 1
 */

import { sub1, add1 } from '../../nc/Math'
import { range } from 'ramda'
const curry = require('curry')

/**
 * @remarks - Insertion Sort
 * @param arr - An unsorted array of numbers
 * @returns Sorted array of numbers 
 */
export const insertionSortImper = curry(

    (arr: Array<number>): Array<number> | null => {

        // if the array is null or undefined then return null
        if (arr === undefined || arr === null) return null

        range(1, arr.length).forEach(i => {
            let key: number = arr[i]
            let j: number = sub1(i)

            while (j >= 0 && arr[j] > key) {
                arr[add1(j)] = arr[j]
                j--
            }
            arr[add1(j)] = key
        })

        return arr
    })
