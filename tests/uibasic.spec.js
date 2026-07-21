const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

//test ('1st test', async function()
test('1st test', async ({browser})=>
{
 const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await page.locator ("[name='username']").fill("rahulshettyacadem");
await page.locator("[name='password']").fill("learning");
await page.locator("#signInBtn").click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toHaveText("Incorrect username/password.");
}
);



test.only('3rd test', async ({page})=>
{

    const userName = page.locator("[name='username']");
    const passWord = page.locator("[name='password']");
    const signInBtn = page.locator("#signInBtn");
    const cardtitle = page.locator(".card-title a");
   

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());

await userName.fill("rahulshettyacademy");
await passWord.fill("Learning@830$3mK2");
await signInBtn.click();
//console.log(await page.locator("[style*='block']").textContent());
//await expect(page.locator("[style*='block']")).toHaveText("Incorrect username/password.");

//console.log(await cardtitle.first().textContent());
//console.log(await page.locator(".card-title a").last().textContent());
//console.log(await page.locator(".card-title a").nth(1).textContent());
//console.log(await page.locator(".card-title a").nth(2).textContent());


//await page.waitForLoadState('networkidle');
await cardtitle.first().waitFor();
 const alltitles = await cardtitle.allTextContents();
console.log(alltitles);



}


);

