🌿 GreenNest — Online Plant Shop

GreenNest is a modern and responsive plant shop web application built with React, featuring Firebase Authentication, React Toastify notifications, reusable components, and a smooth user experience. The project follows clean architecture and a scalable folder structure similar to The Book Heaven.



✨ Features

🌱 Browse indoor & outdoor plants

🔍 View detailed plant information

🛒 Add to cart, update quantity, remove items

📂 Filter plants by categories

⭐ Featured plants section

🔐 Firebase Authentication (Email/Password, Google Login)

🔔 React Toastify alerts for user actions

📱 Fully responsive layout

⚡ Smooth UI with reusable components and hooks



🛠️ Tech Stack

React.js

React Router

Firebase Authentication

React Toastify

Tailwind CSS

Context API

Vite



📁 Folder Structure

src/

components/ – Reusable components like PlantCard, Loader, Navbar, etc.

pages/ – Page components like AllPlants, FeaturedPlants, Cart, Login, Register, etc.

Provider/ – Context providers such as AuthContext, CartContext, ThemeContext

Firebase/ – Firebase configuration and utilities

firebase.config.js

assets/ – Images, icons, and static resources

App.jsx – Main application component

index.jsx – Entry point of the application



🔐 Firebase Setup

Create a Firebase/firebase.config.js file:

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);



🔔 React Toastify Setup

In App.jsx:

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* Routes & Components */}
      <ToastContainer />
    </>
  );
}

export default App;


Use a toast anywhere:

import { toast } from "react-toastify";

toast.success("Added to cart!");



🚀 Installation & Setup

Clone the repository:

git clone https://github.com/your-username/GreenNest.git
cd GreenNest


Install dependencies:

npm install


Start development server:

npm run dev

🧪 Build for Production
npm run build



🎯 Purpose

GreenNest demonstrates professional frontend development with React, reusable components, authentication, responsive UI, and clean architecture — perfect for portfolio and learning advanced concepts.

📄 License

This project is open-source under the MIT License.
