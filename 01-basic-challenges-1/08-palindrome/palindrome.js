function isPalindrome(str) {
    str =   str.toLowerCase().trim().replace(" ","").replace(/[0-9,         ]/g,'')        
   
   
    if(ReverseWord(str) === str){   
        return true;
    }else{
        return false;
    }
}  


function ReverseWord(str){
    
    let reversed_word = ''; 
    for(let i = str.length - 1 ; i >= 0 ; i--){
        reversed_word += str[i];
    }
    return reversed_word;
}

// console.log(isPalindrome('race0car'));
module.exports = isPalindrome;
