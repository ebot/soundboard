
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
  var currentDate = new Date();
  var hour = currentDate.getHours();
  console.log(hour);

  if (hour < 5 ) {
    console.log(hour + " - Get off the couch and go to bed.");
    sys.exec("mpg123 " + __dirname + "/../mp3s/01-go_to_bed.mp3");
  }
  else if (hour > 5 & hour < 12 ) {
    console.log(hour + " - Time to make the most of your day!");
    sys.exec("mpg123 " + __dirname + "/../mp3s/02-have_a_good_day.mp3");
  }
  else if (hour >= 12 & hour < 14 ) {
    console.log(hour + " - Eat a healthy lunch!");
    sys.exec("mpg123 " + __dirname + "/../mp3s/03-lunch_time.mp3");
  }
  else if (hour >= 17 & hour < 18 ) {
    console.log(hour + " - Rough day at work? You look exhasted.");
    sys.exec("mpg123 " + __dirname + "/../mp3s/04-rough_day_at_work.mp3");
  }
  else if (hour >= 18 & hour < 20 ) {
    console.log(hour + " - That was a great workout, you look great, but smell funny.");
    sys.exec("mpg123 " + __dirname + "/../mp3s/05-good_workout.mp3");
  }
  else if (hour >= 20 & hour < 21 ) {
    console.log(hour + " - Dancing with the Stars!");
    sys.exec("mpg123 " + __dirname + "/../mp3s/06-dancin_with_the_stars.mp3");
  }
  else {
    var num = Math.floor(Math.random()*13);
    if (num < 10) {
      num = '0' + num;
    }
    console.log(hour + " - Random Nanny Quote " + num);
    sys.exec("mpg123 " + __dirname + "/../mp3s/random/" + num + ".mp3");
  }
};
