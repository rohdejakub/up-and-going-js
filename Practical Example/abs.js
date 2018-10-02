var myArr = [ 20, -120, 7 ,0 , -10];

function getAbsSum(arr){
    return arr.reduce((count, num) => count + Math.abs(num), 0)
  }
  console.log(getAbsSum(myArr));
