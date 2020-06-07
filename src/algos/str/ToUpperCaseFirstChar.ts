/**
 * Algory
 *
 * Copyright (c) 2020 Anurag Muthyam
 * https://github.com/aryaghan-mutum
 */

const curry = require('curry')

/**
 * @remarks - Capitalize the first letter of the String
 * @param str - An input string
 * @return - A string with the first character capitalized
 */
export const toUpperCaseFirstChar = curry(
    (str: string): string => {
        if (typeof (str) !== 'string') return ''
        return str.charAt(0).toUpperCase() + str.slice(1)
    });