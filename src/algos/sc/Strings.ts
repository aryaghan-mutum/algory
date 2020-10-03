/**
 * Algory
 *
 * Copyright (c) 2020 Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 */

const curry = require('curry')
const memoize = require('fast-memoize')

/**
 * @remarks Capitalize the first letter of the String
 */
export const toUpperCaseFirstChar = curry(memoize(
    /**
     * @param str - An input string
     * @returns A string with the first character capitalized
     */
    (str: string): string => {
        if (typeof (str) !== 'string') return ''
        return str.charAt(0).toUpperCase() + str.slice(1)
    }))

export const addCharStartSndEndOfStr = curry(memoize(
    (str: string, firstChar: string, secondChar: string) => {
        return `${firstChar}${str}${secondChar}`
    }))

export const addCurlyBracesStartAndOfStr = curry(memoize(
    (str: string) => {
        return addCharStartSndEndOfStr(str, "{", "}")
    }))