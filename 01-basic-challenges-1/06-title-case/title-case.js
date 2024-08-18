function titleCase(str) {
    console.log(str);

let words = str.toLowerCase().split(" ")
console.log(words);

for(let i = 0 ; i<words.length;i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
   
}
return words.join(' ')

   

}
console.log(titleCase('thiS tehi rert'));
module.exports = titleCase;
