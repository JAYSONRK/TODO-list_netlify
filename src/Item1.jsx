import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Item1= (prop) => {
   const [line, setLine] = useState(false);
   const cutIt = () => {
    setLine(true);
   }
    return (<>
        <div className="list">
            <button className="delete" onClick={cutIt}><DeleteOutlineIcon/></button> 
            <li style={{textDecoration : line ? "line-through": "none"}}>{prop.text}</li>
        </div>
      </>)
}

export default Item1;