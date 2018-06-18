const { Given, When, Then, And } = require('cucumber');
const { expect } = require('chai');
var { By , Key , until } = require('selenium-webdriver');

    Given(/^I browse to web site "([^"]*)"$/, function(url,callback) {
        this.driver.get(url);
        callback();
    })

    Then(/^I should have text field to enter my query$/, function (callback) {
        this.driver.findElement(By.name('q'))
            .then(function(element) {
                expect(element.length).to.not.equal(0);
                callback();
            });
    });

    When(/^I enter "([^"]*)" in the query field$/, function (searchQuery, callback) {
        this.driver.findElement(By.name('q'))
            .sendKeys(searchQuery)
            .then(function() {
                callback();
            });
    });

    When(/^I submit the query$/, function (callback) {
        this.driver.findElement(By.name('q'))
            .sendKeys(Key.ENTER)
            .then(function() {
                callback();
            });
    });

    Then(/^I should see some results$/, function (callback) {
        this.driver.wait(until.elementLocated(By.css('div.g')));
        this.driver.findElements(By.css('div.g'))
            .then(function(elements) {
                expect(elements.length).to.not.equal(0);
                callback();
            });
    });

