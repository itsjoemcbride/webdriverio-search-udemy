// Scenario:
//  1. Go to google site
//  2. Search for the keyword 'Test Automation Learning'
//  3. Select the link with Udemy course
//  4. Verify if the Udemy site has opened
//  5. Search for BDD with Cucumber
//  6.Click on the course with highest rating from the list of search results
// Task: Automate the above scenario given using JS and any tool (WebdriverIO or Selenium). The Project should be shared as a GitHub project. Each automation step should have assertions''
import GooglePage from "../pageobjects/google.page";
import UdemyPage from "../pageobjects/udemy.page";

describe("Assessment", function () {
  it("goes to the Google website and rejects cookies", async function () {
    // 1. Go to google site
    await GooglePage.open();
    expect(browser).toHaveTitleContaining("Google");
    // Reject cookies
    await GooglePage.rejectCookiesBtn.click();
  });

  it("searches Google for 'Test Automation Learning'", async function () {
    // 2. Search 'Test Automation Learning'
    await GooglePage.searchBar.click();
    await browser.keys("Test Automation Learning\uE007");
    // Assert that we are on the right page
    await expect(browser).toHaveTitleContaining("Test Automation Learning");
  });

  it("selects the Google search result which is a Udemy course", async function () {
    // 3. Select the link with Udemy course
    await GooglePage.udemyLink.click();
    // 4. Assert that we are on the right page
    await expect(browser).toHaveTitleContaining("Udemy");
  });

  it("searches Udemy for 'BDD with Cucumber'", async function () {
    // 5. Search for BDD with Cucumber
    await UdemyPage.searchBar.click();
    await UdemyPage.searchBar.keys("BDD with Cucumber\uE007");
    // Assert that we are on the right page
    expect(browser).toHaveUrlContaining("BDD+with+Cucumber");
  });

  // Sometimes the test halts here as a result of a CAPTCHA on the Udemy website. In reality, testers would usually have access to a bypass API in this scenario. A pause statement was attempted here so that a human could carry out the captcha, but the CAPTCHA would never resolve.

  it("sorts the search results by 'Highest Rated' and selects the top result", async function () {
    // 6. Click on the course with highest rating from the list of search results
    // Click on the dropdown and select "Highest Rated"
    await UdemyPage.dropDown.click();
    await UdemyPage.dropDown.selectByVisibleText("Highest Rated");
    // Click on the link for the first course on the list
    await UdemyPage.topResult.click();
    // Assert that we have landed on the right page
    await expect(browser).toHaveTitleContaining(
      "Learn to Create BDD Framework using Cucumber and Java"
    );
  });
});
