/**
 * @param {character[][]} board
 * @return {boolean}
 */

 function notInRow(arr,row){
    
    let st=new Set()
    
    for(let i=0;i<9;i++){
        if(st.has(arr[row][i])){
            return false
        }
        
        if(arr[row][i]!='.'){
            st.add(arr[row][i])
        }
    }
    
    return true
}

function notInCol(arr,col){
    let st=new Set()
    
    for(let i=0;i<9;i++){
        if(st.has(arr[i][col])){
            return false
        }
        
        if(arr[i][col]!='.'){
            st.add(arr[i][col])
        }
    }
    
    return true
}

function notInBox(arr,srow,scol){
    let st=new Set()
    
    for(let row=0;row<3;row++){
        for(let col=0;col<3;col++){
            
            let cur=arr[row+srow][col+scol] 
            
        if(st.has(cur)){
            return false
        }
        
        if(cur!='.'){
            st.add(cur)
        }
        }
    }
    
    return true
}

function isValidCheck(arr,row,col){
    return notInRow(arr,row) && notInCol(arr,col) && notInBox(arr,row-row%3,col-col%3)
}

var isValidSudoku = function(board) {
    let n= board.length
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(!isValidCheck(board,i,j)){
                return false
            }
        }
    }
    return true
};