# wildhut
UI Tests for Wildhut Saunas
Test navigation flows and page layout on both mobile and desktop

This repository contains a suite of end-to-end user interface (UI) tests for the Wildhut Saunas website. The tests are built using the Playwright framework to validate key user flows, page layouts, and navigation on both desktop and mobile viewports.

## Features Tested

The test suite covers the following key areas of the Wildhut website:

*   **Landing Page:** Verifies the layout and presence of essential elements on the homepage, including the main navigation menu, headers, and footer links.
*   **'Our Saunas' Navigation:** Ensures that users can navigate from the main menu to each individual sauna product page (OHK, TULI, VESI, MAA) and confirms that the correct page title, URL, and content are loaded.
*   **'Explore' Menu:** Validates the functionality of the 'Explore' dropdown menu and successful navigation to its sub-pages like 'Features'.
*   **'Enquire' Page:** Tests navigation to the enquiry form and basic interaction with form fields.

## Tech Stack

*   **Testing Framework:** [Playwright](https://playwright.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)

## Getting Started

Follow these instructions to get the test environment set up and running on your local machine.

### Prerequisites

*   Node.js (v18 or later)
*   npm (or a compatible package manager)

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone https://github.com/robbennett123/wildhut.git
    ```
2.  Navigate into the project directory:
    ```sh
    cd wildhut
    ```
3.  Install the required npm packages:
    ```sh
    npm install
    ```
4.  Install the necessary Playwright browsers (Chromium, Firefox, WebKit):
    ```sh
    npx playwright install
    ```

### Running the Tests

You can execute the entire test suite using the following command:

```sh
npx playwright test
```

The tests will run in headless mode by default across the browsers defined in `playwright.config.ts` (Chromium, Firefox, and WebKit).

### Viewing Test Reports

After the tests have completed, an HTML report is generated. You can view it by running:

```sh
npx playwright show-report
```

This will open a detailed, interactive report in your web browser.

## Test Structure

*   All test files are located in the `/tests` directory.
*   Tests are organized into separate files based on the website feature being tested (e.g., `wh_our_saunas.spec.ts`, `wh_landing_page.spec.ts`).
*   A `beforeEach` hook is utilized in test suites to handle common setup tasks, such as programmatically accepting the cookie policy and navigating to the site's base URL. This ensures a consistent starting state for each test.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
