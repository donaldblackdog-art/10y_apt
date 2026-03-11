# Project Blueprint

## Overview

This project is a web application that provides a real estate "transfer" calculator. It helps users determine their financial capacity for moving to a better home. The application is built with HTML, CSS, and JavaScript, without any frameworks.

## Style, Design, and Features

### Initial Version

*   **Calculator:** A form to input financial data (income, savings, loan conditions) to simulate a real estate transfer scenario.
*   **Columns:** A series of articles explaining the concepts behind the calculator.
*   **Static Pages:** About, Contact, Privacy, and Terms pages.
*   **Design:** A simple, clean design with a focus on readability.

### Current Version (with Left Navigation)

*   **Left Navigation Menu:** A persistent menu on the left side of all pages for easy navigation between the main calculator, columns, and other pages.
*   **Layout:** A two-column layout is implemented using CSS Flexbox to accommodate the new navigation menu.
*   **Dynamic Menu Injection:** The navigation menu is loaded dynamically into each page using JavaScript's `fetch` API, promoting code reusability.

## Current Plan: Add Left Navigation Menu

The user wants a separate menu on the left for easier navigation.

### Steps:

1.  **Create `blueprint.md`:** Document the project and the current plan.
2.  **Create `menu.html`:** Create a new HTML file for the reusable navigation menu.
3.  **Create `navigation.js`:** Create a JavaScript file to fetch and inject `menu.html` into the pages.
4.  **Update `style.css`:** Add CSS for the two-column layout and menu styling.
5.  **Update existing HTML files:** Modify all relevant HTML files to include the menu container and the new JavaScript file.
