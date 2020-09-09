import React from 'react';
import './JSONcomponent.css'
import ArrayComponent from "./ArrayComponent";
const json_verify = function(s){ try { return typeof s == 'object' } catch (e) { return false; }};
const JSONcomponent = props => {
    return (
        <div className={'JSON'}>
            <span>{"{"}</span>
            <div className={'JSONChildren'}>
                {Object.keys(props.JSON).map((it, key) => (
                    Array.isArray(props.JSON[it])
                        ?
                        <div key={key}>
                            <span>{it}: </span> <ArrayComponent it={it} JSON={props.JSON[it]} />
                        </div>
                        : json_verify(props.JSON[it])
                        ? <ul key={key}><span>"{it}"</span>: <JSONcomponent JSON={props.JSON[it]} /><span>{","}</span></ul>
                        : <li key={key}><span>"{it}"</span>: {props.JSON[it].toString()}<span>{","}</span></li>
                    ))}
            </div>
            <span>{"},"}</span>
        </div>
    );
}

export default JSONcomponent