import React from 'react';
import { Item } from '../App'
import SingleItem from './SingleItem';

interface props {
  itemList?: Item[] | null,
  handleDone : (index:number)=>void,
  handleRemove : (index:number)=>void
}

const ItemList: React.FC<props> = (props: props) => {
  return <div className="flex flex-col w-full">
    {
      props.itemList.map((item,index) => {
        return <SingleItem item={item} handleDone={props.handleDone} handleRemove={props.handleRemove} index={index}/>
      })
    }
  </div>;
}

export default ItemList;
