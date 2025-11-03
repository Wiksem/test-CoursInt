const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Triangle Functions', function() {
    
    it('1. The side length of the Triangle', function(done) {
        let t1 = new Triangle(4);
        expect(t1.getSideLength()).to.equal(4);
        done();
    });
    
    it('2. The perimeter of the Triangle', function(done) {
        let t2 = new Triangle(5);
        expect(t2.getPerimeter()).to.equal(15);
        done();
    });
    
    it('3. The area of the Triangle', function(done) {
        let t3 = new Triangle(6);
        // Aire = (√3 / 4) * 6² = 9√3 ≈ 15.588
        expect(t3.getArea()).to.be.closeTo(15.588, 0.001);
        done();
    });
});