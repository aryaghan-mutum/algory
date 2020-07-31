/**
 * Algory
 *
 * Copyright (c) 2020. Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

 /**
  * 
  * @param {*} fn 
  */
export const memoize = (fn) => {

    let memo = {}
    let slice = Array.prototype.slice

    return function () {
        let args = slice.call(arguments)

        if (args in memo) {
            return memo[args]
        } else {
            return (memo[args] = fn.apply(this, args))
        }
    }

}