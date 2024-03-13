import puppeteer from 'puppeteer-core';
import { executablePath } from 'puppeteer';
import { exec } from 'child_process';
import { renameSync } from 'fs';

const gsInvokeArgs =
	'-sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/printer -dNOPAUSE -dQUIET -dBATCH';

function optimizePdf(targetPath) {
	var optimizedTgt = targetPath + '_optimized';

	exec(`gs ${gsInvokeArgs} -sOutputFile=${optimizedTgt} ${targetPath}`, (error) => {
		if (error) {
			console.log(`error: ${error.message}\n${targetPath} not optimized`);
		} else {
			renameSync(optimizedTgt, targetPath);
			console.log(targetPath + ' optimized');
		}
	});
}

async function puppeteerGrab(targetPage, destination) {
	const browser = await puppeteer.launch({ headless: true, executablePath: executablePath() });
	const page = await browser.newPage();

	// Set light mode
	await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);

	// Navigate the page to a URL
	await page.goto(targetPage, { waitUntil: 'networkidle0' });

	// Pick an export format
	let extension = destination.split('.').pop();
	if (
		extension === 'jpg' ||
		extension === 'jpeg' ||
		(extension === 'webp') | (extension === 'png')
	) {
		await page.setViewport({ width: 595, height: 842, deviceScaleFactor: 3 });

		if (extension === 'png') {
			await page.screenshot({ path: destination, type: 'png', fullPage: true });
		} else if (extension === 'webp') {
			await page.screenshot({ path: destination, type: 'webp', quality: 70, fullPage: true });
		} else await page.screenshot({ path: destination, type: 'jpeg', quality: 80, fullPage: true });
	} else {
		await page.pdf({
			path: destination,
			format: 'A4',
			pageRanges: '1',
			printBackground: true,
		});

		optimizePdf(destination);
	}

	await browser.close();
}

var args = process.argv.slice(2);
if (args.length < 2) {
	console.log('Usage: generatepdf.js url ...destinations[.jpg|.png|.pdf]');
	process.exit(1);
}

for (const destination of args.splice(1)) puppeteerGrab(args[0], destination);
