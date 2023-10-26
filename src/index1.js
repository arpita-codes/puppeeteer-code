import puppeteer from 'puppeteer-core';
import sparticuzConfig from '../src/sparticuz/index.js';

export const handler = async (event) => {
    const key_words = 'JavaScript';
    const link = 'https://www.google.com';

    const browser = await puppeteer.launch(sparticuzConfig);

    try {
        const [page] = await browser.pages();
        await page.goto(link);
        console.log("link", link)
        // await page.waitForNavigation()
        console.log("here 1")

        await page.waitForSelector('div form div:nth-child(2) input');
        console.log("here 2")
        await page.type('div form div:nth-child(2) input', "hello");
        console.log("here 3")
        await page.click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b');
        console.log('button clicked automatically');



        await page.waitForSelector('#search');
        console.log("here 3")
        const url = await page.evaluate(() => window.location.href);

        await page.goto(url, { waitUntil: 'domcontentloaded' });
        console.log('loaded successfully!');


        // const screenshotPath = '/tmp/new_image.png';
        // await page.screenshot({ path: screenshotPath, fullPage: true });

        console.log('URL of the page:', url);
        // console.log('Location of the screenshot:', screenshotPath);

        await browser.close();

        return {
            statusCode: 200,
            body: JSON.stringify({ url }),
        };
    } catch (error) {
        console.error(error);
        await browser.close();
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};


await handler()