var should = require('chai').should();
var LedDisplay = require('../lib/led-display');

describe('led-display', function() {

  var ledDisplay = null;

  before(function(){
    ledDisplay = new LedDisplay('/dev/spidev0.0');
  });

  describe('constructor', function () {
    it('should create an instance of led-display', function () {
      should.exist(ledDisplay);
    });
  });

  describe('flush', function(){
    it('should have a flush method', function (done) {
      ledDisplay.flush(function(){
        done();
      });
    });
  });

  describe('image', function(){
    it('should write image to display', function (done) {
      var image = Buffer(96*64*3);
      ledDisplay.image(image, function(){
        done();
      });
    });
    it('should throw error if image size is not correct', function () {
      var image = Buffer((96*64*3)-1);
      (function(){
        ledDisplay.image(image);
      }).should.throw("Incorrect buffer size")
    });

    it('should send RGB image', function (done) {
      var image = Buffer(96*64*3);
      ledDisplay.image(image, function(){
        done();
      });
    });
    it('should send RGBA imageprocessing', function (done) {
      var image = Buffer(96*64*4);
      ledDisplay.image(image, function(){
        done();
      });
    });
  });

});
