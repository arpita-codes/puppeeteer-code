// const puppeteer = require('puppeteer-core');
import puppeteer from 'puppeteer-core';
import sparticuzConfig from './sparticuz/index.js';
// const { default: sparticuzConfig } = require('./sparticuz');

(async event => {
    const key_words = 'JavaScript';
    const link = 'https://www.google.com';

    const browser = await puppeteer.launch(sparticuzConfig);

    try {
        const page = await browser.newPage();

        await page.setViewport({ width: 1199, height: 900 });

        await page.goto(link);

        await page.waitForSelector('div form div:nth-child(2) input');
        await page.type('div form div:nth-child(2) input', "hello");
        await page.click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b');
        console.log('button clicked automatically');

        // await page.waitForNavigation();
        // await page.type('domcontentloaded', "loaded successfully");
        // await page.click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b');
        await page.waitForSelector(
            '#main > div #center_col #search > div > div > div'
        );
        console.log('loaded successfully!');
        await new Promise((res) => setTimeout(res, 3000))


        const url = await getHref(
            page,
            `#main > div #center_col #search > div > div > div a`
        );

        await page.goto(url, { waitUntil: 'domcontentloaded' });


        console.log('URL of the page:', url);

        await page.close();
        await browser.close();
    } catch (error) {
        console.log(error);
        await browser.close();
    }
})();


const getHref = (page, selector) =>
    page.evaluate(
        selector => document.querySelector(selector).getAttribute('href'),
        selector
    );
