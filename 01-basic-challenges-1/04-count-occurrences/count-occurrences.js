function countOccurrences(str,char) {
    let  count = 0;
    for(let s of str){
        if(s === char){
            count++
        }

    }
    return count
}

// console.log(countOccurrences('Hello','l'));
module.exports = countOccurrences;
