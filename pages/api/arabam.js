const puppeteer = require("puppeteer");

async function start(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let src = "https://www.arabam.com";
    var counter = 0;
    var index = -1;
    var models = [];

    await page.goto("https://www.arabam.com/ikinci-el?searchText=e+200&sort=priceTl.asc");
    const names  = await page.$$eval("span.db.no-wrap.listing-price",(texts)=>{
        return texts.map((x) => x.textContent);
    });

    // console.log(names);
    
    // arabalarin tam model andlarını almak için url detaylari
    const hrefs = await page.evaluate(
        () => Array.from(
          document.querySelectorAll('a.link-overlay'),
          a => a.getAttribute('href')
        )
      );

    // her href ile sitelere ulasip model adi alma
    for (counter;counter<hrefs.length;counter++){
        if (counter%2 == 0)
          await findCarNames(hrefs[counter]);
    }

    async function findCarNames(item){
        index++;
        await page.goto(src.concat(item));
        models[index]  = await page.$$eval("p.advert-detail-title",(texts)=>{
        return texts.map((x) => x.textContent);
    });
    }

    console.log(models);

    await browser.close();
}
start();

export default start;