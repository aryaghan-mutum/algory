/**
 *
 * @param n
 */
import {BigNumber} from "big-integer";

export const numberTypeViolationError = (n: number): void => {
    if (typeof (n) !== "number") {
        throw new TypeError(`Invalid Type! "${n}" is a ${typeof (n)}. Expected type: number`)
    }
}

/**
 *
 * @param n
 */
export const bigIntTypeViolationError = (n: BigNumber): void => {
    if (typeof (n) !== "bigint") {
        throw new TypeError(`Invalid Type! "${n}" is a ${typeof (n)}. Expected type: number`)
    }
}

/**
 *
 * @param s
 */
export const stringTypeViolationError = (s: string): void => {
    if (typeof (s) !== "number") {
        throw new TypeError(`Invalid Type! "${s}" is not a number. Expected type: string`)
    }
}
