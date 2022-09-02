// Scenario:
//  1. Go to google site
//  2. Search for the keyword 'Test Automation Learning'
//  3. Select the link with Udemy course
//  4. Verify if the Udemy site has opened
//  5. Search for BDD with Cucumber
//  6.Click on the course with highest rating from the list of search results
// Task: Automate the above scenario given using JS and any tool (WebdriverIO or Selenium). The Project should be shared as a GitHub project. Each automation step should have assertions''

describe("Assessment", function () {
  it("searches google for the udemy course", async function () {
    // 1. Go to google site
    await browser.url("http://www.google.com");

    let title = await browser.getTitle();

    expect(title).toEqual("Google");

    // Reject cookies
    const cookieBtn = $("div=Reject all");
    await cookieBtn.click();
    // 2. Search 'Test Automation Learning'
    const searchBar = $("input");
    await searchBar.click();
    await browser.keys("Test Automation Learning\uE007");
    // const searchBtn = $("aria/Google Search");
    // await searchBtn.click();

    // await browser.pause(3000); // Wait for google search results to load

    title = await browser.getTitle();
    await expect(title).toContain("Test Automation Learning");

    // 3. Select the link with Udemy course
    const udemyLink = $("a*=Udemy");
    await udemyLink.click();

    // await browser.pause(3000); // Wait for udemy to load

    title = await browser.getTitle();
    await expect(title).toContain("Udemy");

    // 5. Search for BDD with Cucumber
    const udemySearch = $("[role=combobox]");
    await udemySearch.click();
    await udemySearch.keys("BDD with Cucumber\uE007");

    // await browser.pause(15 * 60000); // Wait for Udemy search results to load a(leave time to do captcha)

    // const udemySearchBtn = $("aria/Submit search");
    // await udemySearchBtn.click();
    // TODO : Write assertion for this step

    // Sometimes Udemy asks for a CAPTCHA to be completed here, maybe add a feature to pass it to a manual user?

    // 6. Click on the course with highest rating from the list of search results

    const selectBox = await $("input[name='sort']");
    await selectBox.click();
    await selectBox.selectByVisibleText("Highest Rated");

    const topResult = await $("//h3/a");
    topResult.click();

    // TODO: Assert that we have landed on the right page

    // await selectBox.selectByVisibleText("Highest Rated");
  });

  // it("filters the results and selects the most highly rated one", async function () {
  //   // 6. Click on the course with highest rating from the list of search results
  //   await browser.url(
  //     "https://www.udemy.com/courses/search/?src=ukw&q=BDD+with+Cucumber"
  //   );

  //   const selectBox = await $("[name=sort]");

  //   await selectBox.selectByVisibleText("Highest Rated");
  //   await browser.pause(5000);
  // });
});
