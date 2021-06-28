function getFinalOpenedDoors(numDoors) {
    let doors=Array.from({length:numDoors}).map((i)=>false) 
    
      for(let i=1;i<=numDoors;i++){
        for(let j=0;j<numDoors;j++){
          if((j+1)%i===0){
            doors[j]=!doors[j]
          }
        }
      }
    
      doors=doors.reduce((array,item,index)=>{
        if(item===true){
          array.push(index+1)
        }
        return array
      },[])
    
      return doors
    }

getFinalOpenedDoors(4);