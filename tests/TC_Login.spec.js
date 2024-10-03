// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://lighthouse-dev.onrender.com/#our-impact');
  await expect(page).toHaveTitle('Lighthouse');
  //await page.waitForTimeout(3000);
  await page.evaluate(()=>{ 
    window.scrollBy(0,1000);
    
  })
//our-impact
await page.locator("xpath=//*[@title='Our Impact']").click();

//our-services
await page.locator("xpath=//*[@title='Our Services']").click();
await page.waitForTimeout(1000);
await page.evaluate(()=>{ 
  window.scrollBy(0,300);
  
});
//how does it work IT 
await page.locator("xpath=//*[@title='How does it work']").click();
await page.waitForTimeout(1000);
//FAQS
await page.locator("xpath=//*[@title='FAQs']").click();
await page.waitForTimeout(1000);
await page.evaluate(()=>{ 
  window.scrollBy(0,300);
  
});
await page.locator("xpath=(//*[@loading='lazy'])[14]").click();
await page.waitForTimeout(1000);


await page.locator("xpath=(//*[@loading='lazy'])[15]").click();
await page.waitForTimeout(1000);
await page.evaluate(() => {
window.scrollTo(0, 1000); // Scrolls 500 pixels down
});
await page.locator("xpath=(//*[@loading='lazy'])[16]").click();
await page.waitForTimeout(1000);
await page.evaluate(() => {
 window.scrollTo(0, 1000); // Scrolls 500 pixels down
 });
await page.locator("xpath=(//*[@loading='lazy'])[17]").click();
await page.waitForTimeout(1000);

});
