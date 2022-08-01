/*
* IoT Hub Raspberry Pi NodeJS - Microsoft Sample Code - Copyright (c) 2017 - Licensed MIT
*/
'use strict';

function Sensor(/* options */) {
  // nothing todo
}

Sensor.prototype.init = function (callback) {
  // nothing todo
  callback();
}

Sensor.prototype.read = function (callback) {
  callback(null, {
    temperature: random(20, 30),
    heartbeat: random(60, 110)
  });
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = Sensor;
