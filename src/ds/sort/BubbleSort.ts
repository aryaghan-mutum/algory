import {swap} from './Swap'
import {isZero} from '../../algos/NumericalComputationPredicates'

const curry = require('curry')

/**
 *
 */
export const bubbleSortImper = curry(
    /**
     *
     * @param arr
     */
    (arr: Array<number>): Array<number> | null => {

        debugger
        if (arr === undefined || arr === null) return null

        for (let i = 1; i <= arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1)
                }
            }
        }

        return arr
    })