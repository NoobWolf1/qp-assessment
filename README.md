# Grocery Management System - API Design

## Overview

This project is a RESTful API for managing grocery items, supporting admin operations, user bookings, and containerized deployment for scalability. The API is built using Node.js, Express, and Sequelize ORM with MySQL as the database.

## Features

### Login and Signup features:
- **Sign up User**: API to add new user to the system.
- **Login User**: API to login into the system using.
- **Update user details**: API to update properties such as name and email, dob of user.
- **Validation of User**: API to check whether user is logged in or not.

### Admin Responsibilities:
- **Add Grocery Items**: API to add new grocery items to the system.
- **View Grocery Items**: API to view existing grocery items.
- **Remove Grocery Items**: API to remove grocery items from the system.
- **Update Grocery Item Details**: API to update properties such as name and price of grocery items.
- **Manage Inventory**: API to update inventory levels of grocery items.

### User Responsibilities:
- **View Available Grocery Items**: API to fetch the list of all available grocery items.
- **Book Multiple Grocery Items**: API to allow users to book multiple items in a single order.

## Advanced Challenge

- **Containerization with Docker**: 
  - Dockerize the application to ensure ease of deployment and scalability.

## Getting Started

### Prerequisites

- Node.js (>=14.0.0)
- Docker (optional, for containerization)
- MySQL

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/NoobWolf1/qp-assessment.git
   cd qp-assessment
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
    ```sh
    cp .env.example .env
    ```

    Update the `.env` file with the following values:
    ```env
    DB_HOST=localhost
    DB_NAME=grocery
    DB_PASSWORD=yourPass
    DB_PORT=3306
    DB_TYPE=mysql
    DB_USER=root
    PORT=3001

    NODE_ENV=development
    ```

4. Run the application 
  ```sh
  npm run dev
  ```

### Running in Docker (Make sure you have installed Docker and DockerCompose)

1. Build the Docker image: 
  ```sh
  docker build -t qp-assessment:development --target development .
  ```

2. Run the Docker container:
  ```sh
  docker run -p 3001:3001 qp-assessment:development
  ```

3. Create docker-compose.yml file based on below example
  ```yaml
  version: "3.8"
  services:
    app:
      build: .
      ports:
        - "3003:3003"
      environment:
        - NODE_ENV=development
        - DB_HOST=localhost
        - DB_NAME=grocery
        - DB_PASSWORD=yourPass
        - DB_PORT=3306
        - DB_TYPE=mysql
        - DB_USER=root
        - PORT=3001
        
      depends_on:
        - db
      
      volumes:
        - .:/usr/src/app
        - /usr/src/app/node_modules

    db:
      image: mysql:8
      restart: always
      environment:
        MYSQL_ROOT_PASSWORD: yourPass
      ports:
        - "3307:3306"
      volumes:
        - db_data:/var/lib/mysql

  volumes:
    db_data:
  ```

4. Run docker-compose
  ```sh
  docker-compose up --build
  ```

### API Documentation
- The API documentation is available at http://localhost:3001/api/v1/docs/ when the server is running.

### License
- This project is licensed under the MIT License - see the LICENSE file for details.

### Author
- Malay Shukla
