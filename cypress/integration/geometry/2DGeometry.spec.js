const geometry2d = require('../../../src/geometry/2DGeometry')

describe('2D Geometry - Square', () => {
    specify('test square', () => {
        expect(geometry2d.square(2)).to.be.equal(4)
        expect(geometry2d.square(0)).to.be.equal(0)
        expect(geometry2d.square(-2)).to.be.equal(4)
    })
})

describe('2D Geometry - Square List', () => {
    specify('test cube', () => {
        expect(geometry2d.squareList([2, -3, 4])).to.eql([4, 9, 16])
        expect(geometry2d.squareList([])).to.eql([])
        expect(geometry2d.squareList([1])).to.eql([1])
    })
})

describe('2D Geometry - Cube', () => {
    specify('test cube', () => {
        expect(geometry2d.cube(2)).to.be.equal(8)
        expect(geometry2d.cube(0)).to.be.equal(0)
        expect(geometry2d.cube(-2)).to.be.equal(-8)
    })
})

