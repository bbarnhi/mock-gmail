import React from 'react';
import logo from './logo.svg';
import './App.css';

///////////////////////////////////////
// Basic Requirements
// View all of my email messages (subject line + sender)
// View one of my email messages with all of its details
// Send an email
// Search for a specific email by subject
///////////////////////////////////
// Advanced Requirements 
// Sort my emails by date
// Delete an email that I no longer need
// Search for a specific email by sender
////////////////////////////////////////

///////////Psuedo Code -- Basic Functionality
// Main Page with a list of emails.
//  Each items in the list has the subject line + sender
//  Enable user to click on email.
//
//  Search box that filters mainpage emails based on user input as an "indexOf" subject
/////////
// Subpage(1) Single Email
//   Expands the clicked email
//   Contains additional data (subject, sender, content (at minumum))
/////////
// Subpage(2) Send Email
//   Opens a blank form with minimum 3 fields  (TO:, Subject:, Body:)
//   Send button that onclick processes email.
// /////////



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
