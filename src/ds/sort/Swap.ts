const curry = require('curry')

/**
 * @remarks Swap
 * @param arr 
 * @param first 
 * @param second 
 */
export const swap =
    (arr: Array<number>, first: number, second: number): void => {

        if (arr === undefined || arr.length == 0) {
            return
        }

        let temp: number = arr[first]
        arr[first] = arr[second]
        arr[second] = temp
    }