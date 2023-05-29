# Digit

## 💫 Summary

This is a simple example project showcasing user authentication using React and TypeScript.

## Features

- Login: Users can log in with their username and password.
- Register(just backend part is implemented): New users can create an account by providing a username and password.
- Protected Route: Access to the welcome page is protected. Only authenticated users can access it.

### Linter & code formatter
For code formatting, `Eslint` and `Prettier` was used with **Airbnb** config in this project.

### Important libraries
* [Ant design](https://ant.design/)
* [React router v6](https://reactrouter.com/)
* [Axios](https://axios-http.com/)
* [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
* [Sass](https://sass-lang.com/)

<br />

## Getting Started
---
### Prerequisites

- Node.js (v12 or above)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/sohrab-salehi/digit
   ```

2. Install dependencies:
    ```
    cd react-typescript-authentication
    npm install
    ```

<br />


## 🏃‍♂️ How to run the project?
---
### Backend

    cd backend
    npx ts-node src/server.ts

### Frontend
    npm start

<br />

## Logging web vitals
---
You can observe web vitals parameters like cumulative layout shift(CLS) or first input delay(FID) by passing `console.log` function to `reportWebVitals()` in `index.tsx`.

<br />
