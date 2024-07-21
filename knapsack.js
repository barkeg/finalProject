function knapsack(weightCap, weights, values) {
    // Write your code here
    let high = 0;
  
    for(let i = 0; i < weights.length; i++){
      let cap = weights[i];//3
      let val = values[i]; //70
      let newCap = weights[i]; //3
      let newVal = values[i];
      for(let j = i + 1; j < weights.length; j++){
        if(cap < weightCap && cap + weights[j] <= weightCap){
          cap += weights[j];
          val += values[j];
        }else if(newCap + weights[j] <= weightCap){
          cap = newCap + weights[j];
          val = newVal + values[j];
        }
        if(val > high){
          high = val;
        }
      }
    }
  
    return high;
  };
   
  // Use this to test your function:
  const weightCap = 10;
  const weights = [3, 6, 8];
  const val = [50, 60, 100];
  console.log(knapsack(weightCap, weights, val));
  
  // Leave this so we can test your code:
  module.exports = knapsack;