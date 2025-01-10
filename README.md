# React Firebase Authentication Project

## Overview
This project is a user authentication system built using **React** and **Firebase**. It allows users to create an account, log in using email and password, or authenticate using Google or GitHub. The project uses Firebase Authentication and Firestore for storing user data.

---

## Features
- **Sign Up**: Create a new account using email and password.
- **Login**: Login with existing credentials.
- **OAuth Integration**: Authenticate using Google and GitHub.
- **Firestore Integration**: Store user data in Firestore.
- **Dynamic UI**: Conditional rendering based on authentication state.

---

## Tech Stack
- **Frontend**: React.js
- **Backend**: Firebase Authentication, Firestore
- **Styling**: TailwindCSS

---

## Project Structure
```
src/
|-- assets/
|   |-- google-logo.svg
|   |-- github-logo.svg
|-- components/
|   |-- Login.js
|-- firebaseConfig.js
|-- App.js
|-- index.js
```

### Key Files
- **`Login.js`**: Contains the main logic for user authentication.
- **`firebaseConfig.js`**: Firebase configuration file.

---

## Installation

### Prerequisites
- Node.js installed
- Firebase project created

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Go to your [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Enable Authentication (Email/Password, Google, GitHub).
   - Create a Firestore database.
   - Copy your Firebase configuration and replace the placeholder in `firebaseConfig.js`:
     ```javascript
     import { initializeApp } from "firebase/app";

     const firebaseConfig = {
       apiKey: "<YOUR_API_KEY>",
       authDomain: "<YOUR_AUTH_DOMAIN>",
       projectId: "<YOUR_PROJECT_ID>",
       storageBucket: "<YOUR_STORAGE_BUCKET>",
       messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
       appId: "<YOUR_APP_ID>"
     };

     const app = initializeApp(firebaseConfig);
     export { app };
     ```

4. Start the development server:
   ```bash
   npm start
   ```

---

## Usage
### Running Locally
1. Open the application in the browser (default: [http://localhost:3000](http://localhost:3000)).
2. Navigate between "Sign Up" and "Login" to authenticate.
3. Use Google or GitHub buttons for OAuth login.

### Firebase Firestore
User data (email and password) will be stored in the `users` collection in Firestore.

---

## Screenshots
### Sign-Up Page
![Sign-Up Page](#)

### Login Page
![Login Page](#)

---

## Issues and Improvements
- Implement password reset functionality.
- Improve error handling for authentication failures.
- Add user session management.
- Enhance UI/UX for better user experience.

---

## Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

---

## License
This project is licensed under the MIT License.

