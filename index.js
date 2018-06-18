var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'features/reports/cucumber_report.json',
    output: 'features/reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"1.0.0",
        "Test Environment": "LOCAL",
        "Browser": "Chrome",
        "Platform": "Mac OS",
    }
};

reporter.generate(options);
