var maxProfit = function(prices) {
    let start=0;
    let end=prices.length-1;
    
    if(end <= start){
        return 0;
    }
    
    let profit=0;
    
    for(let i=start;i<=end;i++){
        for(let j=i+1;j<i<=end;j++){
            if(prices[j]>prices[i]){
                let fp=prices.slice(start,i-1)
                let sp=prices.slice(j+1,end)
                let curr_profit=prices[j]-prices[i]+maxProfit(fp)+maxProfit(sp)
                
                profit=Math.max(profit,curr_profit)
            }
        }
    }
    return profit
};