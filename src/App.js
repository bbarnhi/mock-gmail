import React from 'react';
// import logo from './logo.svg';
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
//  Fetch data from USAF-sdi-react-checkpoint
//  Example email -- from http://localhost:3001/emails
//      {
//        "sender": "katie@galvanize.com", 
//        "recipient": "jane@galvanize.com" , 
//        "subject": "Standup meeting", 
//        "message": "Mr. and Mrs. Dursley, of number four, Privet Drive, wereproud to say that they were perfectly normal, thankyou very much." , 
//        "date": "2020-08-23T18:25:43.511Z", 
//        "id": 1
//      }
//
////////////
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

// var fetch = require('node-fetch') 
//no idea what this is supposed to do commenting out till needed. 

// Setup Class constructor for an email
class Email extends React.Component{
  constructor(props){
    super(props)
    // things to fetch
    console.log("Made it to ClassBuilder")
    this.state ={
      data: null
    }
    this.sender = null;
    this.recipient = null;
    this.subject = null;
    this.message = null;
    this.date = null;
    this.id = null;  //primary key
    //  call fetch?
    this.fetchEmails = this.fetchEmails.bind(this)  //why is this needed?
    this.fetchEmails()
  }

async fetchEmails(){ 
  console.log("Made it to fetchEmails function")
  // Magic youTube example setup
  // const url = "http://localhost:3001/emails";     // THIS BREAKS
  // // const url = "https://api.randomuser.me/";    ///THIS WORKS
  // const response = await fetch(url);
  // const data = await response.json();
  // console.log(data);


  //back to basics... fetch setup 
  fetch('http://localhost:3001/emails') ///THIS BREAKS
  //fetch('https://api.randomuser.me/') // THIS WORKS
  .then(response => response.json())
  .then(data => console.log(data));

  //whats different in the data sets.  Emails is an Array of objects.   Randomuser is just 1 object. 


//   //console.log("response: " + response)
// //  let data = await response.json();
//   //let data = response.json();
//   // should populate data with an Array of 19 Objects each with 6 properties 
//   console.log("data array: " + this.data)
//   console.log("data array: " + this.sender)
//   // set this data for incoming emails
//   // this.sender = data.sender;
//   // this.recipient = data.recipient;
//   // this.subject = data.subject;
//   // this.message = data.message;
//   // this.date = data.date;
//   // this.id = data.id;
//   console.log(this.sender)
}

// Onlick filter returned emails based on this.sender
filterSender(event){
  console.log("Made it to filterSender function")
  let currentFilter = this.sender
  // no idea how to implent this -- search through fetch emails based on indexOf(passed sender name)
  //return emails.indexOf(currentFilter)
}
openEmail(event){
  console.log("Made it to openEmail function")
  let currentEmail = this.id //grab the id of the selected email
  //open a modul with 4 rows
  /*<div>
     <div>{this.subject} </div>
    <div>{this.sender}</div><div>{this.date}</div>
    <div>{this.message}</div>
    <button>Reply</button><button>Reply All</button><button>Forward</button><button>Delete</button>
  </div> */
}
newEmail(event){
  console.log("Made it to newEmail function")
  //open modul with 3 forms + submit button
  // <div>
  //   <form className="recipient"></form>
  //   <form className="subject"></form>
  //   <form className="message"></form>
  //   <button>Submit</button><button>Cancel</button>
  // </div>
}

//Screen needs to be split into chunks
// TITLE    | Search  | TEXT-FORM  BOX  |
// --------------------------------------
// Verticle |[  Sender | Subject  | Date |  ] - Item 1
// Compose  |[  Sender | Subject  | Date |  ] - Item 2
//   new    |[  Sender | Subject  | Date |  ] - Item 3
//   email  |[  Sender | Subject  | Date |  ] - Item 4
// Folders? |[  Sender | Subject  | Date |  ] - Item 5

//       http://localhost:3001/emails.id[1]
render() {
  console.log("Made it to Render function")
  return (
    <div>
      <div> <h1>Barnhill Email Systems </h1>
      <div className="searchBar"></div>
      <div className="mainEmail">
        <div className="col1 sender" onClick={this.filterSender}>Sender: {this.sender}</div>
        <div className="col2 subject" onClick={this.openEmail}>Subject: {this.subject}</div>
        <div className="col3 date">Date: {this.date}</div>
      </div>
      <div className="newEmail">
        <button onClick={this.newEmail}>Compose</button>
      </div>

      </div>
    </div>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
};
export default Email;
