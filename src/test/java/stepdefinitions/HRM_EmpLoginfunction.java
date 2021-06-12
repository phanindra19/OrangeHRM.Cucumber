package stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class HRM_EmpLoginfunction 
{
	public static WebDriver driver;
	
	@Given("^I Open Browser with url \"([^\"]*)\"$")
	public void i_Open_Browser_with_url(String url) throws Throwable 
	{
	    driver=new FirefoxDriver();
	    driver.manage().deleteAllCookies();
	    driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	    driver.get(url);
	}

	@Then("^I Should see login Page$")
	public void i_Should_see_login_Page() throws Throwable 
	{
		if(driver.findElement(By.id("btnLogin")).isDisplayed())
	    {
	    	System.out.println("Application Launched Successfully");
	    }else
	    {
	    	System.out.println("Application Launch Failed");
	    }
	}

	@When("^I Enter Empname \"([^\"]*)\"$")
	public void i_Enter_Empname(String uid) throws Throwable 
	{
		driver.findElement(By.id("txtUsername")).sendKeys(uid);
	}

	@When("^I Enter Emppwd \"([^\"]*)\"$")
	public void i_Enter_Emppwd(String pwd) throws Throwable 
	{
		driver.findElement(By.id("txtPassword")).sendKeys(pwd);
	}

	@When("^I Click Login$")
	public void i_Click_Login() throws Throwable 
	{
		driver.findElement(By.id("btnLogin")).click();

	}

	@Then("^I Should See Login Page$")
	public void i_Should_See_Login_Page() throws Throwable 
	{
		if(driver.findElement(By.linkText("Leave")).isDisplayed())
	    {
	    	System.out.println("Admin Login Successful");
	    }else
	    {
	    	System.out.println("Admin Login Failed");
	    }
		
	}

	@When("^I click Logout$")
	public void i_click_Logout() throws Throwable 
	{
	    driver.findElement(By.partialLinkText("Ramya")).click();
	    driver.findElement(By.linkText("Logout")).click();
		
	}

	@Then("^I should see Login page$")
	public void i_should_see_Login_page() throws Throwable 
	{
		
		if(driver.findElement(By.id("btnLogin")).isDisplayed())
	    {
	    	System.out.println("Application Launched Successfully");
	    }else
	    {
	    	System.out.println("Application Launch Failed");
	    }
	}

	@When("^I close Browser$")
	public void i_close_Browser() throws Throwable 
	{
		driver.close();
	}


	
}
