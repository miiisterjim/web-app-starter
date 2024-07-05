# Web App Starter

A "hello world" application that sends a request to an Express backend and retrieves some content to display.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (includes npm)
- [Git](https://git-scm.com/)

## Getting Started

Follow these instructions to set up and run the project locally.

### Clone the Repository

```sh
git clone https://github.com/your-username/web-app-starter.git
cd web-app-starter
```

### Install the dependencies

Install the necessary npm packages:

```sh
npm install
```

### Run the Application

Start the server:

```sh
node server.js
```

Open your browser and navigate to http://localhost:3000 to view the app.

## Project structure

```
web-app-starter/
│
├── __tests__/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── index.html
│
├── server.js
└── package.json

```

- public/: Contains static files served by the Express server.
- server.js: The main server file that handles API requests.
- package.json: Lists project dependencies and scripts.

## Testing
Run the tests

``` sh
npm test
```