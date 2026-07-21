const { test, expect } = require ('@playwright/test');
const { loginpage } = require('../pageobjects/loginpage');
test.describe.configure({ mode: 'parallel' });

test('Practise', async ({browser})=>
{
    const productname="ZARA COAT 3";
    const context = await browser.newContext();
    const page = await context.newPage();
    const useremail= "aafreen.sayyad1@gmail.com";
    const password= "Afraz4u$$123";
const Loginpage = new loginpage(page);
Loginpage.gotoLoginPage();
Loginpage.validLogin(useremail, password);

   
   

    await page.waitForLoadState('networkidle');

    page.pause();

    await page.locator('.card-body').first().waitFor();
    const products = await page.locator('.card-body');
const Count = await products.count();

for (let i=0; i<Count; i++)
{
if (await products.nth(i).locator('b').textContent() === productname)
{
await products.nth(i).locator('text= Add To Cart').click();
break;
}

}
//await page.pause();

   // await page.locator('#toast-container').toBeVisible();
    // await page.locator('#toast-container').toBeHidden();

    await page.locator('[routerlink="/dashboard/cart"]').click();
    await page.locator('div li').first().waitFor();
    const bool = await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
    expect(bool).toBeTruthy();
 
 await page.locator('text=Checkout').click();

  //  const text = await page.locator('.cartSection h3').last().textContent();
 //   await expect(page.locator('.cartSection h3').last()).toHaveText(productname);
    //await page.pause();

 //  const cartitem =await page.locator('.infoWrap .cartSection').last();
   //await cartitem.locator('.btn-primary').click();


    
 await page.locator('[placeholder*="Country"]').pressSequentially('new', {delay:100});
 const dropdown = page.locator('.ta-results');
 await dropdown.waitFor();
 const buttonCount = await dropdown.locator('button').count();
 for(let i=0; i<buttonCount; i++)
 {

    if (await dropdown.locator('button').nth(i).textContent() === " New Zealand")
    {
        await dropdown.locator('button').nth(i).click();
        break;
    }
 }
 const email = "aafreen.sayyad1@gmail.com";

 await expect(page.locator('.user__name label')).toHaveText(email);
 await page.locator('.action__submit').click();

 // await page.pause();



  });  
