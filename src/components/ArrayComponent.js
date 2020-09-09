import React from "react";
import './styles.css'
import JSONcomponent from "./JSONcomponent";
const json_verify = function(s){ try { return typeof s == 'object' } catch (e) { return false; }};

export default props => {
    const [isFolded, toggleFold] = React.useState(props.isFolded);
    return (
        <div className={`JSONChildren ${isFolded ? 'folded' : ''}`}>
            <div>
                <span className={'parentContainer unselectable'}
                      onClick={() => toggleFold(!isFolded)}>{isFolded ? "+" : "-"}</span>
                <span>{"["}</span>
            </div>
            {(isFolded ? props.JSON.slice(0, 1) : props.JSON).map((subarray, subkey) => (
                json_verify(subarray)
                    ? <JSONcomponent key={subkey} JSON={subarray} isFolded={isFolded}/>
                    : <li className={'JSONChildren'} key={subkey}>{subarray}<span>{isFolded ? "..." : ","}</span></li>
            ))}
            <span>{"],"}</span>
        </div>
    );
}