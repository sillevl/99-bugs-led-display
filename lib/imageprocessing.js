var effects = require('./imageprocessing');

var adjustGamma = function(buffer, gamma)
{
	var output = new Buffer(buffer.length);
	for(i = 0; i < output.length; i++){
		gammacorrection = 1 / gamma;
		output[i] = 255 * Math.pow(buffer[i] / 255, gammacorrection);
	}
	return output;
}

var RgbaToRgb = function(buffer)
{
	if(buffer.length % 4 != 0)
		throw("Buffer.length not a multiples of 4");

	var output = new Buffer((buffer.length / 4) * 3);
	output.fill(0);

	for(i = 0; i < output.length; i++){
		var t = buffer.slice(i * 4 , (i * 4) + 3);
		t.copy(output, i * 3);
	}

	return output;
}

module.exports.adjustGamma = adjustGamma;
module.exports.RgbaToRgb = RgbaToRgb;
