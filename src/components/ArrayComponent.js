import React from "react";
import JSONcomponent from "./JSONcomponent";
import './styles.css'
const json_verify = function(s){ try { return typeof s == 'object' } catch (e) { return false; }};

export default props => {
    const [isFolded, toggleFold] = React.useState(false);
    return (
        <div className={'JSONChildren'}>
            <div>
                <span className={'parentContainer unselectable'}
                      onClick={() => toggleFold(!isFolded)}>{isFolded ? "+" : "-"}</span>
                <span>{"["}</span>
            </div>
            {isFolded
                ?
                json_verify(props.JSON[0])
                    ? <JSONcomponent key={props.JSON[0]} JSON={props.JSON[0]}/>
                    : <li className={'JSONChildren'} key={props.JSON[0]}>{props.JSON[0]}<span>{" ..."}</span></li>
                : props.JSON.map((subarray, subkey) => (
                json_verify(subarray)
                    ? <JSONcomponent key={subkey} JSON={subarray}/>
                    : <li className={'JSONChildren'} key={subkey}>{subarray}<span>{","}</span></li>
            ))}
            <span>{"],"}</span>
        </div>
    );
}