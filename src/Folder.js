import { useState } from "react";

import explorer from "./data/formData";
import RecursionFolder from "./helper/RecursionFolder";

export default function Folder(){

const[clickedOutside,setClickedOutside]=useState(false)
   
      
       
 
    return(
        <div onClick={()=>setClickedOutside(true)}>
        <p className="text-red-600 text-xl font-medium p-2 flex justify-center items-center w-full"> Welcome to folder structure</p>
     
        <RecursionFolder explorer={explorer} clickedOutside={clickedOutside} setClickedOutside={setClickedOutside}/>
      
        </div>
    )


  
}