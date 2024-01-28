//Fibonacci sequence
function fibonacci(num){
    let resultArr = [];

     if(num === 0){
         resultArr.push(0);
         return resultArr;
     }else{
        resultArr.push(0,1)
        for(let i = 0; i < num; i++){
            let math = resultArr[i]+resultArr[i+1];
            if(resultArr.length < num){
            resultArr.push(math)
            }
        }
        return resultArr;
    }
}
console.log("regular Fibonacci: " + fibonacci(0));


function fibonacciRecursive(num, arr=[0,1]){

    if(num===0){
        return arr.splice(arr.length -2,2);
    }else{
        arr.push(arr[arr.length-1]+arr[arr.length-2]);
        fibonacciRecursive(num-1, arr);
        return arr;
    }
}




console.log("recursive Fibonacci: " + fibonacciRecursive(0));
