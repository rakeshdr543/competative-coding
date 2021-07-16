function numberOfRoofs(arr)
  {
     let n = arr.length;
     let count =1;

     let curr_max=arr[0]

      for(let i=1;i<n;i++){
         if( arr[i]>curr_max){
            count++;
            curr_max=arr[i]
         }
      }

    return count;
  }