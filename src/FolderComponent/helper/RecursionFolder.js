
import { FaFolder } from "react-icons/fa";
import { useState } from "react";

import originalData from "../data/formData"
import { useHandleFormData } from "../data/handleFormData";

export default function RecursionFolder({explorer,clickedOutside,setClickedOutside}){
    const[clickedIndex,setClickedIndex]=useState(-1)
    const[enableAddData,setEnableAddData]=useState("")
    const[itemName,setItemName]=useState("")
    const[isFolder,setIsFolder]=useState(false)
const handleFormData=useHandleFormData()
    const folderImage=<FaFolder className=" text-yellow-500 ml-2"/>
  
  

    return(
        <>
           {explorer.name && (
            <>
            {explorer.isFolder ? (
                <div  key={explorer.id} className="w-max">
                 <div className="flex justify-center items-center gap-3 bg-gray-200 w-max p-2 rounded-lg ml-4 m-2 cursor-pointer"
                 onClick={(e)=>{
                    setClickedIndex((prev)=>prev==explorer.id ? -1 :explorer.id)
                    e.stopPropagation()
                 }}>
                    {folderImage}{explorer.name}

                  <p className="text-black text-[12px] rounded-lg w-max p-2 bg-white cursor-pointer"
                  onClick={
                    (e)=>{
                        setEnableAddData(explorer.id)
                        setIsFolder(true)
                        setClickedOutside(false)
                        e.stopPropagation()
                    }
                    
                  }>+ Add Folder</p>

                  <p className="text-black text-[12px] rounded-lg w-max p-2 bg-white cursor-pointer "
                   onClick={
                    (e)=>{
                        setEnableAddData(explorer.id)
                        setIsFolder(false)
                        setClickedOutside(false)
                        e.stopPropagation()
                    }
                    
                  }>+ Add File</p>

                 </div>

                 
                 {enableAddData==explorer.id && !clickedOutside && (
                    <input name="textName"  className="p-2 bg-gray-100 ml-6 rounded-lg" onChange={(e)=>{
                        setItemName(e.target.value)
                        
                    }} onKeyDown={(e)=>{
                        if(e.key=="Enter"){
                    handleFormData(explorer.id,itemName,originalData,isFolder)
                setEnableAddData(-1)
                setClickedIndex(explorer.id)
               
                        }
                  }}
                    onClick={(e)=>  e.stopPropagation()}
                    />

                  )}


                 {clickedIndex==explorer.id &&(
                    <div className="m-2 ml-4">
                        {explorer.items && explorer.items.map((item)=>(
                        <RecursionFolder explorer={item} clickedOutside={clickedOutside} setClickedOutside={setClickedOutside}/>
                        ))}
                </div>
                 )}
               
                
                </div>
            ):(
                <>
                <p className="ml-4 m-1 bg-gray-50 w-max p-2 rounded-lg">{explorer.name}</p>
                </>
            )}
            </>
           )}
          
        </>
    )
}