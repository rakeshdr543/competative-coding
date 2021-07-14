public static void rotate(int arr[], int n, int d){
    int temp[]= new int[d];

     for(int i=0;i<d;i++){
         temp[i]=arr[i];
     }

     for(int i=d;i<n;i++){
         arr[i-d]=arr[i];
     }

     for(int i=0;i<d;i++){
         arr[i+n-d]=temp[i];
     }

}