# Next.js Auth System with MongoDB and Appwrite

## Description

This project is a full-stack web application built using Next.js. It aims to provide a comprehensive solution for user authentication, including features like user registration, login, secure cookie handling with JWT tokens, email verification, password reset, and middleware route protection. Additionally, it integrates Appwrite for backend functionalities and demonstrates deployment to Vercel.

## Features

- **User Registration**: Allow users to create an account with email verification.
- **User Login**: Secure login functionality with JWT token generation.
- **Secure Cookie Handling**: Store JWT tokens in secure cookies.
- **Email Verification**: Send verification emails to users upon registration.
- **Password Reset**: Enable users to reset their passwords via email.
- **Middleware Route Protection**: Protect routes from unauthorized access.
- **Integration with Appwrite**: Utilize Appwrite for backend services.
- **Deployment to Vercel**: Guide for deploying the application to Vercel.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/nextjs-auth-mongodb-appwrite.git
    ```
2. Navigate to the project directory:
    ```sh
    cd nextjs-auth-mongodb-appwrite
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up your environment variables:
    - Create a `.env.local` file in the root of your project.
    - Add the necessary environment variables as per your configuration (e.g., MongoDB URI, JWT secret, Appwrite credentials).

5. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new user or log in with an existing account.
3. Explore the features like email verification, password reset, and route protection.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature-name
    ```
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Project Link

You can access the deployed project at: [https://nextjs-auth-mongodb-appwrite.vercel.app/login](https://nextjs-auth-mongodb-appwrite.vercel.app/login)

