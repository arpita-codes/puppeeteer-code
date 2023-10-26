const config =
    process.env.NODE_ENV !== 'production' ? await import('dotenv') : null;

if (config) config.config();


export const { NODE_ENV, CHROMIUM_PATH } = process.env;
console.log(NODE_ENV, CHROMIUM_PATH);

