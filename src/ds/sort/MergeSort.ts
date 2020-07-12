
/**
 * 
 * @param arr - An unsorted array of numbers
 * @returns Sorted array of numbers 
 */
export const mergeSort = (arr: Array<number>): Array<number> => {

    // if the array is null or undefined then return null
    //if (arr === undefined || arr === null) return null

    // if the elements in array are less than and equal to 1 then return the existing array
    if (arr.length <= 1) return arr

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return []
   // return merge(mergeSort(left), mergeSort(right));
}

/**
 * @remarks 
 * @param leftArr 
 * @param rightArr 
 */
// const merge = (leftArr: Array<number>, rightArr: Array<number>) => {

//     let arr: Array<number> = [];

//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] < rightArr[0]) {
//             arr.push(leftArr.shift());
//         } else {
//             arr.push(rightArr.shift());
//         }
//     }
//     return arr.concat(leftArr.slice().concat(rightArr.slice()))

//}


