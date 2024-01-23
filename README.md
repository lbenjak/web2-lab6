# Web2 Project - Library Management System, aka library-app

This project is part of the Web2 course at the Faculty of Electrical Engineering and Computing (FER), University of Zagreb. The purpose of this project is to demonstrate the implementation of a Library Management System using modern web technologies.

## Project Overview

The Library Management System is a web application that simulates a library's functionalities. It includes features such as displaying most borrowed books, announcements, and a reservation system for library events.

## Technologies Used

- **Vue.js**: The frontend of the application is built using the Vue.js framework, providing a dynamic and responsive user interface.

- **Pinia**: Pinia is used as the state management system to manage the application's state and data flow efficiently.

- **Mockey**: For the purpose of this project, Mockey is used to generate mock APIs that simulate real-world scenarios. It allows us to showcase the functionality without the need for a real backend.

## Features

1. **Most Borrowed Books:** Displays the top three most borrowed books in the library.

2. **Announcements:** Shows announcements about library events. Each announcement includes details such as title, text, author, and date.

3. **Spot Reservation:** Allows users to reserve a spot for a library event. The number of available spots is dynamically managed and updated.

## Data Sources

All data used in this project is retrieved from open-sourced APIs. The APIs are generated using Mockey to simulate real-world data scenarios. It's important to note that this project is not connected to a real library system, and the data is purely for demonstration purposes.

## How to Run

1. Clone this repository:

   ```bash
   git clone https://github.com/lbenjak/web2-lab6.git
   cd web2-lab6
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run serve
   ```

4. Open your browser and navigate to [http://localhost:8080](http://localhost:8080).

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
