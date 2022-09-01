// Scenario:
//  1. Go to google site
//  2. Search for the keyword 'Test Automation Learning'
//  3. Select the link with Udemy course
//  4. Verify if the Udemy site has opened
//  5. Search for BDD with Cucumber
//  6.Click on the course with highest rating from the list of search results
// Task: Automate the above scenario given using JS and any tool (WebdriverIO or Selenium). The Project should be shared as a GitHub project. Each automation step should have assertions''

describe("Assessment", function () {
  it("Opens Google", async function () {
    // 1. Go to google site
    await browser.url("http://www.google.com");

    const title = await browser.getTitle();

    expect(title).toEqual("Google");

    // Reject cookies and 2. Search 'Test Automation Learning'
    const cookieBtn = $("div=Reject all");
    await cookieBtn.click();
  });
});
