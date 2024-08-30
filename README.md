# Your-HR

Your-HR is a web-based platform designed to simplify the management of personal data and documents for users. This project allows users to register, upload resumes, and manage their profiles securely.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Frontend Development](#frontend-development)
- [Backend Development](#backend-development)
- [Database Design](#database-design)
- [Authentication & Security](#authentication--security)
- [Deployment](#deployment)
- [Conclusion](#conclusion)

## Project Overview

Your-HR is a full-stack application that provides users with a seamless experience in managing their personal information and documents. Users can create profiles, upload resumes, and retrieve their data easily. The platform prioritizes security and ease of access.

## Technology Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas

## Features

- **User Registration**: Allows users to create an account with basic details.
- **Resume Upload**: Users can upload resumes which are securely stored in the database.
- **Profile Management**: Users can manage their profiles and download their resumes.
- **Secure Data Storage**: All user data and resumes are stored securely in MongoDB Atlas.

## System Architecture

The application follows a typical three-tier architecture:

- **Frontend (React)**: Handles user interactions, inputs, and displays data.
- **Backend (Node.js/Express)**: Processes API requests, handles authentication, and interacts with the database.
- **Database (MongoDB Atlas)**: Stores user data and resumes in a secure and scalable manner.

### Architecture Diagram

![Architecture Diagram](path/to/architecture-diagram.png)

### Component Overview

- **User Input Handling**: Collects and processes user data and resumes.
- **Resume Processing**: Converts resume files to binary format for storage.
- **Authentication**: Securely stores and verifies user credentials.
- **Profile Management**: Allows users to view and manage their personal information.

## Frontend Development

### React Components

- **User Input Form**: Collects user data (name, address, email, password, resume) with real-time validation.
- **Profile Page**: Displays user information and allows resume download.

### State Management

- **React Hooks**: `useState` and `useEffect` are used for managing state and side effects.

### Form Validation

- **Validation**: Implemented to ensure users provide valid information, with instant feedback provided by Tailwind CSS.

## Backend Development

- **Express Server Setup**: Configured to handle API requests and routing.
- **API Routes**: Includes endpoints for user registration, login, and resume upload.
- **Middleware**: Custom middleware handles file uploads and data validation.

## Database Design

- **MongoDB Atlas**: Stores user data and resumes, with resumes converted to binary format and a 16 MB file size limit.
- **Data Models**: The database schema includes collections for users, storing personal information and resumes securely.

## Authentication & Security

- **Password Hashing**: Implemented using bcrypt for secure password storage.
- **JWT**: Used for session management and authentication.
- **Data Security**: Ensures that sensitive data, including passwords and resumes, is securely stored and transmitted.

## Deployment

- **Backend**: Deployed on Render.
- **Frontend**: Deployed on Vercel.

## Conclusion

The Your-HR project was a valuable experience in full-stack development, focusing on secure data handling, responsive design, and efficient deployment.

