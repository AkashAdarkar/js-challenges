
function countVowels(str) {
    let count = 0;
    let pattern = /[aeiou]/i; 
    for (const letter of str) {
        if (pattern.test(letter)) {
            count++;
        }
    }
    return count;
}

// console.log(countVowels('OpenAI Chatbot')); 
module.exports = countVowels;


