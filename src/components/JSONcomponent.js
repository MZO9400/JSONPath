import React from 'react';
import './JSONcomponent.css'
const json_verify = function(s){ try { return typeof s == 'object' } catch (e) { return false; }};
const JSONcomponent = props => {
    const length = Object.keys(props.JSON).length - 1;
    return (
        <div className={'JSON'}>
            <p>{"{"}</p>
            <div className={'JSONChildren'}>
                {Object.keys(props.JSON).map((it, key) => (
                    json_verify(props.JSON[it])
                        ? <p key={key}><span>{it}</span>: <JSONcomponent JSON={props.JSON[it]} /><span>{key >= length ? "" : ","}</span></p>
                        : <p key={key}><span>{it}</span>: {props.JSON[it]}<span>{key >= length ? "" : ","}</span></p>
                    ))}
            </div>
            <p>{"}"}</p>
        </div>
    );
}

export default JSONcomponent