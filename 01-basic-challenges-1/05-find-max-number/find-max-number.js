function findMaxNumber(arr) {
    // return Math.max(...arr) in-built funtion
    //solution 2(expected solution)
    let max = arr[0]
    for(let i = 1 ; i < arr.length ; i++){
    if(max <= arr[i]){
        max = arr[i]
        }
    }
    return max

    //solution 3
    // let max = arr[0];
    // for(let e of arr){
    //     if(max <= e){
    //         max = e
    //     }
    // }
    // return max;
}

// arr = [1,2,3]
// console.log(findMaxNumber(arr));
module.exports = findMaxNumber;
