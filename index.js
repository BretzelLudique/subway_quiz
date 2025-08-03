const path = require("path");
const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        args: ["--disable-gpu"],
    });
    const page = await browser.newPage();

    const filePath = path.resolve(__dirname, "index.html");
    const fileUrl = `file://${filePath}`;

    await page.setViewport({ width: 1080, height: 1080 });
    await page.goto(fileUrl, { waitUntil: "domcontentloaded" });

    await page.screenshot({ path: `output/${new Date().toString()}.png` });
    await browser.close();
})();
