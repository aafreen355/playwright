class loginpage{

    
constructor(page)
{

this.page = page;

 
    this.useremail = page.locator('#userEmail');
    this.userpassword = page.locator('#userPassword');
    this.loginButton = page.locator('[value="Login"]');

}
 async gotoLoginPage(page)
{
await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');

}
async validLogin(useremail, password)
{
 
    await this.useremail.fill(useremail);
    await this.userpassword.fill(password);
    await this.loginButton.click();


}








}
module.exports = { loginpage };
