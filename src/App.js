import React from 'react';
import './App.css';
import JSONcomponent from './components/JSONcomponent';
import {connect} from "react-redux";

const App = (props) => {
  let data = null;
  try {
    data = JSON.parse(props.JSON)
  } catch(X) {
    data = null
  }
  return (
      <div>
        <JSONcomponent JSON={data || {error:"Malformed JSON"}} isFolded={false}/>
        <div>
          <textarea onChange={val => props.putJSON(val.target.value)} value={props.JSON}/>
          <textarea onChange={val => props.putParser(val.target.value)} value={props.parser}/>
        </div>
      </div>
      );
}

const mapState = state => {
  return {
    JSON: state.JSON
  }
}
const mapDispatch = dispatch => {
  return {
    putJSON: value => dispatch({type: "PUTJSON", value}),
    putParser: value => dispatch({type: "PUTPARSER", value})
  }
}

export default connect(mapState, mapDispatch)(App);
