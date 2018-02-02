'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PS = 25;
  this.MAX_TEMP_NO_PS = 32;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSaving = true;
}

Thermostat.prototype = {
  getTemperature: function () { return this.temperature },

  turnUp: function () {
    if (this.isMaximum()) { return }
    this.temperature += 1
  },

  turnDown: function () {
    if (this.isMinimum()) { return }
    this.temperature -= 1
  },

  isMinimum: function () {
    return this.temperature <= this.MIN_TEMP
  },

  isMaximum: function () {
    if (this.isPowerSavingOn() === true) {
      return this.temperature >= this.MAX_TEMP_PS;
    }
    return this.temperature >= this.MAX_TEMP_NO_PS;
  },

  isPowerSavingOn: function () { return this.powerSaving },

  turnPowerSavingOn: function () { 
    this.powerSaving = true;
    if (this.isMaximum()) {
      this.temperature = this.MAX_TEMP_PS;
    }
  },

  turnPowerSavingOff: function () { this.powerSaving = false },

  resetTemp: function () { this.temperature = this.DEFAULT_TEMP },

  energyUsage: function () {
    var temp = this.getTemperature()
    switch (true) {
      case temp < 18:
        return 'low-usage';
      case temp < 25:
        return 'medium-usage';
      case temp >= 25:
        return 'high-usage';
    }
  }
}