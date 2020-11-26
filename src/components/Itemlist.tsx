import React from 'react';
import {Item} from '../App'

interface props{
  itemList?:Item[] | null
}

const ItemList:React.FC<props> = (props:props) =>{



  return <div>
      {
        props.itemList.map(item=><p>{item.itemName}</p>)
      }
    </div>;
}

export default ItemList;
