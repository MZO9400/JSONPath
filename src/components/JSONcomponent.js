import React from 'react';
import './JSONcomponent.css'
const json_verify = function(s){ try { return typeof s == 'object' } catch (e) { return false; }};
const JSONcomponent = props => {
    return (
        <div className={'JSON'}>
            <span>{"{"}</span>
            <div className={'JSONChildren'}>
                {Object.keys(props.JSON).map((it, key) => (
                    Array.isArray(props.JSON[it])
                        ?
                        <div className={'JSONChildren'} key={key}>
                            <span>{it}: </span>
                            <span>{"["}</span>
                            {props.JSON[it].map((subarray, subkey) => (
                                json_verify(subarray)
                                    ? <JSONcomponent key={key + subkey} JSON={subarray} />
                                    : <li key={key + subkey}>{subarray}<span>{","}</span></li>
                            ))}
                            <span>{"],"}</span>
                        </div>
                        : json_verify(props.JSON[it])
                        ? <ul key={key}><span>"{it}"</span>: <JSONcomponent JSON={props.JSON[it]} /><span>{","}</span></ul>
                        : <li key={key}><span>"{it}"</span>: {props.JSON[it]}<span>{","}</span></li>
                    ))}
            </div>
            <span>{"},"}</span>
        </div>
    );
}

export default JSONcomponent