let sentence="JavaScript is powerful"
function longest(sentence) {
    const words = sentence.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longest(sentence)); 
