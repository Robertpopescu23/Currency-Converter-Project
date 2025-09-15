# Currency Converter App

This project is a **Currency Converter** app built as part of **BigBinary Academy**. It allows users to convert an amount from one currency to another using **real-time exchange rates** from the ExchangeRate API. The app features a simple and clean design with dynamic dropdowns and instant conversion results.

---

## Features

- Enter an amount and select two currencies to convert between.
- Fetches real-time exchange rates using the **ExchangeRate API**.
- Dynamically populates currency dropdowns with currency name, code, and flag using the **Country List API**.
- Responsive and visually appealing layout using **Lato font** and CSS styling.
- Displays conversion result instantly.
- Error handling if conversion fails or API data is unavailable.

---

## Resources

- **Font:** [Lato - Google Fonts](https://fonts.google.com/specimen/Lato)
- **Country List API Endpoint:** [REST Countries API](https://restcountries.com/v3.1/all)
- **Exchange Rate API Website:** [ExchangeRate API](https://www.exchangerate-api.com/)
- **Currency Conversion API Endpoint:** `/v6/YOUR_API_KEY/pair/FROM/TO/AMOUNT`

---

## Tasks Completed

### Task 01: Input Field
- Added a heading: `Currency Converter`.
- Created an input field for users to enter an amount.
- Added a label: `Enter amount` for clarity.
- Set a placeholder value of `100`.
- Made the field required to ensure user input.

### Task 02: Dropdown Menus and Convert Button
- Added two dropdown menus for selecting currencies with placeholder options like `USD - United States Dollar` and `INR - Indian Rupee`.
- Displayed a `TO` label between the dropdowns to indicate conversion direction.
- Added a `Convert` button to trigger the conversion calculation.

### Task 03: Page Styling
- Applied **Lato** font family from Google Fonts.
- Set page background color to `#f4f4f4`.
- Added shadow effect to heading text.
- Centered all content both vertically and horizontally.

### Task 04: Section and Input Styling
- Set content section background to `#F8D800`.
- Center-aligned text inside the section.
- Added shadow and rounded corners to the section.
- Styled input and dropdowns with slight shadow and rounded corners.
- Highlighted input with border color `#555` on focus.
- Styled the `Convert` button with blue background `#007bff`, white text, and subtle shadow.

### Task 05: Result and Error Messages
- Added temporary text for results (`100 USD = 8,407.52 INR`) and error (`An error occurred, please try again later`) messages.
- Styled result message to be centered and bold.
- Styled error message in red for visibility.
- Removed placeholder result text and hid error message to display dynamically with JavaScript.

### Task 06: Dynamic Currency Dropdowns
- Fetched currency details (name, code, flag) using the **Country List API**.
- Populated both currency dropdown menus dynamically.
- Displayed currencies in a readable format like `USD - United States Dollar` with flags.

### Task 07: Real-Time Conversion
- Registered on the **ExchangeRate API** website and obtained an API key.
- Updated the currency conversion endpoint to use the user-selected `fromCurrency` and `toCurrency`.
- On clicking the `Convert` button, fetched conversion rates and displayed the converted amount dynamically.

---

## How to Use

1. Open `index.html` in a browser.
2. Enter an amount in the input field.
3. Select a **From Currency** and a **To Currency**.
4. Click **Convert**.
5. The converted value will display below the button.  
6. If an error occurs (e.g., API unavailable), an error message will appear in red.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- REST APIs:
  - [REST Countries API](https://restcountries.com/v3.1/all)
  - [ExchangeRate API](https://www.exchangerate-api.com/)

---

## Notes

- Make sure to replace the placeholder `YOUR_API_KEY` in the JS file with a valid ExchangeRate API key.
- Ensure a stable internet connection to fetch real-time data from the APIs.

---

**Project by BigBinary Academy**
