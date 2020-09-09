import React from 'react';
import './styles.css'
import ArrayComponent from "./ArrayComponent";
const json_verify = function(s){ try { return typeof s == 'object' } catch (e) { return false; }};
const JSONcomponent = props => {
    const [isFolded, toggleFold] = React.useState(props.isFolded);
    return (
        <div className={`JSON ${isFolded ? 'folded' : ''}`}>
            <div>
                <span className={'parentContainer unselectable'} onClick={() => toggleFold(!isFolded)}>{isFolded ? "+" : "-"}</span>
                <span>{"{"}</span>
            </div>
            <div className={'JSONChildren'}>
                {(isFolded ? Object.keys(props.JSON).slice(0, 1) : Object.keys(props.JSON)).map((it, key) => (
                    Array.isArray(props.JSON[it])
                        ?
                        <div className={'JSON'} key={key}>
                            <span>{it}: </span> <ArrayComponent it={it} JSON={props.JSON[it]} isFolded={isFolded} />
                        </div>
                        : json_verify(props.JSON[it])
                        ? <ul key={key}><span>"{it}"</span>: <JSONcomponent JSON={props.JSON[it]} isFolded={isFolded} /><span>{isFolded ? "..." : ","}</span></ul>
                        : <li key={key}><span>"{it}"</span>: {props.JSON[it].toString()}<span>{isFolded ? "..." : ","}</span></li>
                    ))}
            </div>
            <span>{"},"}</span>
        </div>
    );
}

export default JSONcomponent