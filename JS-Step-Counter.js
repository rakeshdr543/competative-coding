function getFixedCounter(k) {
  // write your code here
  return {
      value:0,
      increment:function() {
        return this.value += k
       },
       decrement:function() {
        return this.value -= k
       },
       getValue:function() {
        return this.value
       }
  }
}