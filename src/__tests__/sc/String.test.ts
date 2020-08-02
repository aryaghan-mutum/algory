/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcdoer@gmail.com>
 * https://github.com/aryaghan-mutum
 */

import { toUpperCaseFirstChar} from '../../algos/sc/Strings'

describe('Strings', () => {

    it('test toUpperCaseFirstChar', async () => {
        expect(toUpperCaseFirstChar('algory')).toEqual('Algory')
        expect(toUpperCaseFirstChar('Algory')).toEqual('Algory')
        expect(toUpperCaseFirstChar(123456)).toEqual('')
    })
})

