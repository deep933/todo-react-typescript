import React, {useState } from 'react';
import ItemList from './components/Itemlist';

export interface Item{
  itemName?:string,
  done?:boolean
}

const App:React.FC = () =>{
  const [item,setItem] = useState<Item | null>(null)
  const [itemList,setItemList] = useState<Item[]|null>([{itemName:"dsd",done:false}])

  return <div>
    <input value={item?.itemName} onChange={e=>setItem({itemName:e.target.value,done:false})}/>
    <button onClick={()=>setItemList(oldItem=>[...oldItem,item])}>ADD</button>

    <ItemList itemList={itemList}/>
    </div>;
}

export default App;