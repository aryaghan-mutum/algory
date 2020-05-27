const geometry = require('../../../src/geometry/Geometry')

describe('2D Geometry - Square List', () => {
    specify('test cube', () => {
        expect(geometry.squareList([2, -3, 4])).to.eql([4, 9, 16])
        expect(geometry.squareList([])).to.eql([])
        expect(geometry.squareList([1])).to.eql([1])
    })
})


