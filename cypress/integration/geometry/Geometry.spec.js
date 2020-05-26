const geometry = require('../../../src/geometry/Geometry')

describe('2D Geometry - Square', () => {
    specify('test square', () => {
        expect(geometry.square(2)).to.be.equal(4)
        expect(geometry.square(0)).to.be.equal(0)
        expect(geometry.square(-2)).to.be.equal(4)
    })
})

describe('2D Geometry - Square List', () => {
    specify('test cube', () => {
        expect(geometry.squareList([2, -3, 4])).to.eql([4, 9, 16])
        expect(geometry.squareList([])).to.eql([])
        expect(geometry.squareList([1])).to.eql([1])
    })
})

describe('2D Geometry - Cube', () => {
    specify('test cube', () => {
        expect(geometry.cube(2)).to.be.equal(8)
        expect(geometry.cube(0)).to.be.equal(0)
        expect(geometry.cube(-2)).to.be.equal(-8)
    })
})

