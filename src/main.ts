import { launch } from 'puppeteer';

const main = async () => {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.pdf({path: 'google.pdf'});

  await browser.close();
};

await main();
