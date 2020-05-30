const curry = require('curry')

/**
 *
 *
 */
export const swap =
    /**
     *
     * @param arr
     * @param first
     * @param second
     */
    (arr: Array<number>, first: number, second: number): void => {

        if (arr === undefined || arr.length == 0) {
            return
        }

        let temp = arr[first]
        arr[first] = arr[second]
        arr[second] = temp
    }