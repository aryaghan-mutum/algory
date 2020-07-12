import { expect } from "chai"

const prime = require('../../../../src/algos/primes/PrimePredicates')

describe('Prime Predicates', () => {

    specify('test isPrime', () => {
        expect(prime.isPrime(-1)).to.be.false
        expect(prime.isPrime(0)).to.be.false
        expect(prime.isPrime(1)).to.be.false
        expect(prime.isPrime(2)).to.be.true
        expect(prime.isPrime(3)).to.be.true
        expect(prime.isPrime(5)).to.be.true
        expect(prime.isPrime(79)).to.be.true
        expect(prime.isPrime(420)).to.be.false
        expect(prime.isPrime(1337)).to.be.false
        //  expect(prime.isPrime(314159)).to.be.true // the val is too long
    })

    specify('test isPrimeOptimized', () => {
        expect(prime.isPrimeOptimized(-1)).to.be.false
        expect(prime.isPrimeOptimized(0)).to.be.false
        expect(prime.isPrimeOptimized(1)).to.be.false
        expect(prime.isPrimeOptimized(2)).to.be.true
        expect(prime.isPrimeOptimized(3)).to.be.true
        expect(prime.isPrimeOptimized(5)).to.be.true
        expect(prime.isPrimeOptimized(79)).to.be.true
        expect(prime.isPrimeOptimized(420)).to.be.false
        expect(prime.isPrimeOptimized(1337)).to.be.false
        //expect(prime.isPrime(314159)).to.be.true // the val is too long
    })
})

