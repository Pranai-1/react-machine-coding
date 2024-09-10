const useHandleFormData=()=>{

  function handleFormData(index,itemName,explorer,isFolder){
   console.log(isFolder,explorer)
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
    console.log(explorer)
        return;
  }else{
    explorer.items.map((item)=> handleFormData(index,itemName,item,isFolder))
   
  }
}


  return handleFormData
}
export {useHandleFormData}