import Chromium from '@sparticuz/chromium';
import { NODE_ENV } from '../env.js';
import args from './args.js';
import defaultViewport from './defaultViewport.js';
import path from './executablePath.js';

// NODE_ENV !== environments.production ? false : Chromium.headless,

/** @type {import('puppeteer-core').PuppeteerLaunchOptions} */
const sparticuzConfig = {
    args,
    defaultViewport,
    executablePath: await path(),
    //headless: NODE_ENV !== "production" ? false : Chromium.headless,
    headless: false,

};

export default sparticuzConfig;
