exports.iosCapabilities = {
    appiumversion: '1.8.0',
    platformName: 'iOS',
    platformVersion: '11.3',
    deviceName: 'iPhone X',
    automationName: 'XCUITest',
    browserName:'Chrome'
};

exports.androidCapabilities = {
    platformName: 'Android',
    automationName: 'UiAutomator2',
    deviceName: 'Google Pixel',
    platformVersion: '8.1',
    app: undefined// Will be added in tests
};

exports.appiumServerConfig =  {
    host: '127.0.0.1',
    port: 4723
};
