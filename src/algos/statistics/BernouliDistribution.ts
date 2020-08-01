/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */

import { add1 } from "../Math";

const curry = require('curry')

/**
 * @remarks Bernoulli Distribution
 */
export const bernoulliDistribution = curry(
    /**
     * @param n - 
     * @returns
     * @example
     */
    (p: number): Array<number> => {
        if (p < 0 || p > 1) {
            throw new Error( "bernoulliDistribution requires probability to be between 0 and 1 inclusive")
        }
        return [1 - p, p];

    })



