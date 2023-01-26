const puppeteer = require('puppeteer');

//async function to use await since we'll have to wait on multiple promises
async function scrapePlayer(url) {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x(`//*[@id="wrapper"]/div[1]/div/div/div/table/tbody/tr[5]/td[1]/a/div/div[1]`); //.x is a puppeteer selector (allows to select item with xpath) => (xpath is a in a syntax that works well with webscrappers (similar to jquery))
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();


    console.log({rawTxt});


    browser.close();
}

scrapePlayer('https://www.vlr.gg/stats');