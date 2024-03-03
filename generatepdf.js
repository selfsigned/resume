import puppeteer from 'puppeteer-core';
import { executablePath } from 'puppeteer';

async function puppeteerGrabPdf(targetPage, destination) {
	const browser = await puppeteer.launch({ headless: true, executablePath: executablePath() });
	const page = await browser.newPage();

	// Navigate the page to a URL
	await page.goto(targetPage);

	const pdfBuffer = await page.pdf({
		path: destination,
		format: 'A4',
		pageRanges: '1',
		printBackground: true,
	});

	await browser.close();
	return pdfBuffer;
}

var args = process.argv.slice(2);

if (args.length < 2) {
	console.log('Usage: generatepdf.js url destination');
	process.exit(1);
}

console.log(args);
puppeteerGrabPdf(args[0], args[1]);
