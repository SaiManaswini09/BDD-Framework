package stepDefination;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import Properties.*;


public class Sample{
	public static WebDriver driver;
	Sample_Properties obj = new Sample_Properties();
	
@Given("^User is on pre-login page$")
public void user_is_on_pre_login_page() throws Throwable {
   
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\svellala2\\OneDrive - DXC Production\\Desktop\\RJRT\\chromedriver.exe");
   driver = new ChromeDriver();
   driver.manage().window().maximize();
   driver.get("https:vuse:VsU6Zc0m0x4d05LG@www.vuse-qa.ca/ca/en/");//("https://www.google.co.in/");
   
   
}

@When("^Clicked on Login or Sign up$")
public void clicked_on_Login_or_Sign_up() throws Throwable {
  
}

@Then("^verify and click on login elements$")
public void verify_and_click_on_login_elements() throws Throwable {
    
}
}