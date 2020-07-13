
/**
 * 
 * @param arr - An unsorted array of numbers
 * @returns Sorted array of numbers 
 */
export const mergeSort = (arr: Array<number>): Array<number>=> {

    // if the elements in array are less than and equal to 1 then return the existing array
    if (arr.length <= 1) return arr

    // divide the array into half
    const mid = Math.floor(arr.length / 2)

    // the left half of an array
    const left = arr.slice(0, mid)

    // the right half of an array
    const right = arr.slice(mid, arr.length)

    // call merge recursively for left half and right half of an array
    return merge(mergeSort(left), mergeSort(right))
}

/**
 * @remarks 
 * @param leftArr 
 * @param rightArr 
 */
const merge = (leftArr: Array<number>, rightArr: Array<number>): Array<number> => {

    const resultArr: Array<number> = []
    let lIndex = 0;
    let rIndex = 0;

    while (lIndex + rIndex < leftArr.length + rightArr.length) {
        const lItem = leftArr[lIndex]
        const rItem = rightArr[rIndex]
        if (lItem == null) {
            resultArr.push(rItem)
            rIndex++
        }
        else if (rItem == null) {
            resultArr.push(lItem)
            lIndex++
        }
        else if (lItem < rItem) {
            resultArr.push(lItem)
            lIndex++
        }
        else {
            resultArr.push(rItem)
            rIndex++
        }
    }
    return resultArr
}


