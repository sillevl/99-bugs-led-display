# 99-bugs-led-display

[![Build Status](https://travis-ci.org/sillevl/99bugs-led-display.svg?branch=master)](https://travis-ci.org/sillevl/99bugs-led-display)

![LedPanel](https://github.com/sillevl/99bugs-led-display/raw/master/leddisplay.jpg "Ledpanel")


__99-bugs-led-display__ is a nodejs driver for the 99bugs led display.

## Installation

```
$ npm install 99-bugs-led-display --save
```

__note!__ On windows a mock for the SPI module will be used. The mock enables testing of the package on windows or systems not supporting SPI but will not do anything.

## Basic Example

The following example creates a LedDisplay object and sends a pixel buffer to the screen:

```js
var LedDisplay = require('99bugs-led-display');

var ledDisplay = new LedDisplay('/dev/spidev0.0');
var buffer = getPixels('demo.png');     // fake getPixels() method for demo only!

ledpanel.image(buffer);
```

## API

  * image()
  * flush()


### image(buffer)
Send a buffer to the display. The buffer contains the pixel values in RGB or RGBA coding. The buffer must me 96*64*3 (= 18432) or 96*64*4 (= 24576) values. If RGBA colors are used they will be automatically converted to RGB by the _image()_ method. After sending the image to the display, the _flush()_ mehtod wil automatically be called.

### flush()
Force the buffer to flush and change the internal buffer.
