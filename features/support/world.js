'use strict';

var { Builder, By, until } = require('selenium-webdriver');
var { chrome, Options } = require('selenium-webdriver/chrome');
var platform = process.env.PLATFORM || "CHROME";
var wd = require('wd'),
    _ = require('underscore'),
    Q = require('q'),
    mocha = require('mocha'),
    describe = mocha.describe,
    capabilities = require('./capabilities'),
    serverConfig = capabilities.appiumServerConfig,
    logging = require('./logging');

var buildAndroidDriver = function() {

    return new Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
        platformName: 'Android',
        deviceName: 'Android device',
        browserName: 'Chrome'
    }).build();

};

var buildChromeDriver = function() {
    return new Builder().forBrowser("chrome").build();
};

var buildDriver = function() {
    switch(platform) {
        case 'ANDROID':
            return buildAndroidDriver();
        case 'CHROME':
            return buildChromeDriver();
        default:
            return buildChromeDriver();
    }
};

function CustomWorld() {
    this.driver = buildDriver();
}

module.exports = function() {
    this.World = CustomWorld;

    // sets a default timeout to 60 seconds.  Time is in ms.
    this.setDefaultTimeout(60 * 1000);
};