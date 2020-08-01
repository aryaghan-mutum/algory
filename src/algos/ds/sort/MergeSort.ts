/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 * 
 * Reference: https://en.wikipedia.org/wiki/Merge_sort
 * Worst complexity: n*log(n)
 * Average complexity: n*log(n)
 * Best complexity: n*log(n)
 * Space complexity: n
 */

const curry = require('curry')
const memoize = require('fast-memoize')

/**
 * @remarks - Merge Sort
 * @param arr - An unsorted array of numbers
 * @returns Sorted array of numbers 
 */
export const mergeSort = curry(memoize(

    (arr: Array<number>): Array<number> => {

        const length: number = arr.length

        // if the elements in array are less than and equal to 1 then return the existing array
        if (length <= 1) return arr

        // divide the array into half
        const mid: number = Math.floor(length / 2)

        // the left half, and the right half of an array
        const leftArray: Array<number> = arr.slice(0, mid)
        const rightArray: Array<number> = arr.slice(mid, length)

        // call merge recursively for left half and right half of an array
        return merge(mergeSort(leftArray), mergeSort(rightArray))
    }))

/**
 * @remarks 
 * @param leftHalfList 
 * @param rightHalfList 
 */
const merge = (leftHalfList: Array<number>, rightHalfList: Array<number>): Array<number> => {

    const sortedList: Array<number> = []
    let lIndex: number = 0;
    let rIndex: number = 0;

    while (lIndex + rIndex < leftHalfList.length + rightHalfList.length) {

        const lItem: number = leftHalfList[lIndex]
        const rItem: number = rightHalfList[rIndex]

        if (lItem == null) {
            sortedList.push(rItem)
            rIndex++
        }
        else if (rItem == null) {
            sortedList.push(lItem)
            lIndex++
        }
        else if (lItem < rItem) {
            sortedList.push(lItem)
            lIndex++
        }
        else {
            sortedList.push(rItem)
            rIndex++
        }
    }
    return sortedList
}


