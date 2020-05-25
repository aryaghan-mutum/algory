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

class Geometry {

    public constructor() {
    }

    /**
     *
     * @param n
     */
    public square = (n: number): number => n * n

    /**
     *
     * @param lst
     */
    public squareList = (lst: Array<number>): Array<number> => lst.map(n => this.square(n))

    /**
     *
     * @param n
     */
    public cube = (n: number): number => this.square(n) * n

    /**
     *
     * @param lst
     */
    public cubeList = (lst: Array<number>): Array<number> => lst.map(n => this.cube(n))

}

export default new Geometry()

