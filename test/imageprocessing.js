var should = require('chai').should();
var effects = require('../lib/imageprocessing');

describe('image processing', function() {

  describe('RGBA to RGB buffer', function () {
    it('should only accept buffer lenghts that are multiples of 4', function () {
      var buffer = new Buffer(3);
      (function(){
        effects.RgbaToRgb(buffer)
      }).should.throw("Buffer.length not a multiples of 4")
    });
    it('should convert small RGBA buffer to RGB buffer', function () {
      var rgba = new Buffer([0x10,0x20,0x30,0xFF]);
      var result = effects.RgbaToRgb(rgba);
      result.should.deep.equal(new Buffer([0x10,0x20,0x30]));
    });
    it('should convert larger RGBA buffer to RGB buffer', function () {
      var rgba = new Buffer([0x10,0x20,0x30,0xFF,0x40,0x50,0x60,0xFF,0x70,0x80,0x90,0xFF]);
      var result = effects.RgbaToRgb(rgba);
      result.should.deep.equal(new Buffer([0x10,0x20,0x30,0x40,0x50,0x60,0x70,0x80,0x90]));
    });
  });

});
