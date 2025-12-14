# AI Chatbot Application 🤖💬

This project is a full-stack application featuring user authentication, 2FA, and a real-time chat interface. It allows users to register, log in securely, enable two-factor authentication for enhanced security, and communicate with others through a chat interface. The application leverages modern technologies like Next.js, React, Express, and MongoDB to provide a seamless and engaging user experience.

## 🚀 Key Features

- **User Authentication:** Secure registration and login functionality with email and password.
- **Two-Factor Authentication (2FA):** Enhanced security through 2FA using OTP (One-Time Password) verification.
- **Real-time Chat Interface:** Enables users to communicate with each other in real-time.
- **User Profile:** Displays user profile information.
- **Session Management:** Manages user sessions to maintain authentication state.
- **Password Visibility Toggle:** Allows users to toggle password visibility during registration and login.
- **Error Handling:** Provides informative error messages for various scenarios, such as invalid credentials or existing email addresses.
- **API Endpoints:** Well-defined API endpoints for user authentication, 2FA, and other functionalities.

## 🛠️ Tech Stack

- **Frontend:**
    -   Next.js
    -   React
    -   React Hooks (useState, useEffect)
    -   `next/navigation`
    -   `next/image`
    -   `react-icons`
- **Backend:**
    -   Node.js
    -   Express
    -   Mongoose
    -   `cors`
    -   `morgan`
    -   `dotenv`
- **Database:**
    -   MongoDB
- **Authentication & Security:**
    -   `bcrypt` (Password Hashing)
    -   `otpauth` (TOTP Generation and Verification)
    -   `qrcode` (QR Code Generation)
- **Utilities:**
    -   `validator`
    -   `hi-base32`
- **Build Tools:**
    -   npm

## 📦 Getting Started

### Prerequisites

- Node.js (>=18)
- npm (>=8)
- MongoDB installed and running
- An email service configured for sending OTPs (e.g., SendGrid, Mailgun)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install dependencies for both client and server:**

    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3.  **Configure environment variables:**

    -   Create a `.env` file in the `server` directory.
    -   Add the following environment variables:

        ```
        MONGO_URI=<your_mongodb_connection_string>
        PORT=5000
        JWT_SECRET=<your_jwt_secret>
        EMAIL_USER=<your_email_address>
        EMAIL_PASS=<your_email_password>
        BASE_URL=<your_frontend_url> (e.g., http://localhost:3000)
        ```

    -   Create a `.env` file in the `client` directory.
    -   Add the following environment variables:

        ```
        NEXT_PUBLIC_BASE_URL=<your_backend_url> (e.g., http://localhost:5000)
        ```

### Running Locally

1.  **Start the backend server:**

    ```bash
    cd server
    npm run dev
    ```

2.  **Start the frontend development server:**

    ```bash
    cd client
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 💻 Project Structure

```
📂 ai-chatbot-app
├── client/
│   ├── next.config.mjs
│   ├── src/
│   │   ├── app/
│   │   │   ├── (Components)/
│   │   │   │   ├── checkSession.tsx
│   │   │   │   ├── HomePage.tsx
│   │   │   │   └── Navbar.tsx
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── services.ts
│   │   └── ...
│   ├── public/
│   └── ...
├── server/
│   ├── index.ts
│   ├── src/
│   │   ├── configs/
│   │   │   └── mongo.ts
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   └── index.ts
│   │   ├── models/
│   │   │   └── user.ts
│   │   ├── routes/
│   │   │   ├── auth.route.ts
│   │   │   └── index.ts
│   │   ├── server.ts
│   │   └── ...
│   ├── .env
│   └── ...
├── README.md
├── package.json
└── ...
```


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 💖 Thanks

Thank you for checking out this project! We hope you find it useful.
