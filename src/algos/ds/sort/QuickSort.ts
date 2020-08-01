/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 * 
 * Reference: https://en.wikipedia.org/wiki/Quicksort
 * 
 * Worst complexity: n^2
 * Average complexity: n*log(n)
 * Best complexity: n*log(n)
 */

import { range } from 'ramda'
const curry = require('curry')

/**
 * For more info: https://en.wikipedia.org/wiki/Quicksort
 * 
 * @remarks - Quick Sort
 * @param arr - An unsorted array of numbers
 * @returns Sorted array of numbers 
 */
export const quickSort = curry(

    (arr: Array<number>): Array<number> => {

        const length: number = arr.length

        // if the elements in array are less than and equal to 1 then return the existing array
        if (length <= 1) return arr

        const pivot: number = arr[0]
        const greater: Array<number> = []
        const lesser: Array<number> = []

        range(1, length).forEach(i => {
            if (arr[i] > pivot) {
                greater.push(arr[i])
            } else {
                lesser.push(arr[i])
            }
        })

        let sortedArr: Array<number> = quickSort(lesser)
        sortedArr.push(pivot)

        return sortedArr.concat(quickSort(greater))
    })