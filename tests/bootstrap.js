const puppeteer = require('puppeteer');

before (async function () {
    global.browser = await puppeteer.launch();
    global.assert = require('chai').assert;
});

after (function () {
    browser.close();
});

beforeEach(async function () {
    global.page = await browser.newPage();
    await page.goto('file://' + __dirname + '/tests.html');
});

afterEach(async function () {
    await page.close();
});

