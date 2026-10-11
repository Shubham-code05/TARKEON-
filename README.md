# TARKEON Landing Page

A responsive, dark-premium landing page for TARKEON, a software engineering, AI, and digital products studio.

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints in your terminal (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production-ready static output is written to `dist/`.

## Before publishing

1. The contact form posts to the configured Google Apps Script web app in `src/App.jsx`. Confirm that the deployment is active and its access setting allows the intended visitors to use it (typically **Anyone** for a public landing page).
2. The Apps Script `doPost(e)` handler must parse the JSON text body from `e.postData.contents` and append the `name`, `email`, `company`, `service`, and `message` values to the existing columns: Timestamp, Name, Email, Company, Service, Message. The browser sends `Content-Type: text/plain;charset=utf-8` to avoid a CORS preflight.
3. To show confirmed success, the Apps Script endpoint must return readable JSON `{ "success": true }` only after the row has been successfully written. The browser uses a normal CORS request and does not use `no-cors`; unreadable, malformed, or negative responses are never treated as success. Safe browser diagnostics report only a failure category and error type, never submitted form values.
4. Apps Script web apps may not provide the cross-origin response headers needed for a browser to read the response. If the browser reports a CORS/network error, the row may still have been written but the website cannot confirm it. The smallest reliable fix is a same-origin serverless/backend proxy that calls Apps Script, verifies its result, and returns JSON to the website. This project is currently a static Vite frontend with no serverless host or backend configured, so no proxy or private credentials are included.
5. To test end-to-end, run `npm run dev`, submit a test enquiry with valid required fields, inspect the browser Network panel for the POST to the Apps Script `/exec` URL and its readable `{ "success": true }` response, then confirm that the row arrived in the Google Sheet columns above. Also test missing fields, invalid email, a rejected request, and a response without `success: true`; only the explicit success response should show “Thank you! Your enquiry has been received.”
6. There is no `Code.gs` in this workspace, so the Apps Script handler cannot be inspected or changed here. Check `doPost(e)` for `JSON.parse(e.postData.contents)`, mapping to the six existing columns in order (timestamp followed by name, email, company, service, and message), and a JSON response with `success: true` returned only after `appendRow` completes.
7. If the browser reports a network/CORS failure, the POST may have reached Apps Script, but the browser cannot read its response and cannot confirm whether a row was saved. Check Apps Script execution history and the Sheet before retrying to avoid duplicate rows. For reliable browser confirmation, deploy a same-origin serverless/backend proxy that submits to Apps Script and returns JSON; no backend deployment or credentials are configured in this static Vite project.
8. The portfolio cards are illustrative concepts and demos, not client case studies. Social profile links are intentionally omitted until official URLs are configured.
9. Add your actual privacy policy and any required legal pages before collecting personal information. Confirm legal use of the TARKEON name and domain; this design does not establish trademark or company-name clearance.
10. For the most reliable production setup, pin dependency versions after testing in your environment.

## Stack
- React + Vite
- Tailwind CSS v4 Vite plugin (with custom CSS for the art-directed visual system)
- lucide-react icons

## Project structure

```text
tarkeon-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
