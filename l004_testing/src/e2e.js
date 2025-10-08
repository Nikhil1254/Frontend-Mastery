// const puppeteer = require("puppeteer");
import puppeteer from "puppeteer";

// IIFE
(async () => {
    const browser = await puppeteer.launch({
        headless: false,  // Set to false to see the browser
        args: ['--start-maximized'], // Start browser maximized
        slowMo: 200
    });

    const page = await browser.newPage();

    const { width, height } = await page.evaluate(() => ({
        width: window.screen.width,
        height: window.screen.height
    }));

    page.setViewport({
        width,
        height
    })

    await page.goto("https://namastedev.com/", { waitUntil: 'load' }); // open namastedev page url
    console.log("Page loaded.");

    // find for courses link and click it
    await page.waitForSelector(".flex .flex-none ul li:nth-child(2) a");
    await page.click(".flex .flex-none ul li:nth-child(2) a");
    console.log('landed on courses page.');

    // go to namaste system design course
    await page.waitForSelector("div .rounded-xl:nth-child(2)");
    await page.click("div .rounded-xl:nth-child(2)");
    console.log("landed on namaste system design course.");

})();

// HomeWork :
// Automate whole user journey
// Run this sript everyday at 08:09 AM - CRON
// Cot tect all the togs and erorrs send it to email -
// Amazon SES