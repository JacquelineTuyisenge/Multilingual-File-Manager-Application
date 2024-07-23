# Multilingual File Manager Application
 
## Project Documentation

### Project Overview

This project is designed to showcase backend development skills by building a multi-user file manager application. The application leverages **Node.js**, **MongoDB**, and **JWT** for secure user authentication and session management. It integrates core concepts such as databases, internationalization (i18n), and unit testing to deliver a comprehensive solution for file management.

### Key Features

- **User Management**: Enables user registration and login with secure password storage using JWT (JSON Web Tokens).
- **File Management**: Provides CRUD (Create, Read, Update, Delete) operations on files within a user's directory structure.
- **Internationalization (i18n)**: Supports multiple languages to cater to a diverse user base by displaying user interface elements in different languages.
- **Unit Testing**: Ensures the reliability of core functionalities through comprehensive unit testing.

## Project Setup

### Prerequisites

Before you start, make sure you have the following installed on your development environment:

- **Node.js**: [Install Node.js](https://nodejs.org/), which is required to run JavaScript code on the server-side and manage project dependencies.
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community), a NoSQL database used to store user data and file metadata.

### Installation

1. **Clone the Repository**:
   - Begin by cloning the project repository from GitHub:
     ```sh
     git clone https://github.com/JacquelineTuyisenge/Multilingual-File-Manager-Application.git
     cd Multilingual-File-Manager-Application
     ```

2. **Install Dependencies**:
   - Install the necessary Node.js packages and dependencies defined in `package.json`:
     ```sh
     npm install
     ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory of the project. and add them accoring to the ones in `.env.example`.

4. **Start MongoDB**:
   - Ensure that MongoDB is running.

5. **Run the Application**:
   - Launch the application using:
     ```sh
     npm start
     ```

### Project Structure

The project is organized into several key directories and files to ensure maintainability and scalability:

## Technical Choices

- **Node.js**: Utilized for its non-blocking, event-driven architecture, making it well-suited for handling multiple concurrent connections efficiently.
- **Express.js**: Chosen as the web framework to build and manage API routes and middleware in a structured manner.
- **MongoDB**: Selected as the database for its flexibility and scalability, allowing for efficient storage and retrieval of user and file data.
- **JWT (JSON Web Tokens)**: Employed for stateless authentication, simplifying user session management without needing server-side session storage.
- **i18next**: Implemented for managing multilingual functionalities, enabling the application to support various languages.
- **Joi**: Used for request validation, ensuring data integrity and consistency by validating incoming request data.
- **Jest**: used jst for testing


## Running Unit Tests

- To ensure if the core functionalities are working correctly, run unit tests using:
  ```sh
  npm test
  
## Group Members

The project team consists of the following members:

1. **[Aloysie Murekatete](https://github.com/M-Aloysie)**
   - **Role**: Backend Developer
   - **Responsibilities**: 

2. **[Jacqueline Tuyisenge](https://github.com/JacquelineTuyisenge)**
   - **Role**: Backend Developer
   - **Responsibilities**: 

Each team member played a crucial role in different aspects of the project, ensuring a collaborative approach to building and maintaining the application.

