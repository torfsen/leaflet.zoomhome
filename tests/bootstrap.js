const puppeteer = require('puppeteer');

const SHOW_BROWSER = false;

before (async function () {
    global.browser = await puppeteer.launch({devtools: SHOW_BROWSER});
    global.assert = require('chai').assert;
});

after (function () {
    if (!SHOW_BROWSER) {
        browser.close();
    }
});

beforeEach(async function () {
    global.page = await browser.newPage();
    await page.goto('file://' + __dirname + '/tests.html');
});

afterEach(async function () {
    if (!SHOW_BROWSER) {
        await page.close();
    }
});

