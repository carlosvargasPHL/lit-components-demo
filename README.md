# lit-components-demo

A demonstration project showcasing reusable Lit web components, specifically focusing on an accessible accordion component built with Lit and TypeScript, powered by Vite.

## About
This repository contains a simple web application built with Lit, a lightweight library for building fast, lightweight web components. The primary purpose of this demo is to illustrate the creation and usage of custom web components, featuring a flexible and reusable accordion component. It demonstrates:

- Component encapsulation with Shadow DOM.
- Property and attribute handling in Lit.
- Event handling and custom events for inter-component communication.
- Efficient querying of child custom elements.
- Basic theming using Lit's styling capabilities.

## Technologies Used
- Lit: A simple, fast, and lightweight library for web components.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Vite: A next-generation frontend tooling that provides an extremely fast development experience and optimized build for production.

## Project Structure
```plaintext
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Accordion/
│   │       ├── AtAccordionContainer.ts  // The accordion container component
│   │       └── AtAccordionPanel.ts      // Individual accordion panel component
│   ├── pages/
│   │   └── Home.ts                    // The main application page using the components
│   └── styles.css                 // Global styles for the application
├── index.html                       // Main HTML entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started
Follow these steps to get the project up and running on your local machine.

### Prerequisites
Before you begin, ensure you have Node.js and npm (or yarn/pnpm) installed:

- Node.js: Download & Install Node.js (includes npm)

### Installation
Clone the repository:

git clone <your-repository-url> lit-components-demo
cd lit-components-demo

(Replace <your-repository-url> with the actual URL of your Git repository)

### Install dependencies:

```bash
npm i
```

### Running the Development Server
To start the development server with hot-reloading and see the app in your browser:

```bash
npm run dev
```

Vite will start a development server, usually at http://localhost:5173/. Open this URL in your web browser.

### Building for Production
To create an optimized production build of your application:

```bash
npm run build
```

This command will compile and optimize your code, placing the production-ready files in the dist/ directory. You can then deploy the contents of the dist/ folder to any static web hosting service.