import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj8sXZm7Zo7tCZ8ER5-Ud4cseFHuF5e0s",
  authDomain: "wedding-q.firebaseapp.com",
  projectId: "wedding-q",
  storageBucket: "wedding-q.appspot.com",
  messagingSenderId: "668039281071",
  appId: "1:668039281071:web:7f4921a6b504588a7f575a",
  measurementId: "G-77Z35ZZPSY"
};

function App() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wedding Kyoutae Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
