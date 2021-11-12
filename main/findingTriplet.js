
let array=[1,2,4,5,6,7]
let k=12


function findTriplet(arr,sum){
  
  let s=new Set()
  
  for(let i=0;i<arr.length-2;i++){
    let cur_sum=sum-arr[i]
    for(let j=i+1;j<arr.length;j++){
      if(s.has(cur_sum-arr[j])){
        return [array[i],array[j],cur_sum-arr[j]]
      }
      s.add(array[j])
    }
  }
}

console.log(findTriplet(array,k))