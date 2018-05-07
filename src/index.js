import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'
import axios from 'axios'

var company = "uniqmarketing";
var key = "hunt729wood";
 
var base64 = new Buffer(key + ":xxx").toString("base64");
 
var options = {
    hostname: company + ".teamwork.com",
    path: "/projects.json",
    method: "GET",
    headers: {
        "Authorization": "BASIC " + base64,
        "Content-Type": "application/json"
    }
};
 

axios({
    method: 'get',
    url: 'https://uniqmarketing.teamwork.com/',
    headers: {
        "Authorization": "BASIC " + base64,
        "Content-Type": "application/json" 
    }
}).then(function(response){
    console.log(response)
}).catch(function(error){
    console.log(error)
})
console.log('TEST')
var config = {
    apiKey: "AIzaSyBIqXrxKbqba5kIjmvFS5j43_FdwpELCCY",
    authDomain: "nebula-ja.firebaseapp.com",
    databaseURL: "https://nebula-ja.firebaseio.com",
    projectId: "nebula-ja",
    storageBucket: "",
    messagingSenderId: "821033548369"
  };
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
