import React from "react";
import {AutoConsumer} from "../context/auto";

export default function NavConfig () {
    return (
        <AutoConsumer>
            {({automatic, toggleAuto, speed, toggleSpeed}) => (
                <ul className='row bg-white'>
                    <li className='row'>
                        Auto
                        <div className={`barra ${automatic === true ? "automatic" : ""}`} onClick={toggleAuto}>
                            <i className="fas fa-circle circle"></i>
                        </div>
                    </li>
                    {automatic === true && (
                        <li className='row'>
                            <label>Speed</label>
                            <input type='text' id='speed' placeholder='milliseconds' autoComplete='off' value={speed} onChange={toggleSpeed} />
                        </li>
                    )}
                </ul>
            )}
        </AutoConsumer>
    );
}