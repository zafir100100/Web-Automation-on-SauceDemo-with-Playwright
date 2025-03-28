# Web-Automation-with-Playwright

## What is Automation?

Automation is the practice of using software tools and scripts to perform tasks that would typically require human intervention. In the context of software testing, automation involves using specialized tools to execute test cases and compare the actual outcomes with the expected results automatically.

## Why we use Playwright?

Playwright offers several compelling reasons for web automation:

Multi-Browser Support: Playwright supports multiple web browsers, including Chrome, Firefox, and WebKit. This enables you to run your tests on different browsers without modifying your codebase.

Powerful Cross-Browser API: Playwright provides a powerful and consistent API for automating web interactions across different browsers. You can easily simulate user actions, interact with DOM elements, and perform browser-specific operations.

Headless and Headful Modes: Playwright allows you to run tests in headless mode for faster execution or in headful mode for debugging and troubleshooting. You have the flexibility to choose the appropriate mode based on your needs.

Robust Wait and Retry Mechanism: Playwright's built-in wait and retry mechanism ensures that your tests wait for elements to appear or conditions to be met before proceeding. This reduces flakiness and enhances test reliability.

Accessibility Testing: Playwright includes extensive support for accessibility testing, allowing you to verify that your web applications are accessible to users with disabilities.

Overall, Playwright is a powerful and efficient tool for web automation that can help you to test your application more effectively and catch issues early in the development process.

## Technology used:
- Playwright
- Visual Studio Code
- Javascript

## How to run this project
```sh
# Clone this project

# Install dependencies
npm install

# Run tests:
npm test
```
## Test Scenario: Login and Verify Products Page

### **Test Case 1: Successful Login**
#### **Steps:**
1. Navigate to `https://www.saucedemo.com/`
2. Enter a valid username (`standard_user`)
3. Enter a valid password (`secret_sauce`)
4. Click on the login button
5. Verify that the login is successful by checking the presence of the products label

#### **Expected Result:**
- The user should be redirected to the Products page
- The page should display the title **"Products"**


