# Grocery Management System - API Design

## Overview

This project is a RESTful API for managing grocery items, supporting admin operations, user bookings, and containerized deployment for scalability. The API is built using Node.js, Express, and Sequelize ORM with MySQL as the database.

## Features

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

2. Install dependencies:
   npm install

3. Set up environment variables:
  Copy the .env.example file to .env and update the values as needed.

4. Run the application 
  npm run dev

### Running in Docker

1. Build the Docker image: 
  docker build -t qp-assessment:development --target development .

2. Run the Docker container:
  docker run -p 3001:3001 qp-assessment:development

### API Documentation
- The API documentation is available at /api/docs when the server is running.

### License
- This project is licensed under the MIT License - see the LICENSE file for details.

### Author
- Malay Shukla