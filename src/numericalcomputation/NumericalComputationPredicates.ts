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

import numer from '../numericalcomputation/NumericalComputation'
import {AbstractNumericalComputation} from './AbstractNumericalComputation';

class NumericalComputationPredicates extends AbstractNumericalComputation {

    constructor() {
        super()
    }

    /**
     *
     * @param n
     */
    public isZero = (n: number): boolean => {
        this.numberTypeViolationError(n)
        return (n == 0) ? true : false
    }

    /**
     *
     * @param n
     */
    public isGreaterThanZero = (n: number): boolean => {
        this.numberTypeViolationError(n)
        return (n > 0) ? true : false
    }

    /**
     *
     * @param n
     */
    public isGreaterThanAndEqualToZero = (n: number): boolean => {
        this.numberTypeViolationError(n)
        return (n >= 0) ? true : false
    }

    /**
     *
     * @param n
     */
    public isLesserThanZero = (n: number): boolean => {
        this.numberTypeViolationError(n)
        return (n < 0) ? true : false
    }

    /**
     *
     * @param n
     */
    public isLesserThanAndEqualToZero = (n: number): boolean => {
        this.numberTypeViolationError(n)
        return (n <= 0) ? true : false
    }

    /**
     *
     * @param x
     * @param y
     */
    public lesserThan = (x: number, y: number): boolean => {
        return x < y
    }

    /**
     *
     * @param x
     * @param y
     * @param z
     */
    public isSumLesser = (x: number, y: number, z: number): boolean => (x + y) < z

    /**
     *
     * @param x
     * @param y
     * @param z
     */
    public isSumGreater = (x: number, y: number, z: number): boolean => (x + y) > z

    /**
     *
     * @param n
     */
    public isNegative = (n: number): boolean => {
        this.numberTypeViolationError(n)
        return this.isLesserThanZero(n)
    }

    /**
     *
     * @param n
     */
    public isPositive = (n: number): boolean => {
        this.numberTypeViolationError(n)
        return this.isGreaterThanAndEqualToZero(n)
    }

    /**
     *
     * @param n
     */
    public isEven = (n: number): boolean => {
        this.numberTypeViolationError(n)
        return numer.abs(n) % 2 == 0 ? true : false
    }

    /**
     *
     * @param n
     */
    public isOdd = (n: number): boolean => {
        this.numberTypeViolationError(n)
        return numer.abs(n) % 2 !== 0 ? true : false
    }


}

export default new NumericalComputationPredicates()
