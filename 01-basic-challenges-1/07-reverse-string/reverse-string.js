function reverseString(str) {
    return str.split("").reverse().join('')
    
    // let reverse_name=""
        // for(let i = str.length - 1 ; i >= 0 ;i--){
        //         reverse_name += str[i];
        // }
        // return reverse_name;
}

// console.log(reverseString('akash'));

module.exports = reverseString;
