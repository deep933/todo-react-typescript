import React, { useEffect } from 'react';
import { Item } from '../App'

interface props {
  item: Item,
  handleDone: (index: number) => void,
  handleRemove: (index: number) => void,
  index: number
}


const SingleItem: React.FC<props> = (props: props) => {

  useEffect(() => {
    console.log(props)
  }, [props])
  return <div className="flex flex-row justify-between bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-sm pt-3 pb-3 pl-3 mt-2 mb-2">
    <label className="inline-flex items-center w-full">
      {props.item.done ?
        <input type="checkbox" onChange={e => props.handleDone(props.index)} className="form-checkbox text-purple-600 w-5 h-5 border-solid border-gray-400 border rounded-md" checked />
        :
        <input type="checkbox" onChange={e => props.handleDone(props.index)} className="form-checkbox text-purple-600 w-5 h-5 border-solid border-gray-400 border rounded-md" />
      }
      <span className={props.item.done ? "ml-2 text-purple-600 line-through" : "ml-2 text-purple-600"}>{props.item.itemName}</span>
    </label>
    <button className="float-right mr-3 bg-transparent text-xs outline-none focus:outline-none text-gray-400" onClick={e => props.handleRemove(props.index)}>Remove</button>

  </div>
}

export default SingleItem;
