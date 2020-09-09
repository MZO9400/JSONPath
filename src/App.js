import React from 'react';
import './App.css';
import JSONcomponent from './components/JSONcomponent';

const JSON = {
  "random": 73,
  "random float": 82.985,
  "bool": false,
  "date": "1990-03-27",
  "regEx": "helloooooooooooooooooooooooooooooooo world",
  "enum": "generator",
  "firstname": "Jerry",
  "lastname": "Brodench",
  "city": "Moscow",
  "country": "Korea, Democratic People\"S Republic of",
  "countryCode": "TF",
  "email uses current data": "Jerry.Brodench@gmail.com",
  "email from expression": "Jerry.Brodench@yopmail.com",
  "array": [
    "Olwen",
    "Jenilee",
    "Elyssa",
    "Malina",
    "Jolyn"
  ],
  "array of objects": [
    {
      "index": 0,
      "index start at 5": 5
    },
    {
      "index": 1,
      "index start at 5": 6
    },
    {
      "index": 2,
      "index start at 5": 7
    }
  ]
}

function App() {
  return <JSONcomponent JSON={JSON}/>;
}

export default App;
