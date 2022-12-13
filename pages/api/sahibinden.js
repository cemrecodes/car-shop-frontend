const puppeteer = require("puppeteer");

async function start(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let src = "https://www.arabam.com";

    await page.goto("https://www.arabam.com/ikinci-el?searchText=e+200&sort=priceTl.asc");
    const names  =await page.$$eval("span.db.no-wrap.listing-price",(texts)=>{
        return texts.map((x) => x.textContent);

      
    });

    // console.log(names);
    
    const hrefs1 = await page.evaluate(
        () => Array.from(
          document.querySelectorAll('a.link-overlay[href]'),
          a => a.getAttribute('href')
        )
      );
      
    await page.goto( src.concat(hrefs1[0]));
    const models  =await page.$$eval("p.advert-detail-title",(href)=>{
        return texts.map((x) => x.textContent);

      
    });

    console.log(models);




    await browser.close();
}
start();