NinjaBlock Soundboard
---------------------

This is a little project that I used to teach myself how to use the
ninja blocks client and toolbelt.

Setup
=====================

### mpg123 ###

On Mac With Homebrew

```bash
brew install mpg123
```

On Linux

```bash
sudo apt-get install mpg123
```

On Win, download from http://mpg123.org/download.shtml

### Ninja Block Client and Soundboard Module ###

* Install the NinjaBlock Client
* cd to ninja_modules
* clone soundboard from https://github.com/ebot/soundboard
* cd ..
* Start the NinjaBlock client

```bash
node client.js
```

### Notes ###

You will note that I set the device id in device.js to 1002. I felt this
was best suited to an audio switch. The default sandbox id 2000 was not
showing up in the rules engine.

Usage
=======================

1. Copy the device id from the command line output of the client and use it
   to pair on http://a.ninja.is.
2. Set up so rules or click the on/off switch in the dashboard to hear
   sounds.
