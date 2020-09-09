import React from 'react';
import './App.css';
import JSONcomponent from './components/JSONcomponent';
import {connect} from "react-redux";
import ArrayComponent from "./components/ArrayComponent";
import jp from 'jsonpath';

const App = (props) => {
    let data;
    let parsed;
    try {
        data = JSON.parse(props.JSON)
    } catch (X) {
        data = null;
    }
    const Component = Array.isArray(data) && data[0] ? ArrayComponent : JSONcomponent
    try {
        let path = jp.nodes(data, props.parser);
        let json = {};
        parsed = path.map(it => {
            let temp = json;
            for (let i = 1; i < it.path.length; i++) {
                if (!temp[it.path[i]]) temp[it.path[i]] = {};
                temp = temp[it.path[i]];
                if (i + 1 === it.path.length)
                    temp[it.path[it.path.length - 1]] = it.value
            }
            return temp;
        })
    } catch (e) {}
  return (
      <div className={'root'}>
          <div className={'parent'}>
            <Component JSON={data || [{error:"Malformed JSON"}]} isFolded={false}/>
            <ArrayComponent JSON={parsed || [{error:"Malformed JSON"}]} isFolded={false} />
          </div>
        <div className={'parent'}>
          <textarea onChange={val => props.putJSON(val.target.value)} value={props.JSON} placeholder={'JSON data'}/>
          <textarea onChange={val => props.putParser(val.target.value)} value={props.parser} placeholder={'JSONPath data'}/>
        </div>
      </div>
      );
}

const mapState = state => {
  return {
      JSON: state.JSON,
      parser: state.parser
  }
}
const mapDispatch = dispatch => {
  return {
    putJSON: value => dispatch({type: "PUTJSON", value}),
    putParser: value => dispatch({type: "PUTPARSER", value})
  }
}

export default connect(mapState, mapDispatch)(App);
