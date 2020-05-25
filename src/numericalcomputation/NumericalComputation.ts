/**
 * Algory
 *
 * Copyright (c) Anuragn Muthyam
 * https://github.com/aryaghan-mutum
 *
 * (MIT License)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
 */

import numerPred from '../numericalcomputation/NumericalComputationPredicates'
import geometry from '../geometry/Geometry'

class NumericalComputation {

    public constructor() {
    }

    /**
     *
     * @param x
     * @param y
     */
    public sumOfSquares = (x: number, y: number): number => geometry.square(x) + geometry.square(y)

    /**
     *
     * @param x
     * @param y
     */
    public sumOfCubes = (x: number, y: number): number => geometry.cube(x) + geometry.cube(y)

    /**
     *
     * @param n
     */
    public double = (n: number): number => n * 2

    /**
     *
     * @param n
     */
    public triple = (n: number): number => n * 3

    /**
     *
     * @param n
     */
    public add1 = (n: number): number => n + 1

    /**
     *
     * @param n
     */
    public sub1 = (n: number): number => n - 1


    /**
     *
     * @param n
     */
    public inc1 = (n: number): number => this.add1(n)

    /**
     *
     * @param n
     */
    public dec1 = (n: number): number => this.sub1(n)

    /**
     *
     * @param a
     * @param b
     */
    public min = (a: number, b: number): number => a < b ? a : b

    /**
     *
     * @param a
     * @param b
     */
    public max = (a: number, b: number): number => a > b ? a : b

    /**
     *
     * @param base
     * @param n
     */
    public pow = (base: number, n: number): number => numerPred.isZero(n) ? 1 : base + this.pow(base, n - 1)

    /**
     *
     * @param n
     */
    public reciprocal = (n: number): number | string => numerPred.isZero(n) ? 'reciprocal of 0 is undefined' : 1 / n

    /**
     *
     * @param n
     */
    public abs = (n: number): number => numerPred.isGreaterThanAndEqualToZero(n) ? n : -(n)

    /**
     *
     * @param n
     * @param m
     */
    public combination = (n: number, m: number): number => {
        if (numerPred.isZero(m) || (m == n)) {
            return 1
        } else {
            return this.combination(this.sub1(n), m) + this.combination(this.sub1(n), this.sub1(m))
        }
    }

}

export default new NumericalComputation()





