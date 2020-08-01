import { expect } from "chai"
import {isPrime, isPrimeOptimized} from '../../../../src/algos/primes/PrimePredicates'

describe('Prime Predicates', () => {

    it('test isPrime', () => {
        expect(isPrime(-1)).to.be.false
        expect(isPrime(0)).to.be.false
        expect(isPrime(1)).to.be.false
        expect(isPrime(2)).to.be.true
        expect(isPrime(3)).to.be.true
        expect(isPrime(5)).to.be.true
        expect(isPrime(79)).to.be.true
        expect(isPrime(420)).to.be.false
        expect(isPrime(1337)).to.be.false
        // FIXME: expect(prime.isPrime(314159)).to.be.true // the val is too long
    })

    it('test isPrimeOptimized', () => {
        expect(isPrimeOptimized(-1)).to.be.false
        expect(isPrimeOptimized(0)).to.be.false
        expect(isPrimeOptimized(1)).to.be.false
        expect(isPrimeOptimized(2)).to.be.true
        expect(isPrimeOptimized(3)).to.be.true
        expect(isPrimeOptimized(5)).to.be.true
        expect(isPrimeOptimized(79)).to.be.true
        expect(isPrimeOptimized(420)).to.be.false
        expect(isPrimeOptimized(1337)).to.be.false
        // FIXME: expect(prime.isPrime(314159)).to.be.true // the val is too long
    })
})

