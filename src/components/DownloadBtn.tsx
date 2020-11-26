import React from 'react'
import {Item} from '../App'

interface props{
    itemList : Item[]
}

const DownloadBtn:React.FC<props> = (props:props) =>{

    const handleDownload= () =>{
        const element = document.createElement("a");
        const file = new Blob(props.itemList.map(item=>`${item.itemName}\n`),    
                    {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "list.txt";
        document.body.appendChild(element);
        element.click();

    }

    return props.itemList.length!==0 ? <button className="text-purple-500 outline-none focus:outline-none" onClick={handleDownload}>Download List</button> : <div></div>

}

export default DownloadBtn;