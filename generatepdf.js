import puppeteer from 'puppeteer-core';
import { executablePath } from 'puppeteer';

async function puppeteerGrabPdf(targetPage, destination, destinationJPG = null) {
	const browser = await puppeteer.launch({ headless: true, executablePath: executablePath() });
	const page = await browser.newPage();

	// Set light mode
	await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);

	// Navigate the page to a URL
	await page.goto(targetPage, { waitUntil: 'networkidle0' });

	const pdfBuffer = await page.pdf({
		path: destination,
		format: 'A4',
		pageRanges: '1',
		printBackground: true,
	});

	if (destinationJPG) {
		await page.setViewport({ width: 595, height: 842, deviceScaleFactor: 3 });
		await page.screenshot({ path: destinationJPG, type: 'jpeg', quality: 80, fullPage: true });
	}

	await browser.close();
	return pdfBuffer;
}

var args = process.argv.slice(2);

if (args.length < 2) {
	console.log('Usage: generatepdf.js url destination <destinationjpg>');
	process.exit(1);
}

console.log(args);
puppeteerGrabPdf(args[0], args[1], args[2]);
