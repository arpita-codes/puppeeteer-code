import chromium from '@sparticuz/chromium';
import { NODE_ENV } from '../env.js';


const disablesArgs = [
    '--window-size=1920,1080',
    '--start-maximized',
    '--single-process',
    '--hide-scrollbars',
    ...[NODE_ENV !== "production" && "--headless='new'"]
];

const args = [
    ...chromium.args.filter((arg) => !disablesArgs.includes(arg)),
    '--disable-popup-blocking',
    '--allow-popups-during-page-unload'
];

export default args;
