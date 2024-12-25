import React from 'react'
import Popup from "./Popup"

const ListItem = () => {
  return (
    <div><ol>
    <li>
        <input type="checkbox">
        
        </input>
        <span>
        goal
        </span>
        <button className="planButton"> Plan
        </button>
        <button> 🔺
        </button>
        <button> 🔻
        </button>
        <Popup trigger={false}>
            <h3>
            Hi
            </h3>
        </Popup>

    </li>
    </ol>

    </div>
  )
}

export default ListItem