import {isPrime, isPrimeOptimized} from '../../../../src/algos/primes/PrimePredicates'

describe('Prime Predicates', () => {

    it('test isPrime', () => {
        expect(isPrime(-1)).toBeFalsy
        expect(isPrime(0)).toBeFalsy
        expect(isPrime(1)).toBeFalsy
        expect(isPrime(2)).toBeTruthy
        expect(isPrime(3)).toBeTruthy
        expect(isPrime(5)).toBeTruthy
        expect(isPrime(79)).toBeTruthy
        expect(isPrime(420)).toBeFalsy
        expect(isPrime(1337)).toBeFalsy
        // FIXME: expect(prime.isPrime(314159)).to.be.true // the val is too long
    })

    it('test isPrimeOptimized', () => {
        expect(isPrimeOptimized(-1)).toBeFalsy
        expect(isPrimeOptimized(0)).toBeFalsy
        expect(isPrimeOptimized(1)).toBeFalsy
        expect(isPrimeOptimized(2)).toBeTruthy
        expect(isPrimeOptimized(3)).toBeTruthy
        expect(isPrimeOptimized(5)).toBeTruthy
        expect(isPrimeOptimized(79)).toBeTruthy
        expect(isPrimeOptimized(420)).toBeFalsy
        expect(isPrimeOptimized(1337)).toBeFalsy
        // FIXME: expect(prime.isPrime(314159)).to.be.true // the val is too long
    })
})

