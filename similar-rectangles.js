function nearlySimilarRectangles(sides) {
    // Write your code here
    let rows=sides.length;
    let count=0;
    
    for(let i=0;i<rows;i++){
        for(let j=i+1;j<rows;j++){
            
            if((sides[i][0]*sides[j][1])===(sides[i][1]*sides[j][0])){
                count+=1
            }
        }
    }
return count
}