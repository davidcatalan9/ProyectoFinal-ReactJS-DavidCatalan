import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ErrorBoundary from './components/ErrorBoundary.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXIQpW6ilcSJh_qKZU7_GjHjWXg7UM-DI",
  authDomain: "reatjs-1169c.firebaseapp.com",
  projectId: "reatjs-1169c",
  storageBucket: "reatjs-1169c.appspot.com",
  messagingSenderId: "640594661038",
  appId: "1:640594661038:web:7b446d8f698e138842a73f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
