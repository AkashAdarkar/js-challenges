function removeDuplicates(arr) {
    // return Array.from(new Set(arr))
    let new_arr = []

    for(let val of arr){
        if(new_arr.indexOf(val)===-1){
            new_arr.push(val)
        }

    }
    return new_arr
            
}


console.log(removeDuplicates([true, true, false, true, false]));
module.exports = removeDuplicates;
