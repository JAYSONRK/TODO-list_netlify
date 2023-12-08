import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Items = (prop) => {
   
    return (<>
        <div className="list"><button className="delete" onClick={() => {
        prop.onSelect(prop.id)}}><DeleteOutlineIcon/></button> <li >{prop.text}</li></div>
      </>)
}

export default Items;