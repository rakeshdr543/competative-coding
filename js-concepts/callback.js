const arr = [1, 2, 3, 4, 5];

const modifyArray=(arr,callback)=>{
  arr.push(10)
  callback()
}

modifyArray(arr,()=>{console.log('modified array',arr)})