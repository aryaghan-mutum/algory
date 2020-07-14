/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

import { add1 } from "../NumericalComputation";

const curry = require('curry')

/**
 * @remarks Mean
 */
export const addToMean = curry(
    /**
     * @param mean Current mean
     * @param n - Number of items in the list
     * @param newValue - The added value
     * 
     * @returns {number} the new mean
     * @example
     */
    (mean: number, n: number, newValue: number): number => {
        return mean + (newValue - mean) / (add1(n));
    })


