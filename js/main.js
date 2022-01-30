const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);


    const [el2] = await page.$x('/html/body/div[1]/main/section[4]/div[1]/div/div[1]/div/div[1]/div[2]/div/div[2]/h1');
    const txt = await el2.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    console.log({rawTxt});

    browser.close();
    
}

scrapeProduct('https://flo.uri.sh/visualisation/7314563/embed?auto=1');
