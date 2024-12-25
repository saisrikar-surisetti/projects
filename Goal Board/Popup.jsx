import React from 'react'
import "./Popup.css"
import { useState } from 'react';

function Popup(props) {
const [close, setClose] = useState(false);
function switchState(){
    setClose(!close)
}

  return (props.trigger)? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>
                ❌
            </button>
            {props.children }
        </div>
    </div>
  ) : "";
}

export default Popup