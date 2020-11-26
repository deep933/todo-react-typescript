import React, { useEffect, useRef, useState } from 'react';
import ItemList from './components/Itemlist';
import './App.css'
import { doesNotReject } from 'assert';
import DownloadBtn from './components/DownloadBtn';

export interface Item{
  itemName?:string,
  done?:boolean
}

const App:React.FC = () =>{
  const [item,setItem] = useState<Item | null>(null)
  const [itemList,setItemList] = useState<Item[]|null>([])
  const inputref = useRef(null)

  const handleItemAddition = ()=>{
    if(inputref.current.value){
    setItemList(oldItem=>[...oldItem,item])
    setItem(null)
    inputref.current.value = ""
    }
    }

  const handleDone = (index:number) =>{
    setItemList(itemList.map((item,i)=>{
      return i===index?{...item,done:!item.done}:item
    }))
  }

  const handleRemove = (index:number) =>{
    setItemList(itemList.filter((item,i)=>{
      return i!==index
    }))
  }

  useEffect(()=>{
console.log(itemList)
  },[itemList])


  return <div className="flex flex-col w-400 mt-4">
  <div className="w-full flex flex-row">
    <input ref={inputref} value={item?.itemName} placeholder="Add Todo Item" onChange={e=>setItem({itemName:e.target.value,done:false})} className=" block w-full h-12 px-4 py-3 text-base appearance-none border-2 border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-purple-300"/>
    <button onClick={handleItemAddition} className="ml-2 h-12 block border border-transparent px-6 py-3 text-base font-semibold bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600">ADD</button>
    </div>
    <ItemList itemList={itemList} handleDone={handleDone} handleRemove={handleRemove}/>
    <DownloadBtn itemList={itemList}/>
    </div>;
}

export default App;