let str="aabbbcc"
function Repeated(str){
    const map = {};
    let maxChar = '';
    let maxCount = 0;
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
        if (map[char] > maxCount) {
            maxCount = map[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log(Repeated(str));  
