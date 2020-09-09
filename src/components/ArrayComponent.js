import React from "react";
import JSONcomponent from "./JSONcomponent";
import './JSONcomponent.css'
const json_verify = function(s){ try { return typeof s == 'object' } catch (e) { return false; }};

export default props => (
    <div className={'JSONChildren'}>
        <span>{props.it}: </span>
        <span>{"["}</span>
        {props.JSON.map((subarray, subkey) => (
            json_verify(subarray)
                ? <JSONcomponent key={subkey} JSON={subarray} />
                : <li key={subkey}>{subarray}<span>{","}</span></li>
        ))}
        <span>{"],"}</span>
    </div>
)