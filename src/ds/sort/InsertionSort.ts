/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import { sub1, add1 } from "../../algos/NumericalComputation"

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

        for (let i: number = 1; i < arr.length; i++) {
            let key: number = arr[i]
            let j: number = sub1(i)
            while (j >= 0 && arr[j] > key) {
                arr[add1(j)] = arr[j]
                j--
            }
            arr[add1(j)] = key
        }

        return arr
    })
