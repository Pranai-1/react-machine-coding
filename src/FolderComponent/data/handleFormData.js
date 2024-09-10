const useHandleFormData=()=>{

  function handleFormData(index,itemName,explorer,isFolder){
 
  if(explorer.id==index){
   if(isFolder)
    explorer.items.unshift({
        id:Math.ceil(Math.random()*100)+"",
        name: itemName,
        isFolder,
        items: []
    })
    else
    explorer.items.push({
      id:Math.ceil(Math.random()*100)+"",
      name: itemName,
      isFolder,
      items: []
  })

        return;
  }else{
    explorer.items.map((item)=> handleFormData(index,itemName,item,isFolder))
   
  }
}


  return handleFormData
}
export {useHandleFormData}