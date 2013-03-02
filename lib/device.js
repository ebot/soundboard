
var stream = require('stream')
  , util = require('util')
  , sys = require('sys');

// Give our module a stream interface
util.inherits(Device,stream);

// Export it
module.exports=Device;

/**
 * Creates a new Device Object
 *
 * @property {Boolean} readable Whether the device emits data
 * @property {Boolean} writable Whether the data can be actuated
 *
 * @property {Number} G - the channel of this device
 * @property {Number} V - the vendor ID of this device
 * @property {Number} D - the device ID of this device
 *
 * @property {Function} write Called when data is received from the cloud
 *
 * @fires data - Emit this when you wish to send data to the cloud
 */
function Device() {

  var self = this;

  // This device will emit data
  this.readable = true;
  // This device can be actuated
  this.writeable = true;

  this.G = "0"; // G is a string a represents the channel
  this.V = 0; // 0 is Ninja Blocks' device list
  this.D = 1002; // 2000 is a generic Ninja Blocks sandbox device

  process.nextTick(function() {

    self.emit('data','');
  });
};

/**
 * Called whenever there is data from the cloud
 * This is required if Device.writable = true
 *
 * @param  {String} data The data received
 */
Device.prototype.write = function(data) {

  // I'm being actuated with data!
  if (data == 1) { 
    console.log(data + " - Lindsey");
    sys.exec("mpg123 " + __dirname + "/../mp3s/lindsey.mp3");
  }
  else if (data == 0) {
    console.log(data + " - Kayla");
    sys.exec("mpg123 " + __dirname + "/../mp3s/kayla.mp3");
  }
};
