import { chromium } from "playwright";
import erailParser from "../parser/erailParser.js";

const erailTrainScraper = async (trainNumber) => {
    const browser = await chromium.launch({
        headless: true
    });

    try {
        const page = await browser.newPage();

        await page.goto(
            `https://erail.in/train-running-status/${trainNumber}`,
            {
                waitUntil: "networkidle",
                timeout: 30000
            }
        );

        const title = await page.title();

        const stations = await erailParser(page);

        return {
            title,
            trainNumber,
            stations
        };
    } finally {
        await browser.close();
    }
};

export default erailTrainScraper;
