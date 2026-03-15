import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.join(process.cwd(), 'public', 'case-studies', 'nobin-agro', 'export');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ 
    headless: 'new',
    defaultViewport: { width: 1200, height: 1600 } // Large enough viewport to fit the page
  });
  
  const page = await browser.newPage();

  console.log('Navigating to http://localhost:3000/case-studies/nobin-agro ...');
  // Make sure your Next.js server is running!
  try {
    await page.goto('http://localhost:3001/case-studies/nobin-agro', { waitUntil: 'networkidle0', timeout: 30000 });
  } catch (err) {
    console.error('Failed to load page. Is the Next.js dev server running on port 3001?');
    process.exit(1);
  }

  // Wait for animations and fonts to settle
  await new Promise(r => setTimeout(r, 2000));

  // Find the carousel container. It's the aspect-square div inside the main content.
  // We identify it by its specific classes.
  const carouselSelector = 'div.aspect-square.blueprint-border';
  await page.waitForSelector(carouselSelector);

  for (let i = 0; i < 12; i++) {
    console.log(`Preparing slide ${i + 1}/12...`);
    
    // Click the dot indicator for the current slide
    await page.evaluate((index) => {
        const dots = document.querySelectorAll(`button[aria-label^="Go to slide"]`);
        if (dots[index]) {
            dots[index].click();
        }
    }, i);

    // Wait for the slide transition to complete
    await new Promise(r => setTimeout(r, 800));

    // Hide the pagination dots and navigation arrows for a cleaner screenshot
    await page.evaluate(() => {
       const dotsContainer = document.querySelector('.bottom-2.flex.justify-center');
       if(dotsContainer) dotsContainer.style.opacity = '0';
       
       const buttons = document.querySelectorAll('button[aria-label="Previous Slide"], button[aria-label="Next Slide"]');
       buttons.forEach(b => b.style.opacity = '0');
    });

    // Get the exact bounding box of the carousel to clip the screenshot to just the square area
    const element = await page.$(carouselSelector);
    if (element) {
        const boundingBox = await element.boundingBox();
        
        const outputPath = path.join(OUT_DIR, `slide-${String(i + 1).padStart(2, '0')}.png`);
        
        await page.screenshot({ 
          path: outputPath, 
          // We capture exactly 1080x1080 native resolution by using the clip coordinates based on the element size
          clip: {
            x: boundingBox.x,
            y: boundingBox.y,
            width: boundingBox.width,
            height: boundingBox.height
          }
        });
        console.log(`Saved screenshot: ${outputPath}`);
    } else {
        console.error('Could not find the carousel element on the page.');
    }

    // Restore UI elements for the next slide's click action
    await page.evaluate(() => {
        const dotsContainer = document.querySelector('.bottom-2.flex.justify-center');
        if(dotsContainer) dotsContainer.style.opacity = '1';
    });
  }

  await browser.close();
  console.log(`\n✅ Successfully generated 12 slides at: ${OUT_DIR}`);
})();
