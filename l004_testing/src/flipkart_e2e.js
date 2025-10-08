// const puppeteer = require("puppeteer");
import puppeteer from "puppeteer";


(async () => {
    const browser = await puppeteer.launch({
        headless: false,  // Set to false to see the browser
        args: ['--start-maximized'], // Start browser maximized
        slowMo: 100
    });

    const page = await browser.newPage();

    const { width, height } = await page.evaluate(() => ({
        width: window.screen.width,
        height: window.screen.height
    }));

    page.setViewport({
        width,
        height
    });


    await page.goto("https://www.flipkart.com/");
    console.log(`Landed on flipkart page.`);

    await page.waitForSelector("input.Pke_EE");
    await page.type("input.Pke_EE", "Iphone 15");
    await page.click("button._2iLD__");
    console.log("Serached for product.");

    await page.evaluate(() => {
        document.querySelector("a.CGtC98").removeAttribute("target");
    })
    await page.click("a.CGtC98");
    console.log(`Product opened`);

    await browser.close()
    console.log(`Browser closed.`);
})();