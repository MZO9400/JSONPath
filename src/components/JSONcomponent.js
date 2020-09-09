import React from 'react';
import './styles.css'
import ArrayComponent from "./ArrayComponent";
const json_verify = function(s){ try { return typeof s == 'object' } catch (e) { return false; }};
const JSONcomponent = props => {
    const [isFolded, toggleFold] = React.useState(false);
    const key = Object.keys(props.JSON)[0];
    return (
        <div className={'JSON'}>
            <div>
                <span className={'parentContainer unselectable'} onClick={() => toggleFold(!isFolded)}>{isFolded ? "+" : "-"}</span>
                <span>{"{"}</span>
            </div>
            <div className={'JSONChildren'}>
                {isFolded
                    ? Array.isArray(props.JSON[key])
                        ?
                        <div className={'JSON'} key={key}>
                            <span>{key}: </span> <ArrayComponent it={0} JSON={props.JSON[key]} />
                        </div>
                        : json_verify(props.JSON[key])
                        ? <ul key={0}><span>"{key}"</span>: <JSONcomponent JSON={props.JSON[key]} /><span>{" ..."}</span></ul>
                        : <li key={0}><span>"{key}"</span>: {props.JSON[key].toString()}<span>{" ..."}</span></li>
                    : Object.keys(props.JSON).map((it, key) => (
                    Array.isArray(props.JSON[it])
                        ?
                        <div className={'JSON'} key={key}>
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