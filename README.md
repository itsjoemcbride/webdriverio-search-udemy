<h1>
Assessment for FSB
</h1>

<h2> The Task </h2>
As part of the application process, applicants were asked to write an automated test in [WebdriverIO](https://webdriver.io/) to the following brief.

> Scenario:
>
> 1.  Go to google site
> 2.  Search for the keyword 'Test Automation Learning'
> 3.  Select the link with Udemy course
> 4.  Verify if the Udemy site has opened
> 5.  Search for BDD with Cucumber
> 6.  Click on the course with highest rating from the list of search results

> Task: Automate the above scenario given using JS and any tool (WebdriverIO or Selenium). The Project should be shared as a GitHub project. Each automation step should have assertions.

<br>

<h2> My Approach </h2>
Given the tool for the job, WebdriverIO, I set out using [Visual Studio Code](https://code.visualstudio.com/) to write the script to carry out the tests procedurally. To make the code easier to work with, I decided to supplement my text editor with [ESLint](https://eslint.org/) and to aid with keeping the code formatting consistent, I selected [Prettier](https://prettier.io/).
<br><br>
Once my development environment was set up to aid me on this project, I could begin to tackle the problem at hand. Normally when tackling a larger problem, the easiest way to approach it is to break it into smaller stages. Fortunately for this task, the steps are already relatively small, though for each one three things need to be considered.

- What variables or HTML elements will I need to interact with? Can I **arrange** them in such a way that it makes it easier for me to set up the test I want to run?
- What **act**ions do I need to perform in order to execute this step?
- How can I **assert** that the actions I have carried out have the desired outcome?

Thinking about finding solutions to each step in this way empowers me, as a tester, to ensure that the tests I have written fulfil requirements, in a robust, repeatable and scalable way.

Additionally, many of the steps given as part of the brief were broken down into seperate tests. In practical terms, this means that if a change was to happen which caused a test to fail unexpectedly, you would be able to immediately tell where the breakage is.
<br><br>

<h2>Challenges</h2>
Many modern websites today are all faced with the same threat. Bots. Bots have many beneficial purposes, with automated testing perhaps being the most obvious of these. Additionally, bots can be used to crawl and index web pages for search engines, to make websites easier to discover by potential users. Conversely, bots can be used as part of a targeted attack in order to penetrate and access important data on a website. It may come as no surprise then, that many websites, such as one required for this task [Udemy](https://www.udemy.com/) uses measures like [hCaptcha](https://www.hcaptcha.com/) to protect their users from these risks.

![Example of a hCaptcha](https://media.discordapp.net/attachments/1012054236114206731/1015250497814409216/unknown.png?width=400&height=580)

Unfortunately, these systems have an unfortunate side effect of preventing non-malicious users, such as people utilising automated test scripts from navigating their website. The way these systems work is by "challenging" the user to complete a task that should be easy to solve as a human, but difficult to solve by a robot when they suspect a user may not be legitimate.

One way I attempted to mitigate this issue was to pause the automated testing when the hCaptcha would appear, to allow a human to bypass it before automated testing would resume. This proved unsucessful, as modern CAPTCHA solutions, like hCaptcha use more data than just whether or not the 'challenge' was solved effectively. For example, how the mouse was moving up until that point, or the way in which keystrokes were entered. It is for this reason, that even with the challenge successfully solved, hCaptcha did not return the test to the automated site.

This problem made it difficult to test my solution to step six, as these stages would need to be completed after Udemy presents their hCaptcha.

<br><br>
To run, use `npm run wdio`
