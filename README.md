# Bill / Paycheck Planner

A Progressive Web App (PWA) that helps you plan bills against upcoming paychecks, forecast cash flow, and see what money is actually safe to spend before your next payday.

## Features

- **Dashboard** – current balances, upcoming bills, and “safe to spend” estimate
- **Bill tracking** – recurring and one-time bills with due dates
- **Paycheck / income management** – multiple pay schedules
- **Cash-flow forecasting** – projected balances over time
- **Debt strategies** – snowball / avalanche style prioritization
- **Paystub OCR** – extract data from paystub images (Tesseract.js)
- **Plaid banking link** (optional) – pull real balances and recent transactions via a local proxy server
- **Offline-capable PWA** – installable, service worker caching

All primary data lives in the browser (`localStorage`). The optional Node/Express server is only needed when using Plaid.

## Quick start (frontend only)

1. Clone the repo
2. Open `index.html` in a modern browser, **or** serve the folder with any static server:

```bash
npx serve .
# or
python -m http.server 8000